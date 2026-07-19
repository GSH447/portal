"use client";
import MDHero from '../MDHero';
import BannerCard from '../../Banner/Banner';
import SubscribeCTA from '../../Banner/CTA/subscribe';
import MakeADifference from '../../MakeADifference/01';

export default function IndividualGiving() {
  return (

    <>

        <MDHero
            MDTextTitle={"Individual Giving"}
            MDSubImages={"/assets/images/make-a-donation/donation.png"}
            svgBg={"#76B85E"}
        />



          <BannerCard banner={{
            title: "Make a Donation",
            caption: `
              Every donation directly supports critical heart treatments, medical equipment,
              and patient care services that save lives and restore hope.
            `,
            image: "/assets/images/make-a-donation/mad.png",
            display: "row-reverse",
            link: "/donate",
            linkCaption: "Donate Now",
            bgColor: "#FFFFFF",
          }} />

          <BannerCard banner={{
            title: "Monthly Giving",
            caption: `
              Monthly giving provides consistent support for children receiving ongoing cardiac care.
              Your sustained generosity ensures continuous treatment and long-term impact.
            `,
            image: "/assets/images/make-a-donation/funds-grants.png",
            display: "row",
            link: "/make-a-donation/monthly-giving",
            linkCaption: "Become a Monthly Donor",
            bgColor: "#ECECEC",
          }} />



          <MakeADifference
            bgColor="#ffffff"
            title="“Giving back is our way of saying thank you for the care that changed our lives.”"
            description="— Community Supporter"
            textColor="#76B85E"
            subTextColor="#76B85E"
          />


        <BannerCard banner={{
          title: "Donate in Memory or Honour",
          caption: `
            Celebrate a life or honor a loved one through a tribute gift.
            These meaningful donations help fund heart care while creating a lasting legacy of compassion.
          `,
          image: "/assets/images/make-a-donation/Make-A-Donation-In-Honor-Of-Someone-To-These-Special-Causes.png",
          display: "row-reverse",
          link: "/make-a-donation/donate-in-honour",
          linkCaption: "Make a Tribute Gift",
          bgColor: "#FFFFFF",
        }} />

        <BannerCard banner={{
          title: "Special Occasion Giving",
          caption: `
            Turn birthdays, anniversaries, and milestones into moments of impact.
            Your special occasion gift helps support children battling heart disease.
          `,
          image: "/assets/images/make-a-donation/individual-donations-001.png",
          display: "row",
          link: "/make-a-donation/special-occasion-giving",
          linkCaption: "Give with Purpose",
          bgColor: "#ECECEC",
        }} />



        <SubscribeCTA/>

    </>
  );
}
