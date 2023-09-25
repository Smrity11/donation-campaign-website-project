import { useLoaderData } from "react-router-dom";
import DonationCard from "../../Component/Donation/DonationCard";


const Home = () => {
    const donations =useLoaderData()
    console.log(donations)
    return (
        <div className="px-28 my-28">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-8">
           {
                donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
           </div>
        </div>
    );
};

export default Home;