import React from "react";
import { allData } from "@/utils";
import { Cards } from "@/components";
import { animeProps } from "@/types";

const CardPage = async () => {
  const myData = await allData();
  return (
    <div className="flex flex-col md:grid grid-cols-3 gap-5">
      {myData.map((data: animeProps) => {
        return (
          <div key={data._id}>
            <Cards datas={data} />
          </div>
        );
      })}
    </div>
  );
};

export default CardPage;
