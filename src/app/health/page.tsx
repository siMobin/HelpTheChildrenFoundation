import Image from "next/image";
import Slider from "./Slider";
import Term from "./Term";

export default function Health() {
  return (
    <main className="space-y-">
      <Slider />

      <div className="h-screen">
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
      </div>

      <Term />

      <section className="flex justify-center  mb-4 max-h- relative">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 overflow-clip shadow rounded-2xl max-w-5xl h-min">
          <div className="bg-[url(/images/school/education-bg.svg)] bg-no-repeat bg-cover">
            <img
              src="/images/health/meet-jisan.png"
              alt=""
              loading="lazy"
              className="h-full px- pt-8"
              data-aos="fade-up"
            />
          </div>

          <div className="flex flex-col gap-4 py-4 pr-4 justify-center">
            <h1 className="text-4xl font-bold text-left border-l-24 border-primary">
              Meet Md. Jisan
            </h1>

            <p className="text-justify">
              Due to an esophageal problem, Jisan&apos;s father has been sick
              for the past eight months. Unable to work because of his illness,
              the family is burdened with financial hardship. Despite these
              struggles, Jisan has arrived at school with his mother to take his
              admission test, leaving his ailing father in the hospital. Though
              the family is plagued by financial difficulties, this young
              student is rich in talent and determination. Often, financial
              constraints force gifted students like Jisan to drop out of
              school, only to be found amidst the crowd of child laborers.
              <br />
              <br />
              The power of dreams can conquer poverty. Jisan dreams of becoming
              a doctor and providing free medical care to the poor and needy.
              Perhaps he has witnessed the harsh reality of being unable to
              afford treatment up close.
              <br />
              <br />
              May Jisan&apos;s dream come true. The courage to dream is the
              first step to overcoming poverty.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
