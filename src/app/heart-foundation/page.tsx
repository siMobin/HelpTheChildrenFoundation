import Image from "next/image";

export default function HeartFoundation() {
  return (
    <main className="bg-background text-foreground" id="heart-foundation">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(255,255,255,1)),url('/images/health/bg.jpg')] bg-cover bg-no-repeat bg-bottom">
        {/* <img
          src="https://images.pexels.com/photos/1633417/pexels-photo-1633417.jpeg"
          alt="Heart Health"
          className="absolute z-0 opacity-50 object-cover w-full h-full object-bottom bg-primary"
        /> */}
        <div
          className="relative z-10 p-8 bg-secondary bg-opacity-50 rounded-lg"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h1 className="text-5xl font-bold mb-4 text-primary-foreground">
            For Every Heartbeat
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground">
            Dedicated to fighting heart disease and improving the cardiovascular
            health of our community.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Our Mission
            </h2>
            <p className="text-lg text-justify mb-4">
              The Heart Foundation is dedicated to fighting heart disease, a
              leading cause of death worldwide. We are committed to raising
              awareness, funding life-saving research, and providing essential
              support to patients and their families. Our mission is to create a
              world free from heart disease and stroke.
            </p>
            <p className="text-lg text-justify">
              We believe that with the right resources and support, we can make
              a significant impact on the lives of millions. Join us in our
              fight to save lives and promote heart health for all.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/health/b_a_post.jpg"
              alt="Community Health"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}

      {/*  */}

      <section className="what-we-do bg-muted/50">
        <div className="div1">
          {/* 1 */}
          <img src="/images/health/asset-11.jpg" alt="" />
        </div>
        <div className="div2">
          {/* 2 */} <img src="/images/health/asset-5.jpg" alt="" />
        </div>
        <div className="div3">
          {/* 3 */}
          <img src="/images/health/asset-5.jpg" alt="" />
        </div>
        <div className="div4">
          {/* 4 */}
          <img src="/images/health/asset-5.jpg" alt="" />
        </div>
        <div className="div6">
          {/* 6 */}
          <h1>What We Do?</h1>
        </div>
        <div className="div7 p-4">
          {/* 7 */}
          <p className="text-xl text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut totam
            sit labore ipsum voluptatem exercitationem neque mollitia eius
            tempora debitis facilis excepturi maxime, vel nostrum, ab in.
            Maiores, veniam distinctio!
          </p>

          <ul className="text-left p-">
            <li>
              <strong>Prevention & Awareness:</strong> Educating the public on
              the importance of a heart-healthy lifestyle.
            </li>
            <li>
              <strong>Patient Support:</strong> Offering resources and support
              networks for patients and their families.
            </li>
            <li>
              <strong>Medical Research:</strong> Funding innovative research to
              find better treatments and cures.
            </li>
            <li>
              <strong>Community Programs:</strong> Running local events and
              health screenings to promote wellness.
            </li>
          </ul>
        </div>
        <div className="div8">
          {/* 8 */}
          <img src="/images/health/asset-5.jpg" alt="" />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Join Us in the Fight</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your support can make a real difference. Whether you donate,
            volunteer, or simply spread the word, you are helping to save lives.
          </p>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Get Involved
          </button>
        </div>
      </section>
    </main>
  );
}
