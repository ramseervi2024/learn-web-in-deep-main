import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import CoachingManagementApp from "../components/CoachingManagementApp";
import PhotoEditor from "../components/PhotoEditor";
import FormulaTable from "../components/FormulaTable";
import InterviewQuestionsTable from "../components/InterviewQuestionsTable";
import Scroll3DWebsite from "../components/Scroll3DWebsite";
import InstagramApp from "../components/InstagramApp";
import LinkedInLayout from "../components/LinkedInLayout";

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
            </Routes>
        </BrowserRouter>
    );
}

