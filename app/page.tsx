import Image from "next/image";


import Link from "next/link";


export default function Home( ) {
  return (
    <main>
      <Image src="/Shopping Sale (1).svg" alt="" className="img mt-auto flex" width={300} height={300} />

     
      <h1 className="healding text-center">Welcome</h1>
      <p className="p text-center">The safest platform to shop from social media vendors</p>
      <div className="container">
        <div className="flex">
          <Image src="/check_circle (1).svg" alt="" width={10} height={10} />
          <span className="span">Reach Millions of Shoppers</span>
         
        </div>
        <div className="flex">
          <Image src="/check_circle (1).svg" alt="" className="circle" width={10} height={10} />
          <span className="span">Easy Product Listing</span>
         
        </div>
        <div className="flex">
          <Image src="/check_circle (1).svg" alt="" className="circle" width={10} height={10} />
          <span className="span">Secure and Fast Payments</span>
         
        </div>
        <div className="flex">
          <Image src="/check_circle (1).svg" alt="" className="circle" width={10} height={10} />
          <span className="span">Boost Your Visibility</span>
         
        </div>
    
      </div>
      <Link href={"/Formpage"}>
  <button className="btn">Get started</button>
</Link>

    </main>
  );
}
