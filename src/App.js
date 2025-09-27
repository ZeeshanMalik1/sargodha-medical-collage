import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// For Public
import Home from "./pages/Home";
import VisionMission from "./pages/VisionMission";
import PrincipalMessage from "./pages/PrincipalMessage";
import AdmissionCriteria from "./pages/AdmissionCriteria";
import Department1 from "./pages/Department1";
import Department2 from "./pages/Department2";
import Research from "./pages/Research";
import NewsEvents from "./pages/NewsEvents";
import Notifications from "./pages/Notifications";
import Downloads from "./pages/Downloads";
import ContactUs from "./pages/ContactUs";
// For Admin
import AdminLogin from "./admin/Auth";
import AdminSignup from "./admin/Signup";
import AdminLayout from "./admin/AdminLayout";
import SliderSettings from "./admin/SliderSettings";
import NewsAdmin from "./admin/NewsAdmin";
import DownloadsAdmin from "./admin/DownloadsAdmin";
import NotificationsAdmin from "./admin/NotificationsAdmin";
import FacultyManager from "./admin/FacultyManager";
import DepartmentsAdmin from "./admin/DepartmentsAdmin";
import ResearchAdmin from "./admin/ResearchAdmin";
import SiteSettings from "./admin/SiteSettings";
import AdminProfile from "./admin/AdminProfile";
import ProtectedRoute from "./admin/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/principal-message" element={<PrincipalMessage />} />
        <Route path="/admission-criteria" element={<AdmissionCriteria />} />
        <Route path="/faculty-of-basic-sciences" element={<Department1 />} />
        <Route path="/faculty-of-clinical-sciences" element={<Department2 />} />
        <Route path="/research" element={<Research />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />

        <Route path="/admin" element={<ProtectedRoute><AdminLayout/></ProtectedRoute>}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="slider" element={<SliderSettings />} />
          <Route path="news" element={<NewsAdmin />} />
          <Route path="downloads" element={<DownloadsAdmin />} />
          <Route path="notifications" element={<NotificationsAdmin />} />
          <Route path="faculty" element={<FacultyManager />} />
          <Route path="departments" element={<DepartmentsAdmin />} />
          <Route path="research" element={<ResearchAdmin />} />
          <Route path="settings" element={<SiteSettings />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>

        <Route path="*" element={<div style={{padding:40}}>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
