"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../../Grants&Foundations/Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const SponsoraDayofCare = () => {


  return (



    <>


    <div
      id="SponsoraDayofCare"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        bgImages={"/assets/images/make-a-donation/001.png"}
        WDTitle={"Sponsor a Day of Care"}
        WDTitle1={"Make a direct impact in one day."}
        WDTitle2={"Sponsoring a day of care helps cover treatment and essential services for cardiac patients when they need it most."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Other ways to Sponsor a Day of Care"}
          cihOfficeText={"Sponsor at our office"}
          cihPhoneText={"Sponsor over the phone"}
          cihPostText={"Sponsor by post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default SponsoraDayofCare


