import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import CoachingManagementApp from "../components/CoachingManagementApp";
import PhotoEditor from "../components/PhotoEditor";
import FormulaTable from "../components/FormulaTable";
import InterviewQuestionsTable from "../components/InterviewQuestionsTable";
import Scroll3DWebsite from "../components/Scroll3DWebsite";
import InstagramApp from "../components/InstagramApp";
import LinkedInLayout from "../components/LinkedInLayout";
import JustDial from "../components/JustDial";
import OLXLayout from "../components/OLXLayout";
import CashifyLayout from "../components/CashifyLayout";
import MyntraLayout from "../components/MyntraLayout";
import ModelViewer from "../pages/3DModel/ModelViewer";
import ModelWrapper from "../pages/3DModel/GLTFModel";
import ProgramizEditor from "../components/ProgramizEditor";
import BlogPage from "../components/BlogPage"; 
import DoctorProfileManager from "../components/DoctorProfileManager";
import WeddingInvitationGenerator from "../components/WeddingInvitationGenerator";
import ResumeGenerator from "../components/ResumeGenerator";
import BlogCreator from "../components/BlogCreator";
import WeddingAlbumGenerator from "../components/WeddingAlbumGenerator";
import KankotriGenerator from "../components/KankotriGenerator";
import WeddingCardGenerator from "../components/WeddingCardGenerator";
import VideoBackgroundSite from "../components/VideoBackgroundSite";

export default function AllRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/coaching-management" element={<CoachingManagementApp />} />
                <Route path="/photo-editor" element={<PhotoEditor />} />
                <Route path="/formula-table" element={<FormulaTable />} />
                <Route path="/interviewquestions-table" element={<InterviewQuestionsTable />} />
                <Route path="/instagram" element={<InstagramApp />} />
                <Route path="/scroll-3d-website" element={<Scroll3DWebsite />} />
                <Route path="/LinkedIn" element={<LinkedInLayout />} />
                <Route path="/JustDial" element={<JustDial />} />
                <Route path="/OLXLayout" element={<OLXLayout />} />
                <Route path="/CashifyLayout" element={<CashifyLayout />} />
                <Route path="/MyntraLayout" element={<MyntraLayout />} />
                <Route path="/ModelViewer" element={<ModelViewer />} />
                <Route path="/ModelWrapper" element={<ModelWrapper />} />
                <Route path="/ProgramizEditor" element={<ProgramizEditor />} />
                <Route path="/BlogPage" element={<BlogPage />} />
                <Route path="/DoctorProfileManager" element={<DoctorProfileManager />} />
                <Route path="/WeddingInvitationGenerator" element={<WeddingInvitationGenerator />} />
                <Route path="/ResumeGenerator" element={<ResumeGenerator />} />
                <Route path="/BlogCreator" element={<BlogCreator />} />
                <Route path="/WeddingAlbumGenerator" element={<WeddingAlbumGenerator />} />
                <Route path="/KankotriGenerator" element={<KankotriGenerator />} />
                <Route path="/WeddingCardGenerator" element={<WeddingCardGenerator />} />
                <Route path="/VideoBackgroundSite" element={<VideoBackgroundSite />} />
                </Routes>
        </BrowserRouter>
    );
}

