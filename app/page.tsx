import Image from "next/image";


import Link from "next/link";


export default function Home( ) {
  return (
    <main>
      <img src="/Shopping Sale (1).svg " alt="" className="img mt-auto flex" />

     
      <h1 className="healding text-center">Welcome</h1>
      <p className="p text-center">The safest platform to shop from social media vendors</p>
      <div className="container">
        <div className="flex">
          <img src="/check_circle (1).svg" alt="" />
          <span className="span">Reach Millions of Shoppers</span>
         
        </div>
        <div className="flex">
          <img src="/check_circle (1).svg" alt="" className="circle" />
          <span className="span">Easy Product Listing</span>
         
        </div>
        <div className="flex">
          <img src="/check_circle (1).svg" alt="" className="circle" />
          <span className="span">Secure and Fast Payments</span>
         
        </div>
        <div className="flex">
          <img src="/check_circle (1).svg" alt="" className="circle" />
          <span className="span">Boost Your Visibility</span>
         
        </div>
    
      </div>
      <Link href={"/Formpage"}>
  <button className="btn">Get started</button>
</Link>

    </main>
  );
}
