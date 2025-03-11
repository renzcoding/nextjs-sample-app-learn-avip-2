import { retrieveData, retrieveDataById } from "@/app/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "sepatu baru",
    price: 100000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14a27a5c-33ef-4f9e-bff8-5f7111ddb8fd/NIKE+VOMERO+18.png",
  },
  {
    id: 2,
    title: "sebdalk baru",
    price: 133000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d130fcfa-7169-4172-8955-bf39cc544527/NIKE+VOMERO+18.png",
  },
  {
    id: 3,
    title: "sebdalk baru",
    price: 133000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d130fcfa-7169-4172-8955-bf39cc544527/NIKE+VOMERO+18.png",
  },
  {
    id: 4,
    title: "sebdalk baru",
    price: 133000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d130fcfa-7169-4172-8955-bf39cc544527/NIKE+VOMERO+18.png",
  },
  {
    id: 5,
    title: "sebdalk baru",
    price: 133000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d130fcfa-7169-4172-8955-bf39cc544527/NIKE+VOMERO+18.png",
  },
];

export async function GET(request: NextRequest) {
  console.log(data);
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    // const detailProduct = data.find((item) => item.id === Number(id));
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct === undefined)
      return NextResponse.json({ status: 404, message: "Not Found", data: {} });

    return NextResponse.json({
      status: 200,
      message: "Success",
      data: detailProduct,
    });
  }

  const products = await retrieveData("products");
  //   return NextResponse.json({ status: 200, message: "success ", data });

  return NextResponse.json({
    status: 200,
    message: "success ",
    data: products,
  });
}
