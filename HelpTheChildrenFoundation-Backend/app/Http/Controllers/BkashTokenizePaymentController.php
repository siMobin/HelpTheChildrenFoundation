<?php

namespace App\Http\Controllers;

use App\Models\Sponsor;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Karim007\LaravelBkashTokenize\Facade\BkashPaymentTokenize;

class BkashTokenizePaymentController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function index()
    {
        return view('bkashT::bkash-payment');
    }

    public function createPayment(Request $request)
    {
        try {
            $inv = uniqid('inv_');

            $amount = $request->input('amount');
            if (!$amount || !is_numeric($amount) || $amount <= 0) {
                return response()->json(['error' => 'Invalid amount'], 400);
            }

            $data = $request->all();
            $data['intent'] = 'sale';
            $data['mode'] = '0011';
            $data['payerReference'] = $inv;
            $data['currency'] = 'BDT';
            $data['amount'] = $amount; // Keep dynamic amount
            $data['merchantInvoiceNumber'] = $inv;
            $data['callbackURL'] = config("bkash.callbackURL");

            // optional fields
            $data['full_name'] = $request->input('full_name') ?? '';
            $data['description'] = $request->input('description') ?? '';
            $data['sponsor_no'] = $request->input('sponsor_no') ?? '';

            $request_data_json = json_encode($data);

            $response = BkashPaymentTokenize::cPayment($request_data_json, 1);

            if (isset($response['bkashURL'])) {
                return response()->json(['bkashURL' => $response['bkashURL']]);
            } else {
                return response()->json([
                    'error' => $response['statusMessage'] ?? 'Payment initiation failed',
                ], 500);
            }
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }



    public function callBack(Request $request)
    {
        if ($request->status == 'success') {
            $response = BkashPaymentTokenize::executePayment($request->paymentID);

            if (!$response) {
                $response =  BkashPaymentTokenize::queryPayment($request->paymentID);
            }

            if (isset($response['statusCode']) && $response['statusCode'] == "0000" && $response['transactionStatus'] == "Completed") {
                return BkashPaymentTokenize::success('Thank you for your payment', $response['trxID']);
            }
            return BkashPaymentTokenize::failure($response['statusMessage']);
        } else if ($request->status == 'cancel') {
            return BkashPaymentTokenize::cancel('Your payment is canceled');
        } else {
            return BkashPaymentTokenize::failure('Your transaction is failed');
        }
    }

    public function searchTnx($trxID)
    {
        return BkashPaymentTokenize::searchTransaction($trxID);
    }

    public function refund(Request $request)
    {
        $this->validate($request, [
            'paymentID' => 'required',
            'trxID' => 'required',
            'amount' => 'required'
        ]);
        $paymentID = $request->paymentID;
        $trxID = $request->trxID;
        $amount = $request->amount;
        $reason = 'this is test reason';
        $sku = 'abc';
        return BkashPaymentTokenize::refund($paymentID, $trxID, $amount, $reason, $sku);
    }
    public function refundStatus(Request $request)
    {
        $this->validate($request, [
            'paymentID' => 'required',
            'trxID' => 'required',
        ]);
        $paymentID = $request->paymentID;
        $trxID = $request->trxID;
        return BkashPaymentTokenize::refundStatus($paymentID, $trxID);
    }

    public function searchSponsor(Request $request)
    {
        $request->validate([
            'sponsor_no' => 'required|string',
        ]);

        $sponsor = Sponsor::where('sponsor_no', $request->query('sponsor_no'))
            ->with('phoneNumbers') // Eager load phone numbers
            ->first();

        if ($sponsor) {
            $mobile = $sponsor->phoneNumbers->first() ? $sponsor->phoneNumbers->first()->phone_number : '';

            return response()->json([
                'fullName' => $sponsor->sponsor_name,
                'mobile' => $mobile,
                'panding' => 0, // Placeholder
                'advance' => 0, // Placeholder
                'amount' => 1500,
            ]);
        } else {
            return response()->json(['message' => 'Sponsor not found'], 404);
        }
    }
}
