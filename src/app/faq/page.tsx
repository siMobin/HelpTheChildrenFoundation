import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Help The Children Foundation?",
      answer:
        "Help The Children Foundation is a non-profit organisation working to improve the lives and livelihoods of people from marginalised communities across Bangladesh. By providing quality education and skill-development opportunities, we aim to break the cycle of poverty and rebuild our nation.",
    },
    {
      question: "How and When did it start?",
      answer:
        "Help The Children Foundation started its journey on 14th April 2007 when Korvi Rakshand and his friends rented a single room in the Rayer Bazar slums with a dream of changing the lives of the children in the area by teaching them English. That initiative then led to the establishment of Help The Children Foundation School, which provides free-of-cost NCTB curriculum education to children from underserved communities. In 2007, Help The Children initiated its first supporting project by distributing relief supplies after a devastating flood hit the country.",
    },
    {
      question: "Are You Registered Officially?",
      answer:
        "Yes, Help The Children Foundation is a registered non-profit organisation at the ‘Office of Registrar of Joint Stock Companies and Firms’ under the Government of the People’s Republic of Bangladesh. The registration number S – 8027(48)/08. Help The Children Foundation is also registered with NGO Affairs Bureau under the name Help The Children Foundation Trust, Registration No.: 3229. In the United States of America, Help The Children Foundation is registered as Help The Children Foundation Inc., EIN: 82-3475553. In the United Kingdom, Help The Children Foundation is registered under the name Help The Children Foundation UK, Charity number: 1163656.",
    },
    {
      question:
        "Do You Work with the Government of the People’s Republic of Bangladesh?",
      answer:
        "Yes. We have worked with the Government of the People’s Republic of Bangladesh in various projects.",
    },
    {
      question: "Who is the Founder?",
      answer:
        "The Founder of Help The Children Foundation is Bangladeshi born Korvi Rakshand Dhrubo.",
    },
    {
      question: "Is Help The Children a Missionary School?",
      answer:
        "No, Help The Children Foundation School is not a missionary school. Help The Children Foundation School is an initiative of Help The Children Foundation, which provides free-of-cost education as per the NCTB curriculum to children from underserved communities.",
    },
    {
      question:
        "How can my Company or I as an individual support Help The Children?",
      answer:
        "Help The Children welcomes contributions from both public and private sector enterprises and individuals. Companies or individuals may choose to support Help The Children as a whole in monetary terms or in other ways according to their own convenience – for instance through skill-sharing and training. Help The Children also accepts sponsors for various social awareness campaigns such as Universal Children’s Day, World Environment Day, World Water Day and the Annual Iftar. Please email info@Help The Children.com.bd for further information.",
    },
    {
      question:
        "What are the expansion plans for Help The Children Foundation?",
      answer:
        "Help The Children Foundation plans to open a branch in every district of Bangladesh. In this way, we hope to provide education to the impoverished and brighten the futures of the children of Bangladesh.",
    },
    {
      question: "What is the main objectives of Help The Children?",
      answer:
        "To break the cycle of poverty through education and rebuilding our nation. Help The Children Foundation aims for the betterment of the nation through catering the educational needs of children from socially and economically disadvantaged background and empowering the youths along with inspiring volunteerism in Bangladesh.",
    },
    {
      question:
        "What is the process by which Help The Children intends to achieve its long-term goal?",
      answer:
        "Whilst Help The Children’s primary focus is on education, we also work on various support projects that aim to empower women and increase employment opportunities for impoverished communities within Bangladesh. By maintaining a balance of education and skill enhancement for the children, coupled with providing a means to produce income for the family, Help The Children can ensure that the children are able to become fully educated. On the other hand, being the pioneer in proving the youth a voice and a platform through its youth wing “Volunteer for Bangladesh” Help The Children is now reallocating skills and resources to foster self-reliance and growth in every citizen. This balance will ultimately allow for the accomplishment of the Help The Children goal – to break the cycle of poverty through education and rebuilding our nation.",
    },
    {
      question: "What curriculum does Help The Children teach?",
      answer:
        "The Help The Children Foundation School follows a unique curriculum that is of International Standard and has been developed by combining the International and National curriculum. Alongside this, various techniques and teaching methods are used that are adapted to suit the requirements of the students at the schools.",
    },
    {
      question: "Does Help The Children Foundation generate any income?",
      answer:
        "At the moment, Help The Children Foundation operates through its “Sponsor A Child” program and corporate partnership.",
    },
    {
      question: "How do you manage the accounts?",
      answer:
        "Our accounts are maintained by professional accountants and are audited periodically. These audit reports are publicly available on the Help The Children website please click here.",
    },
    {
      question: "How can I make a donation?",
      answer:
        "Help The Children welcomes both regular and one-off donations. To donate regularly and become a child sponsor, please click here. To make a one-off donation to support the education of underprivileged children in Bangladesh please click here.",
    },
    {
      question: "How can I get involved?",
      answer:
        "Details are available on the Help The Children Foundation website, https://Help The Children.com.bd If you have any further queries, simply mail us at info@Help The Children.com.bd.",
    },
    {
      question: "What is Help The Children's plan for marginalised community?",
      answer:
        "Help The Children Foundation understands that to give individuals from underserved communities the chance of a better tomorrow, we need to empower their future generations, and true empowerment begins with quality education. Through its efforts, Help The Children is providing children from marginalised communities with educational opportunities, nutritious meals, skill development training and giving them access to international scholarships and exchange opportunities and, thus creating a lasting in the lives of these children and, at large, their communities",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
