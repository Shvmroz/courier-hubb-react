import React, { useState } from "react";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const PostJobModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("driver");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const driverOptions = [
    { value: "courier", label: "Courier Driver", icon: "tabler:bike-filled" },
    { value: "lgv", label: "LGV", icon: "mdi:truck-delivery" },
    { value: "hgv", label: "HGV", icon: "mdi:truck" },
    { value: "recovery", label: "Recovery Trucks", icon: "mdi:tow-truck" },
    { value: "household", label: "Household Removals", icon: "mdi:trolley" },
  ];

  const handleDone = () => {
    if (activeTab === "driver" && selectedOption) {
      onClose();
      navigate(`/post-job?type=${selectedOption}`);
      setSelectedOption(""); // Reset selection
    } else if (activeTab === "waste") {
      onClose();
      navigate("/post-job?type=waste");
    }
  };

  const handleClose = () => {
    setSelectedOption(""); // Reset selection when closing
    onClose();
  };

  const renderDriverOptions = () => {
    return (
      <div className="space-y-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Driver</label>
          <div className="relative">
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full h-12 px-4 pr-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none text-gray-700"
            >
              <option value="">Select</option>
              {driverOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Icon 
              icon="mdi:chevron-down" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" 
            />
          </div>
        </div>

        {/* Show selected option with highlight */}
        {selectedOption && (
          <div className="space-y-2">
            {driverOptions.map((option) => (
              <div
                key={option.value}
                className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  selectedOption === option.value
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon icon={option.icon} className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">{option.label}</span>
                </div>
                {selectedOption === option.value && (
                  <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    544 Fill × 21
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        <div className="flex justify-center pt-6">
          <Button
            onClick={handleDone}
            variant="contained"
            color="primary"
            size="large"
            className="px-16"
            disabled={!selectedOption}
          >
            Done
          </Button>
        </div>
      </div>
    );
  };

  const renderWasteManager = () => {
    return (
      <div className="text-center py-8">
        <Icon icon="mdi:trash-can" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Waste Removal</h3>
        <p className="text-gray-600 mb-6">Waste removal functionality coming soon</p>
        <Button
          onClick={handleDone}
          variant="contained"
          color="primary"
          size="large"
          className="px-16"
        >
          Done
        </Button>
      </div>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Create Job"
      size="md"
      hideFooter={true}
    >
      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => {
              setActiveTab("driver");
              setSelectedOption("");
            }}
            className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "driver"
                ? "bg-primary text-black shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Driver
          </button>
          <button
            onClick={() => {
              setActiveTab("waste");
              setSelectedOption("");
            }}
            className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "waste"
                ? "bg-primary text-black shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Waste Manager
          </button>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {activeTab === "driver" ? renderDriverOptions() : renderWasteManager()}
        </div>
      </div>
    </Modal>
  );
};

export default PostJobModal;