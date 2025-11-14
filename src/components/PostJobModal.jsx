import React, { useState } from "react";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const PostJobModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("driver");
  const navigate = useNavigate();

  const driverOptions = [
    { value: "courier", label: "Courier Driver", icon: "tabler:bike-filled" },
    { value: "lgv", label: "LGV", icon: "mdi:truck-delivery" },
    { value: "hgv", label: "HGV", icon: "mdi:truck" },
    { value: "recovery", label: "Recovery Trucks", icon: "mdi:tow-truck" },
    { value: "household", label: "Household Removals", icon: "mdi:trolley" },
  ];

  const handleDriverSelect = (driverType) => {
    onClose();
    navigate(`/post-job?type=${driverType}`);
  };

  const handleWasteManagerSelect = () => {
    onClose();
    navigate("/post-job?type=waste");
  };

  const renderDriverOptions = () => {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Driver Type</h3>
        <div className="grid grid-cols-1 gap-3">
          {driverOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleDriverSelect(option.value)}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <Icon icon={option.icon} className="w-6 h-6 text-primary" />
                <span className="font-medium text-gray-900">{option.label}</span>
              </div>
              <Icon icon="majesticons:chevron-right" className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
        
        <div className="flex justify-center pt-4">
          <Button
            onClick={() => {/* Handle Done if needed */}}
            variant="contained"
            color="primary"
            size="large"
            className="px-12"
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
          onClick={handleWasteManagerSelect}
          variant="contained"
          color="primary"
          size="large"
        >
          Continue
        </Button>
      </div>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Job"
      size="md"
      hideFooter={true}
    >
      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("driver")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "driver"
                ? "bg-primary text-black"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Driver
          </button>
          <button
            onClick={() => setActiveTab("waste")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "waste"
                ? "bg-primary text-black"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Waste Manager
          </button>
        </div>

        {/* Content */}
        <div className="min-h-[300px]">
          {activeTab === "driver" ? renderDriverOptions() : renderWasteManager()}
        </div>
      </div>
    </Modal>
  );
};

export default PostJobModal;