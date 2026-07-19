"use client";
import MDHero from './MDHero';
import SubscribeCTA from '../Banner/CTA/subscribe';
import BannerCard from '../Banner/Banner';
import MakeADifference from '../MakeADifference/01';

export default function MakeADonation() {
  return (

    <>

      <MDHero
        svgBg={"#76B85E"}
      />


      {/* ===================== Individual Giving ===================== */}
      <BannerCard banner={{
        title: "Individual Giving",
        caption: `
          Individual giving helps provide life-saving cardiac care for children and families affected
          by heart disease. Your generosity supports surgeries, treatment, and compassionate care
          when it is needed most. Gracespring Hospitals Foundation is able to fund life-saving treatments, improve patient care,
          and provide critical medical support to children and families when they need it most.
          Every personal gift makes a direct and meaningful impact.
        `,
        image: "/assets/images/make-a-donation/individual-giving.png",
        display: "row",
        link: "/make-a-donation/individual-giving",
        linkCaption: "Give Today",
        bgColor: "#fff",
      }} />

      {/* ===================== Corporate Support ===================== */}
      <BannerCard banner={{
        title: "Corporate Support",
        caption: `
          Corporate support strengthens our ability to deliver advanced cardiac care.
          Businesses help expand access to treatment and improve outcomes for children with heart conditions.
        `,
        image: "/assets/images/make-a-donation/corporate-support.png",
        display: "row-reverse",
        link: "/make-a-donation/corporate-support",
        linkCaption: "Partner With Us",
        bgColor: "#ECECEC",
      }} />



      <MakeADifference
        bgColor={"#FFE08A"}
        title={"Every donation takes us a step closer to another life-saving breakthrough."}
        description={"Help us fund more life-saving cardiac disease research and treatment"}
      />

      {/* ===================== Grants & Foundations ===================== */}
      <BannerCard banner={{
        title: "Grants & Foundations",
        caption: `
          Partnerships with grant-making organizations and foundations enable us to expand our reach
          and strengthen healthcare delivery. These strategic collaborations help fund specialized
          programs, medical research, and infrastructure that support sustainable, long-term impact
          in pediatric and community health care.
        `,
        image: "/assets/images/make-a-donation/Grants&Foundations.png",
        display: "row",
        link: "/make-a-donation/grants-foundations",
        linkCaption: "Learn More",
        bgColor: "#fff",
      }} />



      {/* ===================== Fundraising & Events ===================== */}
      <BannerCard banner={{
        title: "Fundraising & Events",
        caption: `
          Our fundraising events bring communities together to support a shared mission of saving lives
          and improving health outcomes. From charity events to awareness campaigns, these initiatives
          generate vital resources, inspire giving, and strengthen community involvement in our work.
        `,
        image: "/assets/images/make-a-donation/001.png",
        display: "row-reverse",
        link: "/make-a-donation/fundraising-events",
        linkCaption: "View Events",
        bgColor: "#ECECEC",
      }} />

      


      <MakeADifference
        bgColor={"#fafafa"}
        title={"Health is the Wealth of every nation - I'm donating today, right now."}
        description={"-Chevy"}
      />


      <SubscribeCTA/>
    </>
  );
}
