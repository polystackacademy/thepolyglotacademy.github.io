import AnyOneCanCodeSection from "../components/core/any-one-can-code-section";
import CoursesSection from "../components/core/courses-section";
import HowItWorksSection from "../components/core/how-it-works-section";
import IntroSection from "../components/core/intro-section";
import SubscriptionSection from "../components/core/subscriptions/subscription-section";
import TestimonySection from "../components/core/testimony-section";
import AppNavbar from "../components/navbar";
import { COURSES, MEMBERSTORIES } from "../shared/services/dummyData/data";

function PolyWeb() {
  console.log(COURSES);
  return (
    <>
      <AppNavbar />
      <IntroSection />
      <CoursesSection courses={COURSES} />
      <HowItWorksSection tryForFreeUrl={"http://www.google.com/"} />
      <TestimonySection testimonies={MEMBERSTORIES} />
      <AnyOneCanCodeSection redirectUrl="http://www.google.com/" />
      <SubscriptionSection />
    </>
  );
}

export default PolyWeb;
