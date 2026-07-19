"use client";
import Image from "next/image";
export default function Product_ServicesImage() {
    return (
      <div className="w-[100%]">
        <Image
          src={"/assets/images/product_services/5.svg" || null} // Replace with the actual path to your image
          alt="Company"
          className="rounded-xl object-cover "
          width={1000}
          height={1000}
        />
      </div>
    );
  }
  