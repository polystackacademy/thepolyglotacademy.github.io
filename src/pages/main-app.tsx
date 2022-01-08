import React from 'react';
import AppNavbar from '../components/navbar/navbar';
import { COURSES, MEMBERSTORIES } from '../shared/services/dummyData';
import AnyoneCanCodeSectionWidget from './home/anyone-can-code-section.widget';
import HowItWorksSectionWidget from './home/how-it-work-section.widget';
import IntroSectionWidget from './home/intro-section.widget';
import PopularCoursesSectionWidget from './home/popular-courses-section.widget';
import SubscriptionSectionWidget from './home/subscription-section.widget';
import TestimonySectionWidget from './home/testimony-section.widget';
import WebFooterSectionWidget from './home/web-footer-section.widget';

function MainApp() {
  return (
    <>
      <AppNavbar />
      <IntroSectionWidget />
      <PopularCoursesSectionWidget courses={COURSES} />
      <HowItWorksSectionWidget />
      <TestimonySectionWidget testimonies={MEMBERSTORIES} />
      <AnyoneCanCodeSectionWidget />
      <SubscriptionSectionWidget />
      <WebFooterSectionWidget />
    </>
  );
}

export default MainApp;
