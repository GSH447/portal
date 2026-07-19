"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../../Grants&Foundations/Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const DonateinmemoryorHonour = () => {


  return (



    <>


    <div
      id="DonateinmemoryorHonour"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        WDTitle={"Donate in memory"}
        WDTitle1={"Giving in Memory, If you’re planning a funeral or memorial for a loved one."}
        WDTitle2={"We can help you collect donations in their memory or create a dedicated tribute page to honour their life."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Other ways to donate in memory"}
          cihOfficeText={"Donate at our office"}
          cihPhoneText={"Donate over the phone"}
          cihPostText={"Donate by post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default DonateinmemoryorHonour


