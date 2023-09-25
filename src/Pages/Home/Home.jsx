import { useLoaderData } from "react-router-dom";
import DonationCard from "../../Component/Donation/DonationCard";
import Banner from "../../Component/Header/Banner";


const Home = () => {
    const donations =useLoaderData()
    console.log(donations)
    return (
<><div className="bg-white bg-blend-overlay mt-[-220px]"  style={{
            backgroundImage: "url('../image/Rectangle 4287.png')", 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            height:'120vh',
            backgroundSize:'1400px 520px'
             
          }}>
        <Banner></Banner>
    </div>
        <div className="px-28 my-18">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-8">
           {
                donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
           </div>
        </div>
        
        </>
    );
};

export default Home;