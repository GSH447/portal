"use client";
import PSHero from './PSHero';
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
      <PublicAwarenessInitiative/>
      <MakeADifference/>
      <FinancialAssistanceProgram/>
      <MakeADifference/>
      <ResearchFunding/>
      <MakeADifference/>
      <SupportGroupsCounsellingServices/>
      <MakeADifference/>
      <ResearchInitiatives/>
      <MakeADifference/>
      <EducationalResources/>
      <SubscribeCTA/>
    </>
  );
}
