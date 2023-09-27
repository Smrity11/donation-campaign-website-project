import { useLoaderData } from "react-router-dom";
import DonationCard from "../../Component/Donation/DonationCard";

import { useState } from "react";

const Home = () => {
  const [searchText, setSearchText] = useState("");
const [filteredData, setFilteredData] = useState([]);
  const donations = useLoaderData();

  //   const handleSearchInputChange = (e) => {
  //     setSearchText(e.target.value);
  //   };

  const test =[1,2,3,4,5]

  const handleSearchClick = () => {
    const filtered = donations.filter((item) =>
      item.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };


  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleResetClick = () => {
    setSearchText("");
    setFilteredData(filteredData);
  };

  const categorie = donations.filter((item) =>
    item.category.toLowerCase().includes(searchText.toLowerCase())
  );

  console.log(filteredData);
  return (
    <>
      <div
        className="bg-white bg-blend-overlay mt-[-220px]"
        style={{
          backgroundImage: "url('../image/Rectangle 4287.png')",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "120vh",
          backgroundSize: "1400px 520px",
        }}
      >
        {/* This is Banner */}
        <div className="px-8">
          <h1 className="text-center text-4xl font-bold pt-[300px]">
            I Grow By Helping People In Need
          </h1>
          <div className="mx-auto max-w-md shadow-md mt-12">
            <div className="relative text-gray-600 border">
              <input
                type="text"
                name="search"
                placeholder="Search here...."
                value={searchText}
                onChange={handleSearchInputChange}
                className="bg-white h-10 px-5 pr-10  text-sm focus:outline-none w-full"
              />
              <button
                onClick={handleSearchClick}
                type="submit"
                className="text-white font-bold px-4 py-[8.5px] bg-[#FF444A] absolute right-0 top-0 shadow-md rounded-e-md"
              >
                Search
              </button>

           
            </div>
          </div>
        </div>
        {/* This is Banner */}
      </div>
      <div className="px-8 md:px-28 my-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-8">
          {searchText === ""
            ? donations.map((donation) => (
                <DonationCard
                  key={donation.id}
                  donation={donation}
                ></DonationCard>
              ))
            : categorie.map((donation) => (
                <DonationCard
                  key={donation.id}
                  donation={donation}
                ></DonationCard>
              ))}
        </div>
      </div>
     {
      test.lenght > 2 ? <div className="text-center py-8">
        <button
                onClick={handleResetClick}
                type="submit"
                className="btn text-white font-bold  bg-[#FF444A]  shadow-md rounded-e-md"
              >
                See all
              </button>
      </div> : '<p>hi</p>'
     }
    </>
  );
};

export default Home;
