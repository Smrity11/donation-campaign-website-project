import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function DonationStatistics() {
  const [donatePrice, setDonatePrice] = useState([]);
  const [noFound, setNoFound] = useState("");

  useEffect(() => {
    const select = JSON.parse(localStorage.getItem("selectPrice"));
    
      if (select) {
        setDonatePrice(select);
      } else {
        setNoFound('no data found');
      }
  }, []);
  const total = donatePrice.reduce(
    (preValue, currentValue) => preValue + currentValue.price,
    0
  );

  return (
    <div>
      {donatePrice.length > 0 ? (
        <div>
          <Chart
            type="pie"
            height={270}
            series={donatePrice.map((item) => item.price)}
            labels={donatePrice.map((item) => item.category)}
            options={{}}
          />
          <p
            className="
           mt-5 text-center text-xl text-red-700"
          >
            Total Donation: ${total}
          </p>
        </div>
      ) : (
        <p>{noFound}</p>
      )}
    </div>
  );
}

export default DonationStatistics;
