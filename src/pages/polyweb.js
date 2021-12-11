import CoursesSection from "../components/core/courses-section";
import HowItWorksSection from "../components/core/how-it-works-section";
import IntroSection from "../components/core/intro-section";
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
    </>
  );
}

export default PolyWeb;
