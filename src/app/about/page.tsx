import Image from "next/image";

export default function About() {
  return (
    <main>
      {/* Section Title */}

      <div className="about-us-grid">
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
      </div>
    </main>
  );
}
