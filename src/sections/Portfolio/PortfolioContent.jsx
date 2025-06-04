import celestia from "../../assets/celestia.png"
import lilies from "../../assets/lilies.png"
import Card from "../../components/Card"
import vilancy from "../../assets/vilancy.png"
import foodie from "../../assets/foodie.png"
import Button from "../../components/Button"

export default function PortfolioContent() {
    const data = [
        {
            id: 1,
            name: "Celestia",
            description: "A mini period tracker web application that predicts next period, ovulation day and fertile window",
            img: celestia,
            stack: [ { id: 1, name: "React" }, { id: 2, name:"TailwindCss" }, { id: 3, name: "Express" }, { id: 4, name: "Mongodb"} ]
        },
        {
            id: 2,
            name: "Lilies Food App",
            description: "A Food Ordering Application",
            img: lilies,
            stack: [ { id: 1, name: "React" }, { id: 2, name:"TailwindCss" }, { id: 3, name: "Express" }, { id: 4, name: "Mongodb"} ]
        },
        {
            id: 3,
            name: "Vilancy Movie Ticket App",
            description: "An application for cinema bookings for selected cinemas across the country",
            img: vilancy,
            stack: [ { id: 1, name: "Next.js" }, { id: 2, name:"TailwindCss" }, { id: 3, name: "Express" }, { id: 4, name: "Mongodb"}, { id: 5, name: "Supabase"} ]
        },
        {
            id: 4,
            name: "Foodie Landing Page",
            description: "A simple landing page design",
            img: foodie,
            stack: [ { id: 1, name: "React" }, { id: 2, name:"TailwindCss" } ]
        }
    ]
    return (
        <div className="bg-[#F9FAFB] dark:bg-[#111827] mt-[50px] px-8 lg:px-40 py-10 lg:py-20">
            <h3 className="text-teal-500 text-center font-semibold text-xl">Portfolio</h3>
            <p className="text-center my-10 dark:text-gray-200">Some of the noteworthy projects I have worked on: </p>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <Card
                        img={item.img} 
                        name={item.name}
                        desc={item.description} 
                        stack={item.stack}  
                    />
                ))}
            </div>

            <div className="mt-4 flex justify-center">
                <Button>See More</Button>
            </div>
        </div>
    )
}