"use client";
import React from "react";

type ActivitiesCardProps = {
  title: string;
  description: string;
  delay?: number;
};

const ActivitiesCard: React.FC<ActivitiesCardProps> = ({
  title,
  description,
  delay,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={delay}
      className="relative overflow-clip bg-white group flex-col justify-start text-left p-4 rounded-lg shadow-lg z-10"
    >
      {/* Hover background effect */}
      <div className="absolute bg-primary  w-0 border-l-2 border border-primary h-full -z-10 left-0 top-0 duration-500 group-hover:w-full"></div>

      {/* Card content */}
      <div className="text-left p-4 border border-dashed rounded-lg border-gray-300 hover:border-gray-500 hover:text-white duration-200 h-full">
        <h3 className="font-sans text-xl md:text-2xl uppercase mb-2">
          {title}
        </h3>
        <p className="whitespace-pre-line text-justify">{description}</p>
      </div>
    </div>
  );
};

type ActivitiesProps = {
  showCount?: number;
};

const RegularSchoolActivities: React.FC<ActivitiesProps> = ({ showCount }) => {
  const activitiesData = [
    {
      title: "NCTB Based Education",
      description:
        "Education plays a pivotal role in shaping the nation's future. The National Curriculum and Textbook Board (NCTB) serves as the cornerstone of educational development, providing a standardized curriculum that equips students with essential knowledge and skills. NCTB collaborates with educators, providing professional development and resources for effective teaching, empowering teachers to create dynamic learning environments and improve overall learning outcomes. We provide NCTB-based education to our students.",
    },
    {
      title: "Distribution of Educational Materials",
      description:
        "Education is a powerful tool for breaking the cycle of poverty and building a brighter future. To support underprivileged children in their learning journey, Daily Ten School has taken the initiative to distribute essential educational materials such as exercise book, pens, pencils, erasers, sharpners, color pencils, rim paper and other stationery are distributed among 910 students.",
    },
    {
      title: "Morning Assembly",
      description:
        "The morning assembly of a school is a vital ritual that sets the tone for the day ahead, fostering a sense of unity, discipline, and purpose among students and staff. The morning assembly also cultivates a sense of community and belonging, as students come together to recite pledges, sing the national anthem, or engage in other communal activities. Additionally, it serves as a time for reflection and motivation, as students and staff alike gather to start the day on a positive note, ready to embrace learning and growth.",
    },
    {
      title: "Multimedia Classroom",
      description:
        "The multimedia classroom is transforming traditional teaching methods by integrating advanced technology into the learning process. These classrooms are equipped with audiovisual tools such as projectors, interactive white boards, digital displays, and computer systems, creating a dynamic and immersive educational experience. By incorporating multimedia elements like educational videos, animations, and interactive content, students can better understand complex concepts and engage more actively in lessons.",
    },
    {
      title: "Hygiene Product Distribution",
      description:
        "Hygiene products are crucial for underprivileged children as they play a significant role in maintaining their health and well-being. Access to basic items such as soap, toothpaste, and nail cutters can prevent the spread of diseases, reduce the risk of infections, and boost overall hygiene practices. For many underprivileged children, these products are often considered luxuries rather than necessities, leading to compromised health and self-esteem.",
    },
    {
      title: "Class Captain Election",
      description:
        "The Class Captain Election is an important event at Daily Ten School, promoting leadership, responsibility, and democratic values among students. This election allows students to choose a representative who will act as a bridge between teachers and classmates, ensuring discipline, teamwork, and a positive learning environment.",
    },
    {
      title: "Prayer & Moral Education",
      description:
        "Namaz, the Islamic act of prayer, is not only a fundamental religious practice but also a powerful means of instilling discipline, humility, and compassion among students. At Daily Ten School, we recognize the importance of spiritual and moral education in shaping responsible and ethical individuals.",
    },
  ];

  return (
    <section className="relative activities-areas bg-white z-10 py-">
      <div className="mx-4 md:mx-8 lg:mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activitiesData
          .slice(0, showCount || activitiesData.length)
          .map((item, index) => (
            <ActivitiesCard
              key={index}
              title={item.title}
              description={item.description}
              delay={index * 100}
            />
          ))}
      </div>
    </section>
  );
};

export default RegularSchoolActivities;
