"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    console.log("teststs", process.env);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=products&secret=${process.env.REVALIDATE_TOKEN}`,
      {
        method: "POST",
      }
    );

    const response = await res.json();
    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      if (response.revalidate) setStatus("Revalidate Success");
    }
  };

  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mr-5">
      <h1>{status}</h1>
      <button className="bg-black text-white p-3" onClick={() => revalidate()}>
        Revalidate
      </button>
    </div>
  );
}
