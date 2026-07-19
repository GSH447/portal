"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const GovernmentGrants = () => {


  return (



    <>


    <div
      id="GovernmentGrants"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        bgImages={"/assets/images/make-a-donation/about-public-health-infrastructure-grant.png"}
        WDTitle={"Government Grants"}
        WDTitle1={"Support large-scale cardiac health initiatives."}
        WDTitle2={"Government grants help fund programs that improve access to care and strengthen healthcare outcomes."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Other ways to donate through Government Grants"}
          cihOfficeText={"Donate at our office"}
          cihPhoneText={"Donate over the phone"}
          cihPostText={"Donate by post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default GovernmentGrants


