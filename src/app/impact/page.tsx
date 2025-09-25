import Image from "next/image";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import MapEmbed from "@/components/MapEmbed";

export default function Impact() {
  return (
    <main>
      <section className="max-w-6xl flex items-center justify-center mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
          <div className="relative overflow-clip bg-white group flex-col justify-start text-left p-4 rounded-lg shadow-lg z-10">
            {/* Hover background effect */}
            <div className="absolute bg-primary  w-0 border-l-2 border border-primary h-full -z-10 left-0 top-0 duration-500 group-hover:w-full"></div>

            {/* Card content */}
            <div className="text-left p-4 border border-dashed rounded-lg border-gray-300 hover:border-gray-500 hover:text-white duration-200 h-full">
              <h2 className="font-bold text-xl md:text-2xl uppercase mb-2">
                Our Vision
              </h2>
              <p className="whitespace-pre-line">
                Our Foundation envisions a society free from all forms of
                exploitation and discrimination, where every child has the
                opportunity for education, and every youth has the opportunity
                to realise their potential.
              </p>
            </div>
          </div>

          <div className="relative overflow-clip bg-white group flex-col justify-start text-left p-4 rounded-lg shadow-lg z-10">
            {/* Hover background effect */}
            <div className="absolute bg-primary  w-0 border-l-2 border border-primary h-full -z-10 left-0 top-0 duration-500 group-hover:w-full"></div>

            {/* Card content */}
            <div className="text-left p-4 border border-dashed rounded-lg border-gray-300 hover:border-gray-500 hover:text-white duration-200 h-full">
              <h3 className="font-bold text-xl md:text-2xl uppercase mb-2">
                Our Mission
              </h3>
              <p className="whitespace-pre-line">
                Our Foundation is committed to fostering a culture of empathy,
                compassion, and solidarity among all individuals, regardless of
                socioeconomic status or background. We believe in the power of
                collective action to create a better world for our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl flex items-center justify-center mx-auto relative mb-16">
        <div>
          <div className="relative overflow-clip bg-white group flex-col justify-start text-left p-4 rounded-lg shadow-lg z-10">
            {/* Hover background effect */}
            {/* <div className="absolute bg-primary  w-0 border-l-2 border border-primary h-full -z-10 left-0 top-0 duration-500 group-hover:w-full"></div> */}

            {/* Card content */}
            <div className="text-left p-4 border border-dashed rounded-lg border-gray-300 hover:border-gray-500 hover:text duration-200 h-full">
              <h3 className="font-bold text-xl text-center md:text-2xl uppercase mb-2">
                Our Impact
              </h3>
              <p className="whitespace-pre-line">
                Our Foundation is committed to fostering a culture of empathy,
                compassion, and solidarity among all individuals, regardless of
                socioeconomic status or background. We believe in the power of
                collective action to create a better world for our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
