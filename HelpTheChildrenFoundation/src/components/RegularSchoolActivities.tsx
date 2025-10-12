"use client";
import React from "react";

type ActivitiesCardProps = {
  title: string;
  description: string;
  index?: number;
};

const ActivitiesCard: React.FC<ActivitiesCardProps> = ({ title, description, index }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="300" data-aos-delay={(index || 0) * 50} className="relative overflow-clip bg-white group flex-col justify-start text-left p-4 rounded-lg shadow-lg z-10">
      {/* Hover background effect */}
      <div className="absolute bg-primary  w-0 border-l-2 border border-primary h-full -z-10 left-0 top-0 duration-500 group-hover:w-full"></div>

      {/* Card content */}
      <div className="text-left p-4 border border-dashed rounded-lg border-gray-300 hover:border-gray-500 hover:text-white duration-200 h-full">
        <h3 className="font-sans text-xl md:text-2xl uppercase mb-2">{title}</h3>
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
      description: "Education plays a pivotal role in shaping the nation's future. The National Curriculum and Textbook Board (NCTB) serves as the cornerstone of educational development, providing a standardized curriculum that equips students with essential knowledge and skills. NCTB collaborates with educators, providing professional development and resources for effective teaching, empowering teachers to create dynamic learning environments and improve overall learning outcomes. We provide NCTB-based education to our students.",
    },
    {
      title: "Distribution of Educational Materials",
      description: "Education is a powerful tool for breaking the cycle of poverty and building a brighter future. To support underprivileged children in their learning journey, Daily Ten School has taken the initiative to distribute essential educational materials such as exercise book, pens, pencils, erasers, sharpners, color pencils, rim paper and other stationery are distributed among 910 students.",
    },
    {
      title: "Morning Assembly",
      description: "The morning assembly of a school is a vital ritual that sets the tone for the day ahead, fostering a sense of unity, discipline, and purpose among students and staff. The morning assembly also cultivates a sense of community and belonging, as students come together to recite pledges, sing the national anthem, or engage in other communal activities. Additionally, it serves as a time for reflection and motivation, as students and staff alike gather to start the day on a positive note, ready to embrace learning and growth.",
    },
    {
      title: "Multimedia Classroom",
      description: "The multimedia classroom is transforming traditional teaching methods by integrating advanced technology into the learning process. These classrooms are equipped with audiovisual tools such as projectors, interactive white boards, digital displays, and computer systems, creating a dynamic and immersive educational experience. By incorporating multimedia elements like educational videos, animations, and interactive content, students can better understand complex concepts and engage more actively in lessons.",
    },
    {
      title: "Hygiene Product Distribution",
      description: "Hygiene products are crucial for underprivileged children as they play a significant role in maintaining their health and well-being. Access to basic items such as soap, toothpaste, and nail cutters can prevent the spread of diseases, reduce the risk of infections, and boost overall hygiene practices. For many underprivileged children, these products are often considered luxuries rather than necessities, leading to compromised health and self-esteem.",
    },
    {
      title: "Class Captain Election",
      description: "The Class Captain Election is an important event at Daily Ten School, promoting leadership, responsibility, and democratic values among students. This election allows students to choose a representative who will act as a bridge between teachers and classmates, ensuring discipline, teamwork, and a positive learning environment.",
    },
    {
      title: "Prayer & Moral Education",
      description: "Namaz, the Islamic act of prayer, is not only a fundamental religious practice but also a powerful means of instilling discipline, humility, and compassion among students. At Daily Ten School, we recognize the importance of spiritual and moral education in shaping responsible and ethical individuals.",
    },
    {
      title: "Regular Health Checkups",
      description: "At Daily Ten School, we believe that good health is the foundation of a child's success. Regular health checkups play a crucial role in safeguarding the well-being of underprivileged children by identifying and addressing health concerns at an early stage. Through preventive care and timely interventions, we ensure that students remain physically fit, enabling them to focus on their education without health-related obstacles.",
    },

    //
    {
      title: "Annual Examination",
      description: "The Annual Examination is a crucial milestone in the academic journey of our students, providing a comprehensive assessment of their learning, understanding, and progress over the year. It not only evaluates their knowledge but also helps build confidence, discipline, and a strong academic foundation. Our students actively participated in the Annual Examination 2024, demonstrating their dedication and hard work. The exams were conducted in a structured manner, ensuring a smooth and fair evaluation process.",
    },
    {
      title: "Teachers Meeting",
      description: "Meeting with teachers is crucial for students' academic success and personal growth. These interactions are actually opportunities for students to clarify doubts, receive personalized feedback, and gain insights into their learning progress. Additionally, meetings with teachers foster a supportive environment where students can address challenges, set goals, and develop effective study strategies. Beyond academics, these meetings nurture positive relationships between students and teachers, enhancing communication skills and fostering a sense of belonging within the school community. We arrange weekly and monthly meetings with the teachers of each campus to ensure the quality of education and the overall development of the school.",
    },
    {
      title: "Guardian Meetings",
      description: "At Daily Ten School, we believe that active parental involvement is essential for a child's academic and personal growth. Our Guardian Meetings serve as a crucial platform for open communication between teachers and parents, ensuring a collaborative approach to a child's education.",
    },
    {
      title: "Food Support Distribution",
      description: "At Daily Ten School, we recognize that proper nutrition is essential for a child's physical health, cognitive development, and academic performance. Many underprivileged children face food insecurity, which directly impacts their ability to focus and learn. To address this, we have implemented a Food Support Distribution Program, ensuring that our students receive the nourishment they need to thrive.",
    },
    //
    {
      title: "Skill Course: Cooking",
      description:
        'In the Sixth Grade Life and Livelihood book, there is a chapter titled "Skill Course - Cooking," which outlines the step-by-step process of preparing simple dishes like rice, fried eggs, and mashed potatoes. This chapter is designed to teach students essential cooking skills in a practical and accessible way. Our students went beyond the textbook by dividing themselves into different groups and preparing a variety of exciting dishes. Some students cooked noodles, others made pudding, and some even prepared chatpati. This allowed the students to explore creativity in cooking while building their practical skills. After cooking, each group presented their dishes to the class, where they shared the detailed recipes, ingredients, and costs involved. Students also discussed their personal experiences, highlighting challenges faced during cooking and what they learned throughout the process. This exercise not only enhanced their cooking abilities but also improved their teamwork, communication, and problem-solving skills, preparing them for a well-rounded future.',
    },
    {
      title: "Student of the Month",
      description: "At Daily Ten School, we celebrate outstanding achievements and dedication through the Student of the Month award. This prestigious recognition is given to one student from each class every semester. The recipient of this award is selected based on various factors, including academic performance, regular school attendance, and the consistent completion of homework. The Student of the Month medal serves as a symbol of excellence, motivating students to maintain a high standard of commitment to their education. It encourages them to strive for continuous improvement in their studies and personal development, fostering a spirit of hard work, responsibility, and discipline.",
    },
    {
      title: "Celebrating Teacher's Birthdays",
      description: "We believe in recognizing the hard work and dedication of our teachers, who play a crucial role in shaping the future of our students. As part of our efforts to create a positive and supportive environment, we make it a point to celebrate the birthdays of our all teachers.",
    },
  ];

  return (
    <section className="relative activities-areas bg-white z-10 py-">
      <div className="mx-4 md:mx-8 lg:mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activitiesData.slice(0, showCount || activitiesData.length).map((item, index) => (
          <ActivitiesCard key={index} title={item.title} description={item.description} index={index} />
        ))}
      </div>
    </section>
  );
};

export default RegularSchoolActivities;
