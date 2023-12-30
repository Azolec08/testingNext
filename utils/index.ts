import { notFound } from "next/navigation";

//cards anime
export async function allData() {
  const data = await fetch("http://localhost:3010/api/", {
    next: {
      revalidate: 0,
    },
  });

  return data.json();
}

//id

export const idData = async (id: any) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await fetch(`http://localhost:3010/api/${id}`);

  if (!data.ok) {
    notFound();
  }

  return data.json();
};
