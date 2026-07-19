"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../../Grants&Foundations/Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const CharityRunsWalks = () => {


  return (



    <>


    <div
      id="CharityRunsWalks"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        bgImages={"/assets/images/make-a-donation/vmo.png"}
        WDTitle={"Charity Runs & Walks"}
        WDTitle1={"Move for a cause. Take part in sponsored runs and walks to raise awareness and funds for cardiac care."}
        WDTitle2={"Support life-saving cardiac care with a one-time donation. Your contribution helps fund treatment, medical programs, and patient support where it’s needed most."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Other ways to donate through Charity Runs & Walks"}
          cihOfficeText={"Donate at our office"}
          cihPhoneText={"Donate over the phone"}
          cihPostText={"Donate by post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default CharityRunsWalks


