"use client";
import PSHero from './PSHero';
// import HeroImageGridSlider from './HeroImageGridSlider';
import SubscribeCTA from '../Banner/CTA/subscribe';
import PublicAwarenessInitiative from './PublicAwarenessInitiatives';
import FinancialAssistanceProgram from './FinancialAssistanceProgram';
import ResearchFunding from './ResearchFunding';
import SupportGroupsCounsellingServices from './SupportGroupsCounsellingServices';
import ResearchInitiatives from './ResearchInitiatives';
import EducationalResources from './EducationalResources';
import MakeADifference from '../MakeADifference/01';
export default function ProgramAndServicesPage() {
  return (

    <>

      <PSHero/>

      {/* <HeroImageGridSlider/> */}
      
      <PublicAwarenessInitiative/>

      <MakeADifference
        bgColor={"#FFE08A"}
        title={"Help us fund more life-saving cardiac disease research"}
        description={"Today, we continue to build on this track record with life-saving research breakthroughs. But we can't stop now. Every donation takes us a step closer to another life-saving breakthrough. "}
      />
      <FinancialAssistanceProgram/>
      
      <MakeADifference
        bgColor={"#6B5B95"}
        title={"Make a donation to celebrate your special assistance to mankind"}
        description={"Your generosity ensures we can continue to make breakthroughs happen, every donation takes us a step closer to another life-saving breakthrough."}
      />


      <ResearchFunding/>
      
      
      <MakeADifference
        bgColor={"#8adbe2"}
        title={"Help us fund a research to save more cardiac disease conditions"}
        description={"The day you choose to sponsor could be a wedding date, a birthday or the day you, or a loved one, finished cardiac treatment."}
      />


      <SupportGroupsCounsellingServices/>

      
      <MakeADifference
        bgColor={"#C7B299"}
        title={"“To everyone who has donated, we want to thank them so much.”"}
        description={"Today, help us to fund life-saving support that gives people with cardiac disease life again."}
      />


      <ResearchInitiatives/>

      
      <MakeADifference
        bgColor={"#F4B183"}
        title={"Donate to The Gracespring Health Foundation"}
        description={"Help us to fund life-saving research that gives people with cardiac disease the best possible treatment."}
      />
  
      <EducationalResources/>
  
      <SubscribeCTA/>
    </>
  );
}
