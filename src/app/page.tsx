import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RegularSchoolActivities from "@/components/RegularSchoolActivities";
import { Activity, ArrowRight, School } from "lucide-react";
import Documentary from "@/components/Documentary";

export default function Home() {
  return (
    <main>
      <Slider />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-18 max-h-min relative bg-primary text-white">
        <div className="flex justify-center overflow-clip">
          <img
            src="\images\sponsor-a-child.png"
            alt="sponsor a child"
            loading="lazy"
            className="w-auto h-full max-h-[60dvh] object-cover pt-4 overflow-clip"
            data-aos="fade-up"
            data-aos-duration="1000"
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

      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 space-y-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold " data-aos="fade-down">
              Nurturing Futures, One Child at a Time
            </h2>
            <p
              className="text-xl  mt-4 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Our two foundational pillars, Education and Health, work in
              harmony to create a holistic support system for children in need.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Education Card */}
            <div
              className="w-full lg:w-2/5 bg-white rounded-xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-1000"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary text-white rounded-full">
                  <School className="" />
                </div>
                <h3 className="ml-4 text-3xl font-bold text-gray-800">
                  Daily Ten School
                </h3>
              </div>
              <p className=" mb-6">
                We unlock the boundless potential in every child through quality
                education, providing them with the tools to build a brighter,
                self-reliant future.
              </p>
              <Link href="/education">
                <Button className="">Explore Education Programs</Button>
              </Link>
            </div>
            {/* Health Card */}
            <div
              className="w-full lg:w-2/5 bg-white rounded-xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-1000"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-secondary text-white rounded-full">
                  <Activity />
                </div>
                <h3 className="ml-4 text-3xl font-bold text-gray-800">
                  Health & Well-being
                </h3>
              </div>
              <p className="mb-6">
                A healthy start is crucial. We provide essential healthcare,
                nutritious meals, and hygiene education to ensure children can
                thrive physically and mentally.
              </p>
              <Link href="/health-aid">
                <Button variant={"secondary"} className="">
                  Discover Health Initiatives
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="space-y-4 mb-4">
        <div className="text-center space-y-4">
          <h1 className="">Regular School Activities</h1>
          <p className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </p>
        </div>

        <RegularSchoolActivities showCount={6} />
        <div className="flex justify-center items-center">
          <Link
            href="/education/#regular-school-activities"
            className="animate-shake-x inline-flex justify-center mt-12 items-center gap-2 bg-accent/50  border border-primary/50 hover:bg-accent transition-colors duration-300 px-2 py-1 rounded-full "
          >
            See More
            <ArrowRight size={20} className="" />
          </Link>
        </div>
      </section>

      {/*  */}

      {/* <section className="max-w-full bg-foreground">
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
      </section> */}
      <Documentary url="https://youtu.be/dQw4w9WgXcQ?si=vGEm5oIRx1awgOX1" />
    </main>
  );
}
