import celestia from "../../assets/celestia.png";
import lilies from "../../assets/lilies.png";
import Card from "../../components/Card";
import vilancy from "../../assets/vilancy.png";
import scam from "../../assets/scam.png";
import foodie from "../../assets/foodie.png";
import scoot from "../../assets/scoot.png"
import Button from "../../components/Button";

export default function PortfolioContent() {
  const data = [
    {
      id: 1,
      name: "Celestia",
      description:
        "A mini period tracker web application that predicts next period, ovulation day and fertile window",
      img: celestia,
      stack: [
        { id: 1, name: "React" },
        { id: 2, name: "TailwindCss" },
        { id: 3, name: "Express" },
        { id: 4, name: "Mongodb" },
      ],
      link: "https://celestia-web-app.vercel.app",
      github: "https://github.com/Nnamdi-Uzoigwe/Period-Tracker-Web-App"
    },
    {
      id: 2,
      name: "Scam Information Website",
      description:
        "A web platform for reporting and searching scam cases in Nigeria to raise awareness and protect the public",
      img: scam,
      stack: [
        { id: 1, name: "Vite" },
        { id: 2, name: "React" },
        { id: 3, name: "Express" },
        { id: 4, name: "Supabase" },
        { id: 5, name: "MongoDB" },
      ],
      link: "https://scam-information-system.vercel.app",
      github: "https://github.com/Nnamdi-Uzoigwe/Scam-Information-System"
    },
    {
      id: 3,
      name: "Lilies Food App",
      description: "A Food Ordering Application",
      img: lilies,
      stack: [
        { id: 1, name: "React" },
        { id: 2, name: "TailwindCss" },
        { id: 3, name: "Express" },
        { id: 4, name: "Mongodb" },
      ],
      link: "",
      github: "https://github.com/Nnamdi-Uzoigwe/lilies-app"
    },
    {
      id: 4,
      name: "Vilancy Movie Ticket App",
      description:
        "An application for cinema bookings for selected cinemas across the country",
      img: vilancy,
      stack: [
        { id: 1, name: "Next.js" },
        { id: 2, name: "TailwindCss" },
        { id: 3, name: "Express" },
        { id: 4, name: "Mongodb" },
        { id: 5, name: "Supabase" },
      ],
      link: "https://vilancy-movie-ticket-web-app.vercel.app",
      github: "https://github.com/Nnamdi-Uzoigwe/Movie-Ticket-Web-App"
    },
    {
      id: 5,
      name: "Foodie Landing Page",
      description: "A simple landing page design",
      img: foodie,
      stack: [
        { id: 1, name: "React" },
        { id: 2, name: "Typescript" },
        { id: 3, name: "TailwindCss" },
      ],
      link: "https://foodie-landing-page-self.vercel.app",
      github: "https://github.com/Nnamdi-Uzoigwe/Foodie-Landing-Page"
    },
    {
      id: 6,
      name: "Scoot Website Clone",
      description: "Design of landing page of Scoot Website",
      img: scoot,
      stack: [
        { id: 1, name: "React" },
        { id: 2, name: "TailwindCss" },
      ],
      link: "https://scoot-website-clone.vercel.app",
      github: "https://github.com/Nnamdi-Uzoigwe/scoot-website-clone"
    },
  ];
  return (
    <div className="bg-[#F9FAFB] dark:bg-[#111827] mt-[50px] px-6 lg:px-40 py-10 lg:py-20">
      <h3 className="text-teal-500 text-center font-semibold text-xl">
        Portfolio
      </h3>
      <p className="text-center my-10 dark:text-gray-200">
        Some of the noteworthy projects I have worked on:{" "}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <Card
            img={item.img}
            name={item.name}
            desc={item.description}
            stack={item.stack}
            link={item?.link}
            gitlink={item?.github}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <Button>See More</Button>
      </div>
    </div>
  );
}
