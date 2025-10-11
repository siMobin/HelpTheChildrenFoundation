import Image from "next/image";
import ImageSlider from "./ImageSlider";

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
            Healing Hearts, Conquering Cancer
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground">
            Dedicated to fighting heart disease and blood cancer, improving the
            health and well-being of children in our community.
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
              Help The Children Foundation is dedicated to fighting heart
              disease and blood cancer, two of the most challenging health
              issues affecting children worldwide. We are committed to raising
              awareness, funding life-saving research, and providing essential
              support to patients and their families. Our mission is to create a
              world where every child has the chance to live a healthy life,
              free from the burden of these diseases.
            </p>
            <p className="text-lg text-justify">
              We believe that with the right resources and support, we can make
              a significant impact on the lives of millions. Join us in our
              fight to save lives and promote health for all children.
            </p>
          </div>
          <div className="md:w-1/2">
            <ImageSlider />
          </div>
        </div>
      </section>

      {/* What We Do Section */}

      {/*  */}

      <section className="what-we-do bg-muted/50">
        <div className="div1">
          {/* 1 */}
          <img
            src="/images/health/asset-11.jpg"
            alt="Help The Children Foundation"
          />
        </div>
        <div className="div2">
          {/* 2 */}{" "}
          <img
            src="/images/health/asset-13.jpg"
            alt="Help The Children Foundation"
          />
        </div>
        <div className="div3">
          {/* 3 */}
          <img
            src="/images/health/asset-14.jpg"
            alt="Help The Children Foundation"
          />
        </div>
        <div className="div4">
          {/* 4 */}
          <img
            src="/images/health/asset-15.jpeg"
            alt="Help The Children Foundation"
          />
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
          <img
            src="/images/health/asset-12.jpg"
            alt="Help The Children Foundation"
          />
        </div>
      </section>

      {/* Blood Cancer Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-secondary/5">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Fighting Blood Cancer in Children
            </h2>
            <p className="text-lg text-justify mb-4">
              Blood cancer, such as leukemia and lymphoma, is a devastating
              diagnosis for children and their families. Help The Children
              Foundation provides comprehensive support, from early diagnosis to
              treatment and recovery. We focus on improving access to care,
              funding critical research, and offering emotional and financial
              assistance.
            </p>
            <p className="text-lg text-justify">
              Our programs aim to alleviate the burden of blood cancer, ensuring
              children receive the best possible care and have the strength to
              fight. We work tirelessly to bring hope and healing to these brave
              young warriors.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/health/b_a_post.jpg"
              alt="Child with Blood Cancer"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Heart Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-primary/5">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/health/b_a_post.jpg"
              alt="Child with Blood Cancer"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Combating Pediatric Heart Disease
            </h2>
            <p className="text-lg text-justify mb-4">
              Congenital heart defects and other pediatric cardiovascular
              diseases affect countless children, requiring specialized care and
              long-term support. Help The Children Foundation is at the
              forefront of providing access to life-saving surgeries, medical
              treatments, and rehabilitation programs.
            </p>
            <p className="text-lg text-justify">
              We strive to improve the quality of life for young heart patients
              by supporting their medical journeys, educating families, and
              advocating for better healthcare infrastructure. Our goal is to
              give every child a chance at a healthy heart.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Join Us in Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your support can make a real difference in the lives of children
            battling heart disease and blood cancer. Whether you donate,
            volunteer, or simply spread the word, you are helping to save lives
            and bring hope.
          </p>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Get Involved
          </button>
        </div>
      </section>
    </main>
  );
}
