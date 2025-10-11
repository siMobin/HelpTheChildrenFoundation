"use client";

import { MapPin, CalendarDays } from "lucide-react";

const activities = [
  {
    name: "Monthly Family Food Support Distribution",
    picture: "/images/health/food-supply.jpg",
    location: "Dhaka, Bangladesh",
    date: "October 26, 2025",
    description:
      "Our monthly food support program provides essential groceries to underprivileged families, ensuring they have access to nutritious meals. This initiative helps combat food insecurity and promotes the well-being of children and their families.",
  },
  {
    name: "Monthly Family Food Support Distribution",
    picture: "/images/health/food-supply.jpg",
    location: "Chittagong, Bangladesh",
    date: "November 15, 2025",
    description:
      "Providing vital food assistance to families in Chittagong, our program ensures consistent access to nutritious food, supporting health and stability for children and their communities.",
  },
  {
    name: "Monthly Family Food Support Distribution",
    picture: "/images/health/food-supply.jpg",
    location: "Khulna, Bangladesh",
    date: "December 10, 2025",
    description:
      "In Khulna, we deliver essential food supplies to vulnerable families each month, aiming to alleviate hunger and foster a healthier environment for children to grow and learn.",
  },
  {
    name: "Monthly Family Food Support Distribution",
    picture: "/images/health/food-supply.jpg",
    location: "Sylhet, Bangladesh",
    date: "January 20, 2026",
    description:
      "Our food support initiative in Sylhet focuses on delivering regular food packages to families in need, ensuring children receive the necessary nutrition for their development and academic success.",
  },
  {
    name: "Monthly Family Food Support Distribution",
    picture: "/images/health/food-supply.jpg",
    location: "Rajshahi, Bangladesh",
    date: "February 5, 2026",
    description:
      "Supporting families in Rajshahi, our program distributes monthly food aid to help reduce food insecurity and provide a stable foundation for children's health and educational pursuits.",
  },
  {
    name: "Monthly Family Food Support Distribution",
    picture: "/images/health/food-supply.jpg",
    location: "Barisal, Bangladesh",
    date: "March 12, 2026",
    description:
      "Through our food support program in Barisal, we ensure that underprivileged families receive consistent access to nutritious food, promoting better health outcomes and brighter futures for their children.",
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
              <div className="flex items-center text-gray-600 mb-2 gap-2 truncate flex-wrap">
                {activity.location && (
                  <span className="flex items-center mr-4 text-secondary">
                    <MapPin className="w-4 h-4 mr-1" /> {activity.location}
                  </span>
                )}
                {activity.date && (
                  <span className="flex items-center text-secondary">
                    <CalendarDays className="w-4 h-4 mr-1" /> {activity.date}
                  </span>
                )}
              </div>
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
