"use client";
import MDHero from '../MDHero';
import BannerCard from '../../Banner/Banner';
import SubscribeCTA from '../../Banner/CTA/subscribe';
import MakeADifference from '../../MakeADifference/01';

export default function CorporateSupport() {
  return (

    <>

        <MDHero
            MDTextTitle={"Corporate Support"}
            MDSubImages={"/assets/images/make-a-donation/collaborative.png"}
            svgBg={"#6890F0"}
        />



        <BannerCard banner={{
          title: "Corporate Sponsorships",
          caption: `
            Corporate sponsorships fund essential programs and events that advance pediatric cardiac care
            while creating meaningful community and brand impact.
          `,
          image: "/assets/images/make-a-donation/corporate-support.png",
          display: "row",
          link: "/make-a-donation/corporate-sponsorships",
          linkCaption: "Become a Sponsor",
          bgColor: "#FFFFFF",
        }} />

        <BannerCard banner={{
          title: "Payroll Giving",
          caption: `
            Payroll giving allows employees to support life-saving heart care through regular,
            tax-effective contributions made directly from their salary.
          `,
          image: "/assets/images/make-a-donation/giving.png",
          display: "row-reverse",
          link: "/make-a-donation/payroll-giving",
          linkCaption: "Get Started",
          bgColor: "#ECECEC",
        }} />


        <MakeADifference
          bgColor="#ffffff"
          title="“Partnering with this organisation allows us to support life-saving care beyond our walls.”"
          description="— Healthcare Corporate Partner"
          textColor="#6890F0"
          subTextColor="#6890F0"
        />


        <BannerCard banner={{
          title: "Corporate Partnerships",
          caption: `
            Long-term corporate partnerships help drive innovation, expand cardiac programs,
            and ensure sustainable healthcare solutions for children and families.
          `,
          image: "/assets/images/make-a-donation/Grants&Foundations.png",
          display: "row",
          link: "/make-a-donation/corporate-partnerships",
          linkCaption: "Explore Partnerships",
          bgColor: "#ECECEC",
        }} />

        <BannerCard banner={{
          title: "Sponsor a Day of Care",
          caption: `
            Sponsoring a day of care helps cover vital heart treatments, nursing support,
            and medical services for patients facing cardiac disease.
          `,
          image: "/assets/images/make-a-donation/001.png",
          display: "row-reverse",
          link: "/make-a-donation/sponsor-a-day",
          linkCaption: "Sponsor a Day",
          bgColor: "#FFFFFF",
        }} />


        <SubscribeCTA/>

    </>
  );
}
