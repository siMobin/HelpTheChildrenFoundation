"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Autoplay, Pagination, Navigation } from "swiper/modules";

const programs = [
  {
    title: "Book Festival",
    description: "The Annual Book Festival at Daily Ten School marks the beginning of the new academic year with excitement and enthusiasm. The fresh scent of newly printed books fills the air, symbolizing new beginnings, opportunities, and the promise of knowledge. This festival is more than just a distribution of books—it is an event that inspires curiosity, encourages a love for reading, and fosters a lifelong passion for learning. This year, we proudly provided new books to all 910 students, ensuring they have the resources they need to embark on a successful academic journey. The festival serves as a beacon of inspiration, empowering students with the tools to explore new stories, expand their knowledge, and dream bigger for the future.",
    image: "/images/school/program/book-festival.jpg",
  },
  {
    title: "Blanket Distribution",
    description: "We believe in supporting our students and their families beyond the class- room, especially during the harsh winter months. Many underprivileged families struggle to stay warm due to a lack of proper winter clothing. To help them, we organized a Blanket Distribution Program, ensuring that children and their families receive the warmth and comfort they need. This initiative not only provides physical relief from the cold but also serves as a symbol of care and compassion. \n\n Our well-wishers and sponsors sometimes send various gifts for these under- privileged children. In continuation of that, new blankets were distributed in winter. The children were very happy to receive the new blankets. Through such efforts, Daily Ten School continues to extend its commitment to the well-being of students and their communities ,ensuring that every child feels safe, valued, and supported.",
    image: "/images/school/program/lanket-istribution.jpg",
  },
  {
    title: "Winter Cloth Distribution",
    description: "Winter can be especially harsh for underprivileged children who lack proper clothing to stay warm. This year, thanks to the generosity of kind well-wisher, Daily Ten School was able to distribute warm winter clothes to our students, ensuring their comfort and protection during the cold season.\n\n Through this heartfelt donation, children received sweaters & jackets. Its helping them stay healthy and attend school regularly without the discomfort of chilly weather. This act of kindness not only provided physical warmth but also served as a symbol of care and support, reinforcing the belief that together, we can make a difference in the lives of those in need.",
    image: "/images/school/program/winter-cloth-distribution.jpg",
  },
  {
    title: "Annual Sports Day",
    description: "Sports are an integral part of our students' holistic development. Our Annual Sports 2024 was a vibrant and exciting event where students actively participated in various fun and competitive games, showcasing their strength, agility, and teamwork.\n\n Some of the notable sports in the competition included rope jumping, frog jumping, 100-meter race, treasure hunting, sack race, and biscuit race. These activities not only brought joy and excitement but also helped students develop physical fitness, coordination, and a sense of discipline. Through this event, we aim to encourage sportsmanship, confidence, and teamwork, ensuring that every child experiences the joy of movement and the thrill of healthy competition.",
    image: "/images/school/program/annual-sports.jpg",
  },

  //

  {
    title: "Sports Prize Distribution",
    description: "Renowned singer Belal Khan graced the Daily Ten School (Badda Campus), celebrating the achievements of our underprivileged children. Awards were presented to the top three meritorious students (2023-2024) and the winners of the annual sports competition. The excitement and joy among the stu- dents were truly heartwarming. The event was attended by Founder & Chair- man Arifur Rahman, Co-Founder Md. Sihanur Rahman Asif, and other school officials.\n\n To make the day even more special, Belal Khan performed at the students' request, filling the air with music and joy. We wish all our students a future filled with happiness, success, and endless possibilities.",
    image: "/images/school/program/sports-prize-distribution.jpg",
  },
  {
    title: "DC & SP (Madaripur) Sir Visited Our Madaripur Campus",
    description: "The Sports Prize Distribution 2024 at Madaripur Campus was a grand event celebrating the achievements of our young athletes. To make the occasion even more special, we had the honor of welcoming esteemed guests, including the District Commissioner (DC), Superintendent of Police (SP), Upazila Nirbahi Officer (UNO), Officer-in-Charge (OC), Education Officer, Local Chairman, and other well-wishers of Madaripur.\n\nIn addition to distributing sports prizes to the winners of various competitions, we also presented the prestigious Genius Award to recognize exceptional talents among our students. This event not only encouraged our students to strive for excellence in sports but also reinforced the values of hard work, determination, and perseverance.",
    image: "/images/school/program/dc-sp.jpg",
  },
  {
    title: "Observance of International Mother Language Day",
    description: "We marked International Mother Language Day with profound respect and reverence for the language martyrs who sacrificed their lives for the right to speak in their native language. This significant day was dedicated to celebrating linguistic diversity and promoting the preservation of mother languages.\n\n The day began with a morning procession that led to the Shaheed Minar, where we paid tribute by laying flowers in honor of the martyrs. A minute of silence was observed in memory of their courage and sacrifice. Students actively participated in essay writing, painting, and poetry recitation competitions, expressing their creativity and deep understanding of the importance of language. Prizes were awarded to the winners, acknowledging their talent and thoughtfulness. Through this observance, we aim to instill in our stu- dents a deep sense of pride in their cultural heritage and the crucial role of preserving linguistic diversity for future generations",
    image: "/images/school/program/language-day.jpg",
  },
  {
    title: "Daily Iftar Program",
    description: "From the 6th of Ramadan, Daily Ten School hosted a Daily Iftar Program at its Badda, Basabo, and Madaripur campuses, where all students were invited to join for iftar. Additionally, the Nondipara campus also arranged iftar on sev- eral days.\n\nMany of our young students observe fasting during Ramadan. Before Maghrib, students gather in their respective classrooms and school premises, eagerly waiting for iftar with their plates ready. This initiative was not just limited to school students; their younger siblings, friends, and nearby chil- dren also joined in, making it a truly inclusive and heartwarming event. The teachers played a vital role in serving the iftar to the children, ensuring that everyone was well taken care of. Additionally, some of our own students enthusiastically assisted their teachers in distributing the meals, learning the spirit of service and generosity.",
    image: "/images/school/program/ifter-program.jpg",
  },
  {
    title: "Ramadan Food Package Distribution",
    description: "In the face of rising market prices, even basic grocery shopping has become a struggle for many families during Ramadan. By the grace of Allah, Daily Ten School successfully distributed essential Ramadan food packages to the fami- lies of 910 underprivileged children across our four campuses. \n\nReceiving these food packages brought immense joy to our students and their families, ensuring they had access to nutritious meals during this holy month. Seeing the smiles on their faces was truly heartwarming, reminding us of the beauty of Allah's provisions and the power of giving.",
    image: "/images/school/program/romadan-food-package.jpg",
  },
  {
    title: "Iftar Sharing Program",
    description: "Sharing is caring,we take this motto to heart by organizing an annual Iftar Sharing Program for our students during the holy month of Ramadan. On March 19, 2024, in celebration of the 15th anniversary of Youth for Bangla- desh's activities, we successfully held this heartwarming event, where more than 1,000 underprivileged children came together to share in the blessings of Iftar. The event was made even more special by the presence of our well-wishers, Daily Ten members, child sponsors, as well as the teachers, officials, and the Youth for Bangladesh team. It was a truly collaborative effort that brought together everyone in a spirit of generosity and unity. The children were able to enjoy a festive Iftar meal, bringing a sense of community and joy to their lives\n\nThis annual event serves not only as a way to provide for the nutritional needs of our students but also as a reminder of the importance of giving and sharing with those in need.",
    image: "/images/school/program/iftar-sharing-program.jpg",
  },
  {
    title: "Lemon Juice: Relief from Intense Heat",
    description: "At Daily Ten School, we care deeply about the well-being of our students, especially during the scorching summer months. In addition to their regular studies and daily snacks, we have ensured that all our underprivileged children across all campuses receive a refreshing glass of lemon juice every day for about 15-20 days (month of May-2024) to help combat the intense heat.\n\nBenefits of Lemon Juice include:\n\n Boosting Immunity, Aid in Digestion, Skin Health, Weight Management, Liver Detoxification, Prevents Urinary Tract Infections, Cancer Prevention, Main- tains Blood Pressure, Improves Oral ealth, Relieves Respiratory Issues.\n\nBy providing this daily nourishment, we are helping our students stay hydrated, healthy, and energized, ensuring they are ready to learn and thrive even in the harshest weather conditions.",
    image: "/images/school/program/lemon-juice.jpg",
  },
  {
    title: "Qurbani For Our Students",
    description: "This Eid-ul-Adha, Daily Ten School celebrated the spirit of sacrifice by performing Qurbani at all four of our campuses, ensuring that 910 underprivileged children and their families could enjoy the blessings of Eid. Alhamdulillah, six cows were sacrificed to distribute fresh meat among the students.\n\nThe day began with the Eid prayer, followed by the Qurbani preparations. As the morning passed, students gathered in groups at each campus, eagerly waiting to receive their share. Each child was provided with over 1.5 kg of meat, ensuring that their entire family could enjoy a fulfilling meal on this special occasion.\n\nWe are deeply grateful to our well-wishers and donors who made this possible. May this tradition of sharing and kindness continue, spreading happiness and unity among all.",
    image: "/images/school/program/qurbani-for-students.jpg",
  },

  {
    title: "Euglena Genki Program's: 10th Anniversary Celebration",
    description: "Our students had the privilege to attend the 10th anniversary of the Euglena Genki Program, alongside students from various schools. The event was graced by Professor Dr. Muhammad Yunus (Founder, Grameen Bank & Nobel Peace Prize Winner), Mitsuru Izumo (President, Euglena Corporation), Japanese Ambassador Iwama Kiminori, and other distinguished guests.\n\nThe celebration was truly grand and inspiring. On behalf of all underprivileged and orphaned children, we extend our heartfelt gratitude to Euglena Corporation for their unwavering support of Daily Ten School.",
    image: "/images/school/program/euglena-genki.jpg",
  },
  {
    title: "Fruits Buffet Festival",
    description: "At Daily Ten School, we had the joy of organizing a vibrant Fruits Buffet for the underprivileged children of our Badda and Basabo campuses. This special event was designed to introduce students to a variety of nutritious local fruits, ensuring they experience both the taste and health benefits of nature's best offerings.\n\nThe buffet featured around 18 types of seasonal fruits, including mango, blackberry, jackfruit, guava, latkon, pomegranate, papaya, watermelon, pomelo, starfruit, wood apple, dragon fruit, and many more. The excitement and happiness of the students were evident as they indulged in their favorite fruits, making the event a delightful and memorable experience. Every year, students eagerly await this fruit festival, as it not only brings them joy but also encourages healthy eating habits.",
    image: "/images/school/program/fruits-buffet-festival.jpg",
  },
  {
    title: "Sponsor's Birthday Celebration with Our Children",
    description: "On the occasion of Eira Sabah Rahman's 1st Birthday, Daily Ten School organized a heartwarming celebration for our underprivileged children. The event was made even more special by the generosity of our sponsor, who made it possible for the children to experience a day filled with joy and delicious food.\n\nThe children were treated to a festive meal of cake and chicken biryani, which delighted their taste buds and added to the celebration's cheer. The event not only provided an opportunity for the children to enjoy a wonderful meal but also brought smiles to their faces as they celebrated the special day with their friends and teachers.\n\nWe are deeply grateful to Eira Sabah Rahman and the sponsors for bringing so much happiness into the lives of our students, making their day unforgettable with love, care, and delicious food. ",
    image: "/images/school/program/sponsor-birthday-1.jpg",
  },
];

export default function SchoolProgram() {
  return (
    <div className="">
      {/* Banner */}
      <div className="school-program-banner text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">School Program</h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">Discover the various programs we offer to our students to enhance their learning and development.</p>
        </div>
      </div>

      {/* Program Card Slider */}
      <section className="max-w-7xl w-full lg:w-7xl mx-auto px-4 lg:px-8 -mt-8">
        <Swiper
          modules={[Mousewheel, Autoplay, Pagination]}
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          mousewheel={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          className="mySwiper h-[500px]"
        >
          {programs.map((program, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 border border-accent/20 rounded-lg lg:rounded-2xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 min-h-[calc(100dvh/2)]  shadow-xl max-w-6xl mx-auto">
                <div className="col-span-2 h-full">
                  <h1 className="text-2xl font-bold mb-4">{program.title}</h1>
                  <p className="text-lg whitespace-pre-line">{program.description}</p>
                </div>
                <div className="col-span-1 h-full">
                  <img src={program.image} alt={program.title} className="school-program-image" />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </section>
    </div>
  );
}
