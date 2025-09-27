import Image from "next/image";

export default function Education() {
  const campuses = [
    {
      name: "Badda Campus",
      address: "DIT-14 no road, Anandanagar, Merul Badda, Dhaka-1212",
    },
    {
      name: "Basabo Campus",
      address: "East Rajarbagh, Baghpara, Kalibari, Basabo, Dhaka-1214",
    },
    {
      name: "Nandipara Campus",
      address: "Titas road, Nondipara, Basabo, Dhaka-1214",
    },
    {
      name: "Madaripur Campus",
      address: "Tumchar, Sheholpotti, Kalkini, Madaripur",
    },
  ];

  return (
    <main className="space-y-8">
      {/* Section Title */}
      <section
        id="vision_of_daily_ten_school"
        className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-10 text-justify text-white text-lg"
      >
        <div className="campus-list">
          <img
            src="/images/school/daily_ten_school.svg"
            alt=""
            loading="lazy"
          />
          <p>
            Undoubtedly, today's children represent tomorrow's bright potential.
            Ensuring their human rights is paramount, with education being a
            fundamental necessity. The mission of Daily Ten School is to prepare
            homeless and impoverished children for a brighter future, thereby
            contributing to our country's perfect literacy rate. Alongside
            education, nutrition is of significant concern and is prioritized
            accordingly.
          </p>
        </div>
        <img src="/images/school/education.svg" alt="" loading="lazy" />
      </section>

      <section className="flex justify-center  ">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 overflow-clip shadow rounded-2xl max-w-5xl h-min">
          <div className="bg-[url(/images/school/education-bg.svg)] bg-no-repeat bg-cover">
            <img
              src="/images/school/1.svg"
              alt=""
              loading="lazy"
              className="w-[] px-4 pt-8"
            />
          </div>

          <div className="flex flex-col gap-4 py-4 pr-4 justify-center">
            <div>
              <img
                src="/images/school/shine.svg"
                alt=""
                loading="lazy"
                className="w-[75%] px-4 pt-8"
              />
            </div>
            <h1 className="text-4xl font-bold text-center">
              Journey Of Daily Ten School
            </h1>

            <p className="text-justify">
              Since 2009, Daily Ten School has been offering education in
              exchange of food. Recognizing the interest of underprivileged and
              street children in education, the first formal school was
              established in Basabo in 2015. This marked the beginning of Daily
              Ten School's journey. Additional campuses were subsequently
              launched in Madaripur in 2017 and Badda in 2019. Most recently, in
              January 2024, a new campus was inaugurated in Nandipara.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 m-8">
        <div>
          <h1 className="text-4xl font-bold text-center">
            <span className="text-primary text-2xl">
              Significance of the name
            </span>
            <br />
            <span>Daily Ten School</span>
          </h1>
          <p className="text-xl text-justify">
            The school's funds originated from a daily contribution of 10 BDT
            per member, totaling 300 BDT monthly from Daily Ten members. This
            collective effort, comprising 110 Daily Ten members, resulted in the
            establishment of the first school campus. Additionally, impoverished
            pupils receive ten benefits daily, hence the name "Daily Ten
            School."
          </p>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-center">
            <span className="text-primary text-2xl">Financing of</span>
            <br />
            <span>Daily Ten School</span>
          </h1>
          <p className="text-xl text-justify">
            Our schools run through child sponsorship as well as subscription
            from Daily Ten Members. At present the average monthly expenditure
            of each child is BDT 1500. So child sponsors are contributing their
            monthly 1500 taka subscription for per children.
          </p>

          <div className="flex gap-4 mt-4">
            <img
              src="/images/school/bank.jpg"
              alt=""
              loading="lazy"
              className="w-full"
            />
            <img
              src="images/school/campus-1.jpg"
              loading="lazy"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </section>

      <h1 className="text-4xl font-bold text-center">
        Daily Ten School Campus
      </h1>
      {/* campus section */}
      <section id="campus" className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-justify text-lg max-w-6xl">
          {campuses.map((campus, index) => (
            <div className="campus-list" key={index}>
              <h3>{campus.name}</h3>
              <address>{campus.address}</address>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
