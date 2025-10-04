import Image from "next/image";
import {
  AlertTriangle,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const ChildAwarenessPage = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative h-[550px] rounded-xl overflow-hidden flex items-center text-primary-foreground">
          <Image
            src="/images/health/health.jpg"
            alt="Children in a workshop"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-10" />
          <div className="relative z-20 p-8 md:p-12 max-w-2xl">
            <p className="font-semibold text-lg">Child Awareness Program</p>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
              Empowering Children for a Brighter Future
            </h1>
          </div>
        </section>

        {/* Your Path to Wellness Section */}
        <section className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-bold leading-relaxed">
                Building a Safer World for Children
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Knowledge is the first step towards protection.
              </p>
            </div>
            <div>
              <p className="text-lg text-justify">
                We believe that every child deserves to grow up in a safe,
                supportive, and loving environment. Our Child Awareness Program
                is dedicated to educating communities, empowering parents, and
                providing children with the knowledge they need to stay safe
                from harm.
              </p>
              {/* <Button className="mt-8 bg-foreground text-background hover:bg-foreground/90">
                Our Mission
              </Button> */}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="pb-16 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              tags={["Parents", "Community"]}
              title="Community Workshops"
              description="Engaging workshops for parents and community leaders on child safety."
              image="/images/health/asset-11.jpg"
              color="chart-3"
            />
            <ServiceCard
              tags={["Students", "Schools"]}
              title="School Safety Programs"
              description="Interactive sessions for students on personal safety and recognizing risks."
              image="/images/health/asset-12.jpg"
              color="chart-2"
            />
            <ServiceCard
              tags={["Digital", "Free"]}
              title="Online Resources"
              description="Access to free educational materials, guides, and support networks."
              image="/images/health/asset-13.jpg"
              color="chart-4"
            />
            <ServiceCard
              tags={["Policy", "Support"]}
              title="Advocacy & Support"
              description="Working to change policies and provide support for vulnerable children."
              image="/images/health/asset-14.jpg"
              color="chart-1"
            />
          </div>
        </section>

        {/* Identifying Children in Need Section */}
        <section className="pb-16 md:pb-24">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Identifying Children in Need
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Recognizing the signs of a child in need is the first step toward
              providing help. Here are some common indicators to look for.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <AlertTriangle className="h-10 w-10 text-destructive mb-4" />
              <h3 className="text-2xl font-bold">Physical Signs</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Unexplained injuries or bruises</li>
                <li>Poor hygiene or unattended appearance</li>
                <li>Frequent hunger or hoarding of food</li>
                <li>Untreated medical or dental issues</li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <HeartHandshake className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold">Behavioral Signs</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Sudden changes in behavior or mood</li>
                <li>Withdrawal from friends or usual activities</li>
                <li>Aggression, anger, or hostility</li>
                <li>Fear of going home or to certain places</li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm">
              <ShieldCheck className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold">Emotional Signs</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Anxiety, depression, or unusual fears</li>
                <li>Low self-esteem or lack of confidence</li>
                <li>Difficulty concentrating or learning</li>
                <li>Appears emotionally detached or numb</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ServiceCard = ({
  tags,
  title,
  description,
  image,
  color,
}: {
  tags: string[];
  title: string;
  description: string;
  image: string;
  color: "chart-1" | "chart-2" | "chart-3" | "chart-4";
}) => {
  const cardStyle = {
    backgroundColor: `oklch(from var(--${color}) l c h / 20%)`,
    borderColor: `oklch(from var(--${color}) l c h / 40%)`,
  };
  const dotStyle = {
    backgroundColor: `oklch(from var(--${color}) l c h)`,
  };

  return (
    <div
      className="bg-card text-card-foreground rounded-2xl p-6 shadow-sm border flex flex-col justify-between"
      style={cardStyle}
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold bg-white/60 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
            <div className="w-3 h-3 rounded-full" style={dotStyle}></div>
          </div>
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      <div className="mt-6">
        <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
        {/* <button className="font-semibold text-sm flex items-center gap-2">
          Read More <ArrowRight size={16} />
        </button> */}
      </div>
    </div>
  );
};

export default ChildAwarenessPage;
