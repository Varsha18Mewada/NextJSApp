"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { lineChartData, stagewiseData, towerwiseData } from "../data/chartData";

export default function ChartsPage() {
  return (
    <div className="min-h-screen p-6 bg-white space-y-10">
      <button className="text-blue-600 hover:underline">&larr; Back</button>

      <h2 className="text-xl font-semibold">Overall project completion %</h2>

      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="planned" stroke="#3b82f6" />
              <Line type="monotone" dataKey="actual" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Planned progress: 84.51%
          </span>
          <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Actual progress: 78.97%
          </span>

          <ResponsiveContainer width={200} height={200}>
            <BarChart
              data={[{ name: "Overall", planned: 84.51, actual: 78.97 }]}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="planned" fill="#3b82f6" />
              <Bar dataKey="actual" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h3 className="text-lg font-semibold">Planned Vs Actual (Stagewise)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={stagewiseData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="planned" fill="#3b82f6" />
          <Bar dataKey="actual" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>

      <h3 className="text-lg font-semibold">Planned Vs Actual (Towerwise)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={towerwiseData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="planned" fill="#3b82f6" />
          <Bar dataKey="actual" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
