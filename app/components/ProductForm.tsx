// ProductForm.tsx

'use client';
import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
const ProductForm: React.FC = () => {  

  return (
    <div>
    <main className=''>
        <div className='flex mt-5 '>
            <Image src="/Icon button 1.svg" alt="" />
            <p className="p1 mt-1 ">Create a product</p>
        </div>
        <div className='mt-3'>
            <div className='draft bg-red w-3 flex '>
                <p>Draft</p>
                <Image src="/check.svg" alt="" className='float-right ml-2' />
            </div>
            <span className='prev text-[#8A226F] font-[500] '>Preview product</span>
        </div>

        <hr className='hr' />

        <section className=' mt-6 w-full'>
<form  action="
" className=' '  >

<label className='px-3'>Basic details</label>
<div className="w-full max-w-lg mx-auto p-4 mt-3">
<input
type="text"
className="w-full border-2 border-gray-100 p-3 py-4   rounded-[11px] mb-4   text-[18px] placeholder:text-[grey] text-[17px] font-sm"
placeholder="Product Title" name='title' 
/>
<textarea name="message" id="message" className='w-full border-2 border-gray p-3 py-3 rounded rounded-[13px] mb-4   text-[18px] placeholder:text-[grey] text-[17px] font-sm' placeholder='Product description'></textarea>
<div className='grid grid-cols-2 flex gap-3'>
<input
type="text"
className="w-full border-2 border-gray-100 p-3 mb-4 rounded-[11px] text-[18px]  placeholder:text-[grey] text-[17px] font-sm "
placeholder="Price"
/>
<input
type="text"
className="w-full border-2 border-gray-100 p-3 mb-4 rounded-[11px] text-[18px]  placeholder:text-[grey] text-[17px] font-sm "
placeholder="Product collection"
/>
</div>
<textarea name="message" id="message" className='w-full border-2 border-gray p-3 py-3 rounded rounded-[13px] mb-4   text-[18px] placeholder:text-[grey] text-[17px] font-sm' placeholder='Product Collection'></textarea>
<input
type="text"
className="w-full border-2 border-gray-100 p-3 py-4 mb-4 rounded-[11px] text-[18px]  placeholder:text-[grey] text-[17px] font-sm "
placeholder="Inventory stocks"
/>
<section className='mt-4'>
<div className=''>
<label htmlFor="">Product Image</label>
<Image src="/chevron_down.svg" alt=""  className='float-right mt-1'/>
</div>
<div className='btn2'>
<div className='text-center flex gap-1 mx-auto'>
Add image
<Image src="/add_photo_alternate.svg" alt="" />
</div>

</div>
<div>

</div>
<hr className='hr1 ' />
</section>


<section className='inventory py-10'>
<label htmlFor="">Inventory Variations</label>
<div className='flex gap-2 mt-4'>
<input type="checkbox" className='form-checkbox h-4 w-4 mt-3' />
<div className='text-[16px]'>This product is variable; has different <br /> colors, sizes, weight, materials, etc</div>

</div>
</section>


</div>
<hr />

<section className='p-3 mt-3'>
<div>
<div>
<label htmlFor="" >Shipping</label>
<Image src="/chevron_down.svg" alt=""className='float-right mt-1' />
</div>
<div className=''>
<div className='mt-6'>Self shipping</div>
<input type="checkbox" className=' check h-4 w-4 ' />
</div>
<div>
<div className='mt-6'>InstaShop shipping</div>
<input type="checkbox" className=' check h-4 w-4 ' />
</div>
<input
type="text"
className="w-full border-2 mt-2 border-gray p-3 py-4 mb-4 rounded-[11px] text-[18px]  placeholder:text-[grey] text-[17px] font-sm "
placeholder="Inventory stocks"
/>
</div>


</section>
<hr />

<div className='btn1-flex '>
<button className=' cancel bg-[#fffff]  py-2'>
Cancel
</button>
<button className=' save bg-[#8A226F] text-white '>
Save
</button>
</div>

</form>
</section>
 
          <Link href={"/Products"}>
            <p className="text-blue-500 underline ">View Products</p>
          </Link>
</main>
</div> 
  );
};

export default ProductForm;