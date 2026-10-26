import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MyStore } from "../context/MyContext";
import Product from "../components/ProductCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { iteamData, setIteamData, setCardIteam, cardIteam } =
    useContext(MyStore);
  let getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setIteamData(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {iteamData.map((ele) => {
        let isCardIteam = cardIteam.find((val) => val.id === ele.id);
        console.log(isCardIteam);

        return (
          <ProductCard key={ele.id} product={ele} setCardIteam={setCardIteam} isCardIteam={isCardIteam}  />
        );
      })}
    </div>
  );
};

export default Home;
