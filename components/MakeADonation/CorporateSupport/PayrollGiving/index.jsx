"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
import WaysToDonateSubsHero from '../../Grants&Foundations/Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const PayrollGiving = () => {


  return (



    <>


    <div
      id="PayrollGiving"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        bgImages={"/assets/images/make-a-donation/giving.png"}
        WDTitle={"Payroll Giving Donation"}
        WDTitle1={"An easy way for employees to give regularly."}
        WDTitle2={"Payroll giving allows staff to donate directly from their salary, creating consistent support with minimal effort."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Other ways of donation through Payroll Giving"}
          cihOfficeText={"Donate at our office"}
          cihPhoneText={"Donate over the phone"}
          cihPostText={"Donate by post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default PayrollGiving


