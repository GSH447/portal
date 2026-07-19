"use client";
// import About from "./About";
// import Aboutus from "./Aboutus";
// import AboutImage from "./AboutImage";
// import Aboutdifference from "./Aboutdifference";
import SubscribeCTA from "../../Banner/CTA/subscribe";
import WorkWithUs from "./WorkWithUs";
import WhyWorkWithUs from "./WhyWorkWithUs";
import Vacancies from "./Vacancies";
import SaveALife from "../../SaveALife";
import { save_a_life } from "../../SiteMaps/data";
import Benefactor01 from "../../Feedbacks/benefactor/WorkWithUs01";
// import Vmo from "./vmo";

export default function Careers() {
  return (

    <>
    
      <WorkWithUs/>
      <WhyWorkWithUs/>
      <Vacancies/>
      <Benefactor01/>
      {/* <Aboutus/> */}
      {/* <About/>
      <AboutImage/>
      <Aboutdifference/>
      <Vmo/> */}
    
      <SaveALife save_a_life={save_a_life} />
      <SubscribeCTA/>
    </>
  );
}