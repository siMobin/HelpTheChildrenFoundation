import Image from "next/image";

export default function About() {
  return (
    <main>
      {/* Section Title */}

      <section className="about-us-grid">
        <div className="div1">
          {/* 1 */}
          <img src="/images/about/26-June-2024.jpg" alt="13" loading="lazy" />
        </div>
        <div className="div3 main">
          {/* 3 */}
          <p className="text-justify p-4 text-xl">
            Help the Children Foundation is a non-profit organization committed
            to transforming the lives of underprivileged children and helpless
            individuals. We believe that every child deserves the opportunity to
            learn, grow, and thrive, no matter their background. With compassion
            and dedication, we work to break the barriers of poverty by
            providing education, healthcare, and essential resources to those
            who need them the most. Since our inception, we have been driven by
            a singular mission—to bring hope, happiness, and opportunities to
            the lives of the less fortunate. We aim to create a world where no
            child is deprived of basic rights such as education, healthcare, and
            a secure future...
          </p>

          <ul className="text-left p-4">
            <li>Quality Education</li>
            <li>Basic Nutation</li>
            <li>Treatment</li>
            <li>Hope, happiness, and opportunities</li>
          </ul>
        </div>
        <div className="div7">
          {/* 7 */}
          <img src="/images/about/asset-2.jpg" alt="13" loading="lazy" />
        </div>
        <div className="div9">
          {" "}
          {/* 9 */}
          <img src="/images/about/asset-1.jpg" alt="13" loading="lazy" />
        </div>
        <div className="div13">
          {/* 13 */}
          <img src="/images/about/IMG_9152.jpg" alt="" loading="lazy" />
        </div>
        <div className="div14 flex flex-col items-center justify-center">
          {/* 14 */}
          <h1>About Us</h1>
        </div>
        <div className="div15">{/* 15 */}</div>
      </section>

      {/*  */}
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
