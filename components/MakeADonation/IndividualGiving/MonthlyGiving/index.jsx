"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../../Grants&Foundations/Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const MonthlyGiving = () => {


  return (



    <>


    <div
      id="MonthlyGiving"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        bgImages={"/assets/images/make-a-donation/individual-giving.png"}
        WDTitle={"Donate Monthly"}
        WDTitle1={"Make a lasting impact every month. Your monthly donation provides ongoing support for people living with cardiac conditions"}
        WDTitle2={"Through The Gracespring Health Foundation, helping fund care, treatment, and life-saving programs all year round."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Other ways to donate monthly"}
          cihOfficeText={"Donate at our office"}
          cihPhoneText={"Donate over the phone"}
          cihPostText={"Donate by post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default MonthlyGiving


