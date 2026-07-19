"use client";
import DonateHero from "./Hero";
import CTA from "./CTA";
import MakeADifference from "../MakeADifference/01";
import SubscribeCTA from "../Banner/CTA/subscribe";
import MakeADonationSwiper from "../MakeADonation/Swiper";
export default function DonatePage() {
  return (

    <>

      <DonateHero/>
    
      <div
        className="-mt-[28.5rem] lg:-mt-[9rem]"
      >
        <CTA/>
      </div>
      <MakeADifference
        // bgColor={"#ad8e8e"}
        title={" “I was diagnosed with a heart defect. I can now laugh, play, and dream like every other child.” "}
        description={"Thanks to a life-saving VSD repair surgery, Your donation can give another child the same chance"}
        textColor={"#ad8e8e"}
        // subTextColor={"#000"}
      />
      <MakeADonationSwiper/>
      <SubscribeCTA/>
    
    </>
  );
}
