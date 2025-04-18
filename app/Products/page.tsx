import React from 'react';

import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  Variants: string;
  collection: string;
  image: string;
}

const productsData: Product[] = [
  {
    id: 1,
    title: 'Gucci bag - the epitome of luxury and sophistication',
    description: '',
    price: 18.0,
    Variants: '',
    collection: 'Collection 1',
    image: '/PRODUCT PAGE IMAGE.svg',
  },
  // Add more products as needed
];

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1>Products</h1>
      <div className="">
        {productsData.map((product) => (
          <div key={product.id} className="">
            <img src={product.image} alt={product.title} className="w-full" />
            <div className="">
              <h2 className="text-xl font-bold ">{product.title}</h2>
              <div className="flex gap-2">
                <p className="text-lg font-semibold text-[20px] text-[#3B3B3B]">₦{product.price}</p>
                <div className="text-[#ACACAC]">₦28.0</div>
                <div className="bg-[#8A226F] w-fit px-2 h-fit rounded-full text-white">25% OFF</div>
              </div>
              <hr className="mt-3" />
              <div>
                <h2 className="text-[19px] mt-6 font-medium">Select variants</h2>
                <p className="text-[10px]-500 mt-3 ">Size: SMALL</p>
                <div className="xs:grid grid-cols-2 gap-4 mt-1 px-4 w-fit sm:grid grid-cols-5 gap-5">
                  <div className="bg-black text-white w-fit px-3 rounded-full">Filter</div>
                  <div className="bg-[#d3d3d3] text-black w-fit px-3 rounded-full">Filter</div>
                  <div className="bg-[#d3d3d3] text-black w-fit px-3 rounded-full">Filter</div>
                  <div className="bg-[#d3d3d3] text-black w-fit px-3 rounded-full">Filter</div>
                  <div className="bg-[#d3d3d3] text-black w-fit px-3 rounded-full">Filter</div>
                </div>
                <p className="text-[10px]-500 mt-3">Color: WHITE</p>
                <div className="grid grid-cols-5 gap-4 mt-1 px-4 w-fit">
                  <div className="bg-black text-white w-fit px-3 rounded-full">Filter</div>
                  <div className="bg-[#d3d3d3] text-black w-fit px-3 rounded-full">Filter</div>
                  <div className="bg-[#d3d3d3] text-black w-fit px-3 rounded-full">Filter</div>
                </div>
                <hr className="mt-6" />
              </div>
              <div className="mt-5 px-6">
                <h2 className="text-black text-[19px]-500 font-bold">Product description</h2>
                <p className="#ACACAC">
                  Wholesale and drop shipping are both welcomed. For wholesale, we will offer discount or free express
                  shipping which only takes 3-7 days to arrive...
                </p>
                <div className="text-[#8A226F] font-bold text-[19px]">Read more</div>
              </div>
            </div>
            <hr className="mt-3" />
            <div className="px-6">
              <h2 className="text-[19px] mt-6 font-bold">About this vendor</h2>
              <div className="flex">
                <Image src="/Group 1000006290.svg" alt="" className="mt-4" width={20} height={20} />
                <h2 className="text-black text-[19px]-600 font-medium mt-6">About vendor</h2>
              </div>
              <p className="#ACACAC">
                Vendor description: You can track your parcel on the following website using your tracking number:
                www.17trac...
              </p>
              <div className="">
                <div className="bg-[#ACACAC]">Quality</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;