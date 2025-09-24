import Image from "next/image";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Activities from "./Activities";

export default function Home() {
  return (
    <main>
      <Header />
      <Slider />
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          minima, nemo est explicabo illo quaerat atque blanditiis placeat
          adipisci numquam natus excepturi ab vitae commodi mollitia consectetur
          omnis in. Pariatur officiis at excepturi dolores sit porro illo veniam
          rerum perferendis doloribus, quam sint officia culpa labore ipsam
          voluptas praesentium fugit quod libero eum. Quod aliquid dignissimos
          quia accusamus similique tempora esse. Amet enim inventore ut dolores
          laborum nisi dolorum itaque sit iusto nesciunt iure dolor molestiae
          sint numquam perferendis architecto labore et est quisquam qui,
          voluptatem ullam fuga optio ea. Nemo labore deserunt possimus? Beatae,
          molestiae officiis nostrum sequi atque sed quibusdam dolorem aperiam
          molestias deserunt cumque qui exercitationem, aliquid, inventore quo
          cum dolore nulla. Itaque, explicabo. In reiciendis iure voluptatem
          deleniti officiis rerum possimus iusto omnis ea sequi quod esse,
          labore distinctio corporis velit minima rem enim magni totam ipsam.
          Tempora eligendi nihil, iusto cum enim, fugiat esse eveniet delectus
          labore possimus beatae facere atque veritatis ipsam, sint dolorem!
          Cumque quibusdam repudiandae maiores qui soluta dignissimos debitis
          cum ipsum iusto tenetur quasi commodi fuga fugiat rerum nesciunt
          sapiente accusamus modi numquam, quidem molestiae architecto.
          Quisquam, laboriosam voluptatum eius impedit quibusdam delectus
          asperiores consequatur atque repellendus repudiandae nisi enim eos.
        </p>
      </section>

      <section className="flex justify-center">
        <div className="relative min-h-96 pb-12 bg-gray-50">
          <div className="container max-w-6xl 2xl:max-w-6xl py-20">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
              className="flex flex-col lg:flex-row shadow-2xl md:rounded-l-2xl md:rounded-r-2xl aos-init aos-animate"
            >
              <div className="basis-1/2 flex-1 md:rounded-l-2xl">
                <picture>
                  <img
                    loading="lazy"
                    width="576"
                    height="550"
                    className="size-full object-cover object-center md:rounded-l-2xl lazyloaded"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Li6mpF-uNk6b2Pt1X_Co_hsj-aKa_j9o8RWFH-Uuc6fp1bla2dEVonP2aHnXH30sV1A&usqp=CAU"
                    alt="Sponsor a child"
                  />
                </picture>
              </div>
              <div className="basis-1/2 flex-1 bg-white flex items-center rounded-r-2xl">
                <div className="p-8">
                  <h2 className="uppercase text-2xl font-bold font-heading mb-4 text-secondary">
                    Sponsor a child program
                  </h2>
                  <p className="mb-6 text-md text-secondary">
                    We believe in the potential of every child and that
                    education is the key to unlocking that potential. Yet, due
                    to financial constraints, for countless children, education
                    is an unattainable luxury. For the past 17 years, we have
                    been working to change this reality!
                  </p>
                  <p className="mb-6 text-md text-secondary">
                    Through our Sponsor A Child Program, we have ensured quality
                    education for over 5000 children from underserved
                    communities.
                  </p>
                  <p className="mb-6 text-md text-secondary">
                    You can also join the initiative. With just BDT 2,500 per
                    month, you can give children in need access to educational
                    opportunities and support their journey towards a brighter
                    future. Help Change a life today!
                  </p>
                  <Link className="capitalize" href="#">
                    <Button>Be A Sponsor</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
              Become a national volunteer
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
