"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const GrantEnquiries = () => {


  return (



    <>


    <div
      id="GrantEnquiries"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        bgImages={"/assets/images/make-a-donation/monthly-giving.jpg"}
        WDTitle={"Grant Enquiries"}
        WDTitle1={"Support life-saving cardiac care with a one-time or monthly donation."}
        WDTitle2={"Your contribution helps fund treatment, medical programs, and patient support where it’s needed most."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Contact our team to discuss grant partnerships and eligibility."}
          cihOfficeText={"Visit our office"}
          cihPhoneText={"By phone"}
          cihPostText={"By post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default GrantEnquiries


