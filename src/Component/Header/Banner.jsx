
const Banner = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-28">I Grow By Helping People In Need</h1>
            <div className="mx-auto max-w-md shadow-md mt-12">
  <div className="relative text-gray-600 border">
    <input
      type="search"
      name="search"
      placeholder="Search..."
      className="bg-white h-10 px-5 pr-10  text-sm focus:outline-none w-full"
    />
    <button type="submit" className= " px-4 py-[8.5px] bg-pink-400 absolute right-0 top-0 shadow-md rounded-e-md">
      Search
    </button>
  </div>
</div>


        </div>
    );
};

export default Banner;