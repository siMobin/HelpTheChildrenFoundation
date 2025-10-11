import Image from "next/image";
import Slider from "./Slider";
import Term from "./Term";

export default function Health() {
  return (
    <main className="space-y-">
      {/* <Slider /> */}

      {/* <div className="h-screen">
        <section className="grid h-full grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <Image
              src="/images/health/Asset-5.jpg"
              alt="Boy with biscuit"
              fill
              className="object-cover"
            />
          </div>

          <div
            className="flex items-center justify-center p-12"
            style={{ backgroundColor: "#F15A29" }}
          >
            <h2 className="font-serif text-4xl leading-relaxed text-white">
              Nutrition is the most important factor in the growth and
              development of children
            </h2>
          </div>

          <div
            className="flex items-center justify-center p-12"
            style={{ backgroundColor: "#EC1C24" }}
          >
            <h2 className="font-serif text-4xl leading-relaxed text-white">
              We must help the{" "}
              <span className="font-bold">underprivileged</span> for poverty is
              not a choice but a circumstance.
            </h2>
          </div>

          <div className="relative">
            <Image
              src="/images/health/Asset-4.jpg"
              alt="Man and boy"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </div> */}

      <section>
        <div className="bg-accent/10 grid grid-cols-1 md:grid-cols-2 gap-8 p-4 min-h-screen">
          <img
            src="\images\health\grocery-1.png"
            alt=""
            className="h-full"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
          <span className="max-w-2xl flex flex-col justify-center gap-4">
            <h2 className="text-4xl font-semibold">
              Monthly Family Food Support Distribution
            </h2>
            <p className="text-xl text-justify">
              To provide consistent and sustainable food support to
              underprivileged families and individuals, ensuring that their
              basic nutritional needs are met on a regular basis. Our goal is to
              improve overall health and well-being, reduce hunger and
              malnutrition, and enhance the quality of life for those in need.
              Through our initiatives, we strive to bring hope, security, and
              dignity to vulnerable communities, empowering them to live
              healthier, more productive lives. By addressing immediate food
              needs and fostering long-term support, we aim to create a
              compassionate and caring society where everyone has access to
              essential nourishment and the opportunity to thrive.
            </p>
          </span>
        </div>
      </section>

      <Term />
    </main>
  );
}
