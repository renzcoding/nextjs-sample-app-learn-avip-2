export const getData = async (url: string) => {
  // const res = await fetch(`https://fakestoreapi.com/products`);
  const res = await fetch(url, {
    next: {
      tags: ["products"],
    },
  });

  if (!res) {
    throw new Error("failed to fecth data");
  }
  return res.json();
};
