import React from "react";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const navigate = useNavigate();

  const dummyData = [
    { id: 1, type: "Suspicious Process", ppid: 4, name: "smss.exe", handles: 29, path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe" },
    { id: 2, type: "Suspicious Process", ppid: 324, name: "csrss.exe", handles: 601, path: "\\Device\\HarddiskVolume2\\Windows\\System32\\csrss.exe" },
    { id: 3, type: "Suspicious Process", ppid: 324, name: "wininit.exe", handles: 76, path: "\\Device\\HarddiskVolume2\\Windows\\System32\\wininit.exe" },
    { id: 4, type: "Suspicious Process", ppid: 472, name: "svchost.exe", handles: 4887, path: "\\Device\\HarddiskVolume2\\Windows\\System32\\svchost.exe" },
    { id: 5, type: "Suspicious Process", ppid: 472, name: "svchost.exe", handles: 978, path: "\\Device\\HarddiskVolume2\\Windows\\System32\\svchost.exe" },
    { id: 6, type: "Suspicious Process", ppid: 472, name: "DictUpdater.ex", handles: 91, path: "\\Device\\HarddiskVolume2\\Program" },
    { id: 7, type: "Suspicious Process", ppid: 472, name: "SearchIndexer.", handles: 567, path: "\\Device\\HarddiskVolume2\\Windows\\System32\\SearchIndexer.exe" },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-10">
      <h1 className="text-5xl font-bold text-white mb-6">Results</h1>
      <div className="bg-white p-6 shadow-md rounded-lg w-3/4">
        <div className="border p-4 rounded-md mb-4">
          <p><strong>Dump Name:</strong> memdump_win7_54.raw</p>
          <p><strong>Size:</strong> 1.00 GB</p>
        </div>
        <h2 className="text-xl font-semibold mb-2">Indicators of Compromise (IOCs)</h2>
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">IOC Type</th>
              <th className="border border-gray-300 p-2">PPID</th>
              <th className="border border-gray-300 p-2">Process Name</th>
              <th className="border border-gray-300 p-2">Handles</th>
              <th className="border border-gray-300 p-2">Executable Path</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((process) => (
              <tr key={process.id} className="border border-gray-300">
                <td className="border border-gray-300 p-2">{process.type}</td>
                <td className="border border-gray-300 p-2">{process.ppid}</td>
                <td className="border border-gray-300 p-2">{process.name}</td>
                <td className="border border-gray-300 p-2">{process.handles}</td>
                <td className="border border-gray-300 p-2">{process.path}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button 
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
