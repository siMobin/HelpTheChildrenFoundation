import Image from "next/image";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import MapEmbed from "@/components/MapEmbed";

export default function Contact() {
  return (
    <main>
      <Header />
      <section className="min-h-dvh grid grid-cols-1 lg:grid-cols-2 gap-18 bg-foreground text-background p-24">
        <div className="flex  justify-center flex-col space-y-4">
          <h1 className="text-4xl ">Get in touch</h1>
          <p>
            Write one or two welcoming sentences that encourage contact. Include
            your response time commitment and highlight your team&apos;s
            readiness to help.
          </p>
          <span className="flex gap-4">
            <MapPin size={16} className="" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            repellendus cumque repudiandae est ipsam, ipsum perspiciatis animi
            eligendi quis sit tempore alias pariatur, eveniet magni nisi, totam
            dolor reiciendis eos?
          </span>
          <Link href="tel:" className="inline-flex gap-2 items-center">
            <PhoneCall size={16} />
            +8801771744444
            <br />
            +8802222228165
          </Link>
          <Link href="mailto:" className="inline-flex gap-2 items-center">
            <Mail size={16} />
            info@hcf.com
          </Link>
        </div>
        <div className="">
          <div className="h-full w-full">
            <MapEmbed />
          </div>
        </div>
      </section>
    </main>
  );
}
