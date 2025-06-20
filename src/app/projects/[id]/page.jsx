"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import projects from "../../data/projects";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [tab, setTab] = useState("images");

  if (!project) return <p>Project not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">{project.title}</h1>

        <p className="text-sm text-gray-600 mb-2 flex justify-center">
          Location:
          <MapPinIcon
            className="w-4 h-4 text-red-600 cursor-pointer"
            onClick={() => router.push("/map")}
          />
          {project.location}
        </p>
        <p className="text-sm text-gray-600 mb-4">Orders: {project.orders}</p>
      </div>

      <div className="flex space-x-4 mb-6 justify-center">
        <button
          onClick={() => setTab("images")}
          className={`px-4 py-2 rounded-md ${
            tab === "images" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Images
        </button>
        <button
          onClick={() => setTab("videos")}
          className={`px-4 py-2 rounded-md ${
            tab === "videos" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Videos
        </button>
      </div>

      {tab === "images" ? (
        <div className="grid grid-cols-1 gap-4">
          {project.images.length > 0 ? (
            project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Project ${i}`}
                className="w-full rounded-md shadow mb-4"
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      ) : (
        <div>
          {project.videos.length > 0 ? (
            project.videos.map((video, i) => (
              <video
                key={i}
                src={video}
                controls
                className="w-full rounded-md shadow mb-4"
              />
            ))
          ) : (
            <p>No videos available</p>
          )}
        </div>
      )}
    </div>
  );
}
