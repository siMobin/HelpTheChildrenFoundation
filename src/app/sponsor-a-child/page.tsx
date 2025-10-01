"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Backpack,
  Banana,
  Club,
  GraduationCap,
  HeartPlus,
  NotebookPen,
  UserPen,
} from "lucide-react";
import Unsponsored from "@/components/Unsponsored";

export default function SponsorAChild() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    numberOfChildren: "",
    interval: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Child Sponsorship Request from ${formData.firstName} ${formData.lastName}`;
    const body = `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Contact Number: ${formData.contact}
Number of Children: ${formData.numberOfChildren}
Preferred Contribution Interval: ${formData.interval}

Additional Info: Please process this sponsorship request.
    `;

    const mailtoLink = `mailto:sponsor@yourorg.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      numberOfChildren: "",
      interval: "",
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-h-min relative bg-primary text-white">
        <div className="shadow-2xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Li6mpF-uNk6b2Pt1X_Co_hsj-aKa_j9o8RWFH-Uuc6fp1bla2dEVonP2aHnXH30sV1A&usqp=CAU"
            alt=""
            loading="lazy"
            className="w-full h-full max-h-[60dvh] object-cover"
          />
        </div>
        <div className="p-4 space-y-4">
          <h1>Help a child rewrite their future</h1>
          <p className="text-justify text-lg">
            Within every child lies boundless potential, and education is the
            key to unlocking opportunities that allow this potential to
            flourish. By sponsoring a child, you are providing marginalised
            children with essential tools that will empower them to change their
            reality and create a better and brighter future, not only for
            themselves and their families but also for their communities as a
            whole.
          </p>
          <Button variant={"secondary"}>Sponsor a child</Button>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="p-4 bg-foreground text-background">
        <div className="p-4 space-y-4 text-center">
          <h1>100 BDT</h1>
          <p className="text-lg">
            Your monthly contribution helps provide life-changing, essential
            needs to your sponsored child and his or her entire community
          </p>
        </div>

        <div className="sponsor-a-child-properties grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          <div className="flex flex-col items-center gap-2">
            <GraduationCap />
            <span>Quality Education</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <UserPen />
            <span>Best Teachers</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Backpack />
            <span>School Bag</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <NotebookPen />
            <span>Study Materials</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Club />
            <span>Co-curricular Activities</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <HeartPlus />
            <span>Health Care</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Banana />
            <span>Nutrition</span>
          </div>
        </div>
      </section>

      {/* Sponsorship Form */}
      <section className="p-6 ">
        <h2 className="text-xl font-bold mb-4 text-center">
          Child Sponsorship Information Form
        </h2>

        <form
          action="mailto:sponsor@yourorg.com"
          method="POST"
          encType="text/plain"
          className="max-w-lg mx-auto space-y-4 bg-white p-6 rounded-lg shadow"
        >
          <input
            type="text"
            name="First Name"
            placeholder="First Name"
            className="w-full border rounded p-2"
            required
          />
          <input
            type="text"
            name="Last Name"
            placeholder="Last Name"
            className="w-full border rounded p-2"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="w-full border rounded p-2"
            required
          />
          <input
            type="text"
            name="Contact Number"
            placeholder="Contact Number"
            className="w-full border rounded p-2"
            required
          />

          <select
            name="Number of Children"
            className="w-full border rounded p-2"
            required
          >
            <option value="">-None-</option>
            <option value="1">1 Child</option>
            <option value="2">2 Children</option>
            <option value="3">3 Children</option>
          </select>

          <select
            name="Contribution Interval"
            className="w-full border rounded p-2"
            required
          >
            <option value="">-None-</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Yearly">Yearly</option>
          </select>

          <div className="flex space-x-4">
            <Button type="submit">Submit</Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </form>
      </section>

      <section>
        <h1 className="text-center">Unsponsored Children</h1>
        <Unsponsored />
      </section>
    </main>
  );
}
