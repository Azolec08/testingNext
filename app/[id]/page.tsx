import React from "react";
import { idData } from "@/utils";

const page = async ({ params }: any) => {
  const data = await idData(params.id);
  return <div key={data._id}>{data.title}</div>;
};

export default page;
