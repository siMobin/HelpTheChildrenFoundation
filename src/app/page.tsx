import Image from "next/image";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Activities from "./Activities";

export default function Home() {
  return (
    <main>
      <Slider />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-18 max-h-min relative bg-primary text-white">
        <div className="shado flex justify-center">
          <img
            src="\images\sponsor-a-child.png"
            alt="sponsor a child"
            loading="lazy"
            className="w-auto h-full max-h-[60dvh] object-cover pt-4"
            data-aos="fade-right"
          />
        </div>
        <div className="p-4 space-y-4 flex flex-col justify-center">
          <h1 className="text-4xl font-bold">Sponsor a child program</h1>
          <p className="text-justify text-lg">
            Within every child lies boundless potential, and education is the
            key to unlocking opportunities that allow this potential to
            flourish. By sponsoring a child, you are providing marginalised
            children with essential tools that will empower them to change their
            reality and create a better and brighter future, not only for
            themselves and their families but also for their communities as a
            whole.
          </p>
          <Link href="/sponsor-a-child">
            <Button variant={"secondary"}>Sponsor A Child</Button>
          </Link>
        </div>
      </section>

      {/*  */}

      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">Regular School Activities</h1>
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit
        </p>
      </div>

      <Activities />

      {/*  */}

      <section className="max-w-full bg-foreground">
        <div className="w-4/5 md:w-3/5 mx-auto text-center relative z-20 pt-10 sm:pt-6 md:pt-12">
          <h2 className="text-2xl md:text-4xl font-bold font-heading text-center capitalize text-white">
            Volunteerism
          </h2>
          <p className="text-xl text-center mt-5 mb-10 text-white">
            With an aim to mobilize the youth to build a better nation, we have
            empowered more than <strong>55,000 young changemakers</strong> from
            all across Bangladesh and engaged them in driving positive societal
            change.
          </p>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="500"
            data-aos-delay="200"
            className="bg-secondary text-white p-4 rounded-2xl shadow-xl w-full lg:w-3/5 mx-auto aos-init aos-animate"
          >
            <div className="flex w-full flex-col lg:flex-row py-10">
              <div className="card rounded-box grid flex-grow place-items-center">
                <span className="text-3xl md:text-4xl font-bold font-heading">
                  1+
                </span>
                <p className="mt-3 text-md font-sans">Nationwide Volunteers</p>
              </div>
              <div className="divider lg:divider-horizontal"></div>
              <div className="card rounded-box grid flex-grow place-items-center">
                <span className="text-3xl md:text-4xl font-bold font-heading">
                  69
                </span>
                <p className="mt-3 text-md font-sans">Districts Covered</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary text-center -mt-[168px] pt-[218px] md:-mt-[180px] md:pt-[230px] lg:-mt-[105px] lg:pt-[155px] pb-10 sm:pb-6 md:pb-12">
          <h3 className="text-3xl md:text-4xl w-4/5 mx-auto">
            Do you want to work for the{" "}
            <strong>Underprivileged Communities</strong> and change their lives?
          </h3>
          <Link rel="nofollow" className="" href="#" target="_blank">
            <Button variant={"secondary"} className="mt-5">
              Become A Volunteer
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
