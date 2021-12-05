import CoursesSection from "../components/core/courses-section";
import IntroSection from "../components/core/intro-section";
import AppNavbar from "../components/navbar";
import { COURSES } from "../shared/services/dummyData/data";

function PolyWeb() {
  console.log(COURSES);
  return (
    <>
      <AppNavbar />
      <IntroSection />
      <CoursesSection courses={COURSES} />
    </>
  );
}

export default PolyWeb;
