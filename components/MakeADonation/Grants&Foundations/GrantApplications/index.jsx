"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const GrantApplications = () => {


  return (



    <>


    <div
      id="GrantApplications"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        bgImages={"/assets/images/make-a-donation/grantApplication.png"}
        WDTitle={"Grant Applications"}
        WDTitle1={"Support life-saving cardiac care with a one-time donation. Your contribution helps fund treatment, medical programs, and patient support where it’s needed most."}
        WDTitle2={"Learn how to apply for funding."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Access guidance and requirements to support cardiac healthcare initiatives."}
          cihOfficeText={"Visit our office"}
          cihPhoneText={"By phone"}
          cihPostText={"By post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default GrantApplications


