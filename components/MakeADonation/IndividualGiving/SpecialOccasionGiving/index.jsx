"use client";
import React from 'react';
// import SaveALife from '../../Buttons/SaveALife';
// import HeroImageGridSlider from './HeroImageGridSlider';
import ContactInformation from '../../../Contact/ContactInformation';
// import WaysToDonateSubsHero from '../Card/Hero';
import WaysToDonateSubsHero from '../../Grants&Foundations/Card/Hero';
import SubscribeCTA from '../../../Banner/CTA/subscribe';

const SpecialOccasionGiving = () => {


  return (



    <>


    <div
      id="SpecialOccasionGiving"
      className='mb-[10rem]'
    >


      <WaysToDonateSubsHero
        bgImages={"/assets/images/make-a-donation/individual-donations-001.png"}
        WDTitle={"Special Occasion Giving"}
        WDTitle1={"Turn a meaningful moment into hope."}
        WDTitle2={"Celebrate birthdays, anniversaries, or milestones by fundraising or donating in support of cardiac patients."}
        WDctalink={"#"}
      />
      
      <ContactInformation
          contactInformationBg={"#fff"}
          contactInformationHeader={"Other ways to donate on Special Occasion Giving"}
          cihOfficeText={"Donate at our office"}
          cihPhoneText={"Donate over the phone"}
          cihPostText={"Donate by post"}
      />

      <SubscribeCTA/>

    </div>


        
    </>



  );
}

export default SpecialOccasionGiving


