"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const PhilanthropicFoundations = () => {


  return (



    <>


    <div
      id="PhilanthropicFoundations"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        bgImages={"/assets/images/make-a-donation/Grants&Foundations.png"}
        WDTitle={"Philanthropic Foundations Donation"}
        WDTitle1={"Partner with us to create sustainable change."}
        WDTitle2={"Foundation funding supports innovative cardiac research, treatment, and community health programs."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Other ways to donate"}
          cihOfficeText={"Donate at our office"}
          cihPhoneText={"Donate over the phone"}
          cihPostText={"Donate by post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default PhilanthropicFoundations


