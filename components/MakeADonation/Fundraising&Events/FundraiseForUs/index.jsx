"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../../Grants&Foundations/Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const FundraiseforUs = () => {


  return (



    <>


    <div
      id="FundraiseforUs"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        bgImages={"/assets/images/make-a-donation/individualgiving.png"}
        WDTitle={"Fundraise for Us"}
        WDTitle1={"Raise funds your way. Create a fundraising campaign and help support people living with cardiac conditions."}
        WDTitle2={"Support life-saving cardiac care with a one-time donation. Your contribution helps fund treatment, medical programs, and patient support where it’s needed most."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Other ways to Fundraise for Us"}
          cihOfficeText={"Donate at our office"}
          cihPhoneText={"Donate over the phone"}
          cihPostText={"Donate by post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default FundraiseforUs


