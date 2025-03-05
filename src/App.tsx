import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import Fees from "./pages/Fees";
import CampusLife from "./pages/CampusLife";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import Syllabus from "./pages/Syllabus";
import StudentPortal from "./pages/StudentPortal";
import Departments from "./pages/Departments";
import FeaturesPage from "./pages/FeaturesPage";
import Facilities from "./pages/Facilities";
import TrainingPlacement from "./pages/Trainings";
import Gallery from "./pages/Gallery";
import SchoolOfEngineeringHome from "./pages/SchoolOfEngineeringHome";
import SchoolOfManagementHome from "./pages/SchoolOfManagementHome";
import VishwabharatiPolytechnicHome from "./pages/VishwabharatiPolytechnicHome";
import SchoolOfEngineeringCourses from "./pages/SchoolOfEngineeringCourses";
import SchoolOfManagementCourses from "./pages/SchoolOfManagementCourses";
import { ScrollToTop } from "./components/ScrollToTop";


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        {/* <PopupModal /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/trainings" element={<TrainingPlacement />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-portal/fees" element={<Fees />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-portal/placements" element={<Jobs />} />
          <Route path="/student-portal/syllabus" element={<Syllabus />} />
          <Route path="/student-portal/*" element={<StudentPortal />} />


          <Route path="/school-of-engineering/home" element={<SchoolOfEngineeringHome />} />
          <Route path="/school-of-engineering/courses" element={<SchoolOfEngineeringCourses />} />




          <Route path="/school-of-management/home" element={<SchoolOfManagementHome />} />
          <Route path="/school-of-management/courses" element={<SchoolOfManagementCourses />} />



          
          <Route path="/vishwabharati-polytechnic-institute/home" element={<VishwabharatiPolytechnicHome />} />

        </Routes>
        <ScrollToTop/>
        <Footer />
      </div>
    </Router>
  );
}
