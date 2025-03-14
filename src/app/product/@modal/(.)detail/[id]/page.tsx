"use client";

// import { getData } from "@/app/services/products";
// import Modal from "@/components/core/Modal";
import dynamic from "next/dynamic";
import Image from "next/image";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Modal = dynamic(() => import("@/components/core/Modal"));

export default function DetailProductPage(props: any) {
  const { params } = props;
  /* const product = await getData(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=` + params.id
  );
  console.log(product.data); */

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading } = useSwr(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`,
    fetcher
  );

  console.log("this is data ", data);
  const product = { data: isLoading ? [] : data.data };
  console.log("this is data ", product);

  return (
    <Modal>
      <Image
        width={500}
        height={500}
        src={product.data?.image}
        alt="product"
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>{product.data?.title}</h3>
        <p>Price: ${product.data?.price}</p>
      </div>
    </Modal>
  );
}
