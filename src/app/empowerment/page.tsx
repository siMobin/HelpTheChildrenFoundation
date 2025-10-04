import data from "./empowerment.json";
import TextType from "@/components/TextType";

export default function Empowerment() {
  return (
    <main className="space-y-4">
      <section className="w-full grid grid-cols-1 md:grid-cols-3 bg-secondary">
        <div className="col-span-2 flex justify-center items-center flex-col relative">
          {/* <h2 className="text-white text-4xl font-bold max-w-xl  relative">
            Everyone has special talents. It is our duty & privilege to find
            these talents & to adapt our lesson to best implement them.
            <span className="text-orange-400 rotate-45 absolute -bottom-16 right-0">
              <Quote fill="currentColor" size={75} />
            </span>
          </h2> */}
          <TextType
            text={[
              "Everyone has special talents. It is our duty & privilege to find these talents & to adapt our lesson to best implement them.",
            ]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            loop={false}
            className="text-white text-4xl font-bold max-w-xl !text-left relative"
          />
        </div>
        <div className="relative">
          <img
            src="/images/empowerment/asset-bg.png"
            alt="Help The Children Foundation"
            loading="lazy"
            className="w-auto h-full "
          />
          <img
            src="/images/empowerment/asset-fg.png"
            alt="Help The Children Foundation"
            loading="lazy"
            className="absolute h-[83%] bottom-0 right-0"
            data-aos="flip-right"
          />
        </div>
      </section>

      <div className="flex justify-center">
        <div className="max-w-2xl m-4 text-center space-y-4 mnb-8  ">
          <h2 className="text-4xl font-bold">Youth Empowerment Program(s)</h2>
          <p className="text-xl">
            Our youth empowerment programs focus on providing opportunities for
            youth to learn, grow, and make a difference in their communities.
          </p>
        </div>
      </div>

      {/*  */}

      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-xs dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700"
          >
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="my-4 text-justify">{item.quote}</p>
            </blockquote>
            <img
              className="rounded w-full h-96 object-cover object-bottom"
              src={item.image_url}
              loading="lazy"
              alt="Help The Children Foundation"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
