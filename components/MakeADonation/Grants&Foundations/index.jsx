"use client";
import MDHero from '../MDHero';
import BannerCard from '../../Banner/Banner';
import SubscribeCTA from '../../Banner/CTA/subscribe';
import MakeADifference from '../../MakeADifference/01';

export default function GrantsFoundations() {
  return (

    <>
        
        <MDHero
            MDTextTitle={"Grants and Foundation"}
            MDSubImages={"/assets/images/make-a-donation/grant.png"}
            svgBg={"#76B85E"}
        />

        <BannerCard banner={{
          title: "Government Grants",
          caption: `
            Government grants help improve cardiac healthcare infrastructure,
            enhance public health initiatives, and support vulnerable patients.
          `,
          image: "/assets/images/make-a-donation/about-public-health-infrastructure-grant.png",
          display: "row-reverse",
          link: "/make-a-donation/government-grants",
          linkCaption: "View Programs",
          bgColor: "#FFFFFF",
        }} />

        <BannerCard banner={{
          title: "Philanthropic Foundations",
          caption: `
            Philanthropic foundations play a critical role in advancing pediatric cardiac research,
            treatment access, and long-term health outcomes.
          `,
          image: "/assets/images/make-a-donation/grant.png",
          display: "row",
          link: "/make-a-donation/philanthropic-foundations",
          linkCaption: "Partner With Us",
          bgColor: "#ECECEC",
        }} />


        <MakeADifference
          bgColor="#ffffff"
          title="“Strategic funding enables sustainable programs that improve patient outcomes for years to come.”"
          description="— Philanthropic Foundation"
          textColor="#223A5C"
          subTextColor="#223A5C"
        />


        <BannerCard banner={{
          title: "Grant Applications",
          caption: `
            We welcome grant applications that align with our mission to improve cardiac care,
            support innovation, and save lives.
          `,
          image: "/assets/images/make-a-donation/grantApplication.png",
          display: "row-reverse",
          link: "/make-a-donation/grant-applications",
          linkCaption: "Apply Now",
          bgColor: "#FFFFFF",
        }} />

        <BannerCard banner={{
          title: "Grant Enquiries",
          caption: `
            For questions regarding funding opportunities or partnerships,
            our team is available to assist with grant enquiries.
          `,
          image: "/assets/images/make-a-donation/grant.png",
          display: "row",
          link: "/make-a-donation/grant-enquiries",
          linkCaption: "Contact Us",
          bgColor: "#ECECEC",
        }} />

        <SubscribeCTA/>

    </>
  );
}
