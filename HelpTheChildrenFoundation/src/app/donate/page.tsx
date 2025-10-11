import DonateAsSponsor from "@/components/Donate_As_Sponsor";

export default function Donate() {
  return (
    <main className="space-y-4">
      <DonateAsSponsor />
      <div className="flex justify-center">
        <div className="max-w-2xl m-4 text-center space-y-4 mnb-8  ">
          <h2 className="text-4xl font-bold">Help our children to make their lives better.</h2>
          <p className="text-xl">Your support is important to our mission of providing education and empowerment to underprivileged children in Bangladesh.</p>
        </div>
      </div>

      <section className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl truncate relative bg-secondary text-white rounded-lg shadow-xl">
          {/* <div> */}
          <img src="/images/donate/donate.png" alt="hcf" loading="lazy" data-aos="fade-up" data-aos-duration="1000" className="h-full object-bottom object-fill px-4 pt-4 col-span-1 md:col-span-2" />
          {/* </div> */}

          <div className="py-4">
            <h3 className="text-2xl font-semibold mb-4">Bank Information</h3>
            <div className="flex gap-8 flex-col items- justify-between ">
              <div className="flex flex-col gap-1">
                <img src="https://www.bracbank.com/client_end/img/bb/Bracbank-sm-logo.png" alt="Brack Bank" loading="lazy" className="w-30" />
                <div className="inline-flex gap-2">
                  <span className="font-bold">A/C Name:</span>
                  <p>Help The Children Foundation</p>
                </div>
                <div className="inline-flex gap-2">
                  <span className="font-bold">A/C No:</span>
                  <p>1505204844394001</p>
                </div>
                <div className="inline-flex gap-2">
                  <span className="font-bold">Branch:</span>
                  <p>Motijheel Branch</p>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <img src="https://www.dutchbanglabank.com/img/logo.png" alt="Brack Bank" loading="lazy" className="w-30" />
                <div className="inline-flex gap-2">
                  <span className="font-bold">A/C Name:</span>
                  <p>Help The Children Foundation</p>
                </div>
                <div className="inline-flex gap-2">
                  <span className="font-bold">A/C No:</span>
                  <p>1781100026597</p>
                </div>
                <div className="inline-flex gap-2">
                  <span className="font-bold">Branch:</span>
                  <p>Rampura Branch</p>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <img src="/images/donate/bkash.svg" alt="Brack Bank" loading="lazy" className="w-20" />
                <div className="inline-flex gap-2">
                  <span className="font-bold">Bkassh (Personal):</span>
                  <p>01711 794 675</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
