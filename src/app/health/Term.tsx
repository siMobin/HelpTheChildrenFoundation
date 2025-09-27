"use client";
import { Star } from "lucide-react";

const activities = [
  {
    name: "Morning Assembly",
    picture: "/images/health/assembly.jpg",
    description:
      "The morning assembly of a school is a vital ritual that sets the tone for the day ahead, fostering a sense of unity, discipline, and purpose among students and staff. The morning assembly also cultivates a sense of community and belonging, as students come together to recite pledges, sing the national anthem, or engage in other communal activities. Additionally, it serves as a time for reflection and motivation, as students and staff alike gather to start the day on a positive note, ready to embrace learning and growth. ",
  },
  {
    name: "Hygiene Product Distribution",
    picture: "/images/health/hygiene.jpg",
    description:
      "Hygiene products are crucial for underprivileged children as they play a significant role in maintaining their health and well-being. Access to basic items such as soap, toothpaste, and nail cutters can prevent the spread of diseases, reduce the risk of infections, and boost overall hygiene practices. For many underprivileged children, these products are often considered luxuries rather than necessities, leading to compromised health and self-esteem.",
  },
  {
    name: "Regular Health Checkups",
    picture: "/images/health/health.jpg",
    description:
      "At Daily Ten School, we believe that good health is the foundation of a child's success. Regular health checkups play a crucial role in safeguarding the well-being of underprivileged children by identifying and addressing health concerns at an early stage. Through preventive care and timely interventions, we ensure that students remain physically fit, enabling them to focus on their education without health-related obstacles.",
  },
  {
    name: "Food Support Distribution",
    picture: "/images/health/food-supply.jpg",
    description:
      "At Daily Ten School, we recognize that proper nutrition is essential for a child’s physical health, cognitive development, and academic performance. Many underprivileged children face food insecurity, which directly impacts their ability to focus and learn. To address this, we have implemented a Food Support Distribution Program, ensuring that our students receive the nourishment they need to thrive.",
  },
];

export default function Activities() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center mt-12">
          Snapshot Of Our Regular Activities
        </h1>
      </div>

      <section className="mb-12 p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-accent/10 transition overflow-hidden"
          >
            <div className="flex-shrink-0 relative">
              <img
                className="w-full h-56 md:h-full md:w-88 object-cover object-top "
                src={activity.picture}
                alt={activity.name}
                loading="lazy"
                data-aos="fade-right"
                data-aos-duration={index * 500}
              />
            </div>
            <div className="flex flex-col justify-center p-4">
              <h5 className="mb-2 text-xl md:text-2xl font-bold text-gray-900">
                {activity.name}
              </h5>
              {/* <p className="mb-1 font-semibold text-gray-700">{activity.title}</p> */}
              <p className="text-gray-700 text-justify">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
