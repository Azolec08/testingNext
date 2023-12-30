import React from "react";
import { animeProps } from "@/types";
import Link from "next/link";
import { Modal } from ".";
import Image from "next/image";

type dataProps = {
  datas: animeProps;
};
const Cards = ({ datas }: dataProps) => {
  const { img, title, _id } = datas;
  return (
    <div className="flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image src={img} alt="Shoes" height="400" width="500" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary"></div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex justify-around item-center gap-x-2">
            <div>
              <Modal modalData={datas} />
            </div>
            <Link
              className="p-2 bg-blue-500 font-semibold text-white text-sm rounded-md"
              href={`/${_id}`}
            >
              <button>Information</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
