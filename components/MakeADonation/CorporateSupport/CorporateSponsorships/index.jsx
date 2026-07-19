"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../../Grants&Foundations/Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const CorporateSponsorships = () => {


  return (



    <>


    <div
      id="CorporateSponsorships"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        bgImages={"/assets/images/make-a-donation/corporate-support.png"}
        WDTitle={"Corporate Sponsorships Donation"}
        WDTitle1={"Partner with us to make a measurable difference."}
        WDTitle2={"Corporate sponsorships support vital cardiac programs while showcasing your organisation’s commitment to community impact."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Other ways Corporation can sponsor donation"}
          cihOfficeText={"Donate at our office"}
          cihPhoneText={"Donate over the phone"}
          cihPostText={"Donate by post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default CorporateSponsorships


