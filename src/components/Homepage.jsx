import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  const myproject = [
    { id: 1, title: "Coaching Management App", url: "coaching-management" },
    { id: 2, title: "Photo Editor", url: "photo-editor" },
    { id: 3, title: "Formula Table", url: "formula-table" },
    { id: 4, title: "Interview Questions Table", url: "interviewquestions-table" },
    { id: 5, title: "InstagramApp", url: "instagram" },
    { id: 6, title: "Scroll 3D Website", url: "scroll-3d-website" },
    { id: 7, title: "LinkedIn", url: "LinkedIn" },
    { id: 8, title: "JustDial", url: "JustDial" },
    { id: 9, title: "OLXLayout", url: "OLXLayout" },
    { id: 10, title: "CashifyLayout", url: "CashifyLayout" },
    { id: 11, title: "MyntraLayout", url: "MyntraLayout" },
    { id: 12, title: "ModelViewer", url: "ModelViewer" },
    { id: 13, title: "GLTFModel", url: "GLTFModel" },
    { id: 14, title: "ProgramizEditor", url: "ProgramizEditor" },
    { id: 15, title: "BlogPage", url: "BlogPage" },
    { id: 16, title: "DoctorProfileManager", url: "DoctorProfileManager" },
    { id: 16, title: "WeddingInvitationGenerator", url: "WeddingInvitationGenerator" },
    { id: 17, title: "ResumeGenerator", url: "ResumeGenerator" },
    { id: 18, title: "BlogCreator", url: "BlogCreator" },
    { id: 19, title: "WeddingAlbumGenerator", url: "WeddingAlbumGenerator" },
    { id: 20, title: "KankotriGenerator", url: "KankotriGenerator" },
    { id: 21, title: "WeddingCardGenerator", url: "WeddingCardGenerator" },
    { id: 22, title: "VideoBackgroundSite", url: "VideoBackgroundSite" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
        My Projects
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {myproject.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/${item.url}`)}
            className="cursor-pointer bg-white shadow-md rounded-xl p-6 
                       hover:shadow-xl hover:-translate-y-1 transition 
                       border border-gray-200 group"
          >
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
              {item.title}
            </h2>

            <p className="mt-2 text-gray-500 text-sm">
              {item.url.replace("-", " ").toUpperCase()}
            </p>

            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm
                           group-hover:bg-blue-700 transition"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
