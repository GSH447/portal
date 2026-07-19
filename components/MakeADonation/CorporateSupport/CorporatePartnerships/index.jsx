"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../../Grants&Foundations/Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const CorporatePartnerships = () => {


  return (



    <>


    <div
      id="CorporatePartnerships"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        bgImages={"/assets/images/make-a-donation/Grants&Foundations.png"}
        WDTitle={"Corporate Partnerships Donation"}
        WDTitle1={"Build a purpose-driven partnership."}
        WDTitle2={"Work with The Gracespring Health Foundation on long-term initiatives that align with your organisation’s values and CSR goals."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Other ways to donate through Corporate Partnerships"}
          cihOfficeText={"Donate at our office"}
          cihPhoneText={"Donate over the phone"}
          cihPostText={"Donate by post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default CorporatePartnerships


