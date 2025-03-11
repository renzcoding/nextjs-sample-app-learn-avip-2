import { getData } from "@/app/services/products";
// import Modal from "@/components/core/Modal";
import dynamic from "next/dynamic";
import Image from "next/image";

const Modal = dynamic(() => import("@/components/core/Modal"));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    `http://localhost:3000/api/product/?id=` + params.id
  );
  console.log(product.data);
  return (
    <Modal>
      <Image
        width={500}
        height={500}
        src={product.data.image}
        alt="product"
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>{product.data.title}</h3>
        <p>Price: ${product.data.price}</p>
      </div>
    </Modal>
  );
}
