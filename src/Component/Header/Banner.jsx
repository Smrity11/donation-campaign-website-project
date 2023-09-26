
const Banner = () => {
    return (
        <div className="px-8">
            <h1 className="text-center text-4xl font-bold pt-[300px]">I Grow By Helping People In Need</h1>
            <div className="mx-auto max-w-md shadow-md mt-12">
  <div className="relative text-gray-600 border">
    <input
      type="search"
      name="search"
      placeholder="Search here...."
      className="bg-white h-10 px-5 pr-10  text-sm focus:outline-none w-full"
    />
    <button type="submit" className= "text-white font-bold px-4 py-[8.5px] bg-[#FF444A] absolute right-0 top-0 shadow-md rounded-e-md">
      Search
    </button>
  </div>
</div>


        </div>
    );
};

export default Banner;