import Image from "next/image";
import React from "react";

const FuturePlans = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Image
            src="/images/school/panda.webp"
            alt="Students of Daily Ten School"
            width={900}
            height={600}
            className="rounded-lg shadow-lg mx-auto mb-8"
          />
          <h2 className="text-6xl font-bold ">
            Future Plans for the Students of Daily Ten School
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="lg:col-span-2 mb-8">
            <p className="text-lg text-justify leading-relaxed">
              The way for a brighter future for our students. After completing
              the 8th grade, students will be guided into three distinct
              pathways based on their merit and dedication. This approach
              ensures that each student can maximize their potential and prepare
              for a successful future.
            </p>
          </div>

          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              # Agradoot (Pioneers: Highly Talented & Dedicated Students)
            </h3>
            <p className="text-justify leading-relaxed">
              Students who demonstrate exceptional academic performance and
              dedication will continue their studies under our direct
              supervision at our residential center. They will complete their
              education from the 9th grade to the Higher Secondary Certificate
              (HSC) level with full support from the school. Additionally, we
              will provide comprehensive assistance for their higher education,
              ensuring they have the resources to achieve their dreams. We
              believe that among them will emerge future doctors, engineers,
              researchers, and professionals in various esteemed fields. To
              support them, we will offer tuition, study materials, career
              counseling, and all necessary guidance.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              # Udioman (Emerging: Less Attentive & Academically Weak Students)
            </h3>
            <p className="text-justify leading-relaxed">
              For students who struggle academically or show less interest in
              traditional studies, we will provide technical and vocational
              training at our residential center. Our goal is to equip them with
              practical skills that will enable them to build a sustainable
              livelihood. Training will be offered in various fields such as
              electrical work, tailoring, household appliance repair, garment
              industry work, and computer skills. With these skills, they will
              have the opportunity to become self-reliant and secure respectable
              jobs both locally and internationally.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            # Agrosor (Advancing: Average-performing Students)
          </h3>
          <p className="text-justify leading-relaxed">
            Students with moderate academic performance will be enrolled in
            nearby schools for their 9th-grade education after completing the
            8th grade. Daily Ten School will cover all their educational
            expenses and provide continuous monitoring to ensure they do not
            drop out due to financial hardships. We will focus on their personal
            development and future prospects by offering guidance and necessary
            support.
          </p>
          <p className="mt-4 text-justify leading-relaxed">
            The core objective of this initiative is to educate and empower
            every student according to their abilities, ensuring they become
            self-sufficient and contribute to the development of the nation.
            Daily Ten School firmly believes that with proper guidance and
            opportunities, every child can bring positive change to their lives
            and society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;
