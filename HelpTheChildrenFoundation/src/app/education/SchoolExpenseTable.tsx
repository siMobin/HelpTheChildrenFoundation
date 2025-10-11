"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SchoolExpenseTable() {
  return (
    <div className="overflow-x-auto border rounded-lg shadow-md m-4">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-4 px-4 text-center">
        <h2 className="text-2xl font-bold">
          Monthly Expenses Per Student at Daily Ten School
        </h2>
        <p className="text-">
          It&apos;s our promise to provide quality Education & Nutrition for
          underprivileged Children
        </p>
      </div>

      <Table className="border-collapse w-full">
        <TableCaption className="text-base font-semibold pb-4">
          <span>Per Student Monthly Expense{": "}</span>
          <span className="font-bold text-">1163</span> +{" "}
          <span className="font-bold text-">337</span> ={" "}
          <span className="font-bold text-">BDT 1,500</span>
        </TableCaption>

        {/* Section headers */}
        <TableHeader>
          <TableRow className="">
            <TableHead colSpan={3} className="text-center font-semibold border">
              Yearly Expenses Divided to Monthly
            </TableHead>
            <TableHead colSpan={4} className="text-center font-semibold border">
              Monthly Running Expenses
            </TableHead>
          </TableRow>
          <TableRow className="">
            <TableHead className="border">Sl No</TableHead>
            <TableHead className="border">Particulars</TableHead>
            <TableHead className="border">Taka</TableHead>
            <TableHead className="border">Sl No</TableHead>
            <TableHead className="border">Particulars</TableHead>
            <TableHead className="border">Details</TableHead>
            <TableHead className="border">Taka</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table body */}
        <TableBody>
          {[
            [
              "1",
              "Written Books",
              "112",
              "1",
              "Stationary",
              "Printing Sheet, Pen, Pencil, Sharpener, Marker, Etc",
              "60",
            ],
            [
              "2",
              "Dairy",
              "10",
              "2",
              "Nutrition Food",
              "Per student 18tk x 26 Days",
              "468",
            ],
            [
              "3",
              "School Bag",
              "30",
              "3",
              "Hygiene Product",
              "Toothbrush, Toothpaste, Nail cutter, Soap, Shampoo etc.",
              "140",
            ],
            [
              "4",
              "School Uniform",
              "85",
              "4",
              "Salary",
              "Teachers, Staff, School Monitoring",
              "253",
            ],
            ["5", "Shoes", "42", "5", "School Rent & Utilities", "", "144"],
            [
              "6",
              "School Equipment",
              "18",
              "6",
              "Medical Checkup & Medicine",
              "",
              "33",
            ],
            [
              "7",
              "School Campus Modify, Color & Renovation",
              "15",
              "7",
              "Sports Entertainment & Co Curricular Activities",
              "",
              "22",
            ],
            [
              "8",
              "Teacher’s Training & Skill Development",
              "15",
              "8",
              "School Office Exp.",
              "",
              "18",
            ],
            [
              "9",
              "Yearly others cost",
              "10",
              "9",
              "Repairs & Maintenance",
              "",
              "10",
            ],
            ["10", "", "", "10", "Others cost", "", "15"],
          ].map((row, i) => (
            <TableRow
              key={i}
              //   className={i % 2 === 0 ? "bg-accent/10" : "bg-background"}
            >
              {row.map((cell, j) => (
                <TableCell key={j} className="border">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {/* Totals */}
        <TableFooter>
          <TableRow className=" font-bold text-accent-foreground">
            <TableCell colSpan={2} className="text-right border">
              Total=
            </TableCell>
            <TableCell className="border">337</TableCell>
            <TableCell colSpan={3} className="text-right border">
              Total=
            </TableCell>
            <TableCell className="border">1163</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
