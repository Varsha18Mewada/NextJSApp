"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import projects from "../data/projects";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = (projectId) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full border px-4 py-2 rounded-md shadow-sm"
      />
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((project) => (
          <div
            key={project.id}
            onClick={() => handleClick(project.id)}
            className="bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer"
          >
            <div className="aspect-[16/9] bg-gray-200 rounded-md mb-3">
              <img
                src={project.images[0]}
                alt="Project"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-md font-semibold truncate">
                {project.title}
              </h2>
              <span className="text-xs text-gray-500 flex">
                <MapPinIcon
                  className="w-4 h-4 text-red-600"
                />
                {project.location}
              </span>
            </div>
            <div className="text-sm text-gray-700 mb-1">
              Orders: <span className="font-medium">{project.orders}</span>
            </div>
            <div className="text-sm text-gray-500 mb-3">
              Last Order: {project.lastOrder}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs text-center">
              <Stat label="Maps" value={project.stats.maps} />
              <Stat label="Images" value={project.stats.images} />
              <Stat label="Panos" value={project.stats.panos} />
              <Stat label="Virtual Tours" value={project.stats.virtualTours} />
              <Stat label="Videos" value={project.stats.videos} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-gray-100 rounded-md p-2">
      <div className="font-semibold">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}
