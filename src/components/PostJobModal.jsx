import React, { useState } from "react";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import { Input } from "./ui/Input";
import Select from "./ui/Select";
import { Icon } from "@iconify/react";

const PostJobModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("driver");
  const [selectedDriverType, setSelectedDriverType] = useState("");
  const [formData, setFormData] = useState({});

  const driverOptions = [
    { value: "courier", label: "Courier Driver" },
    { value: "lgv", label: "LGV" },
    { value: "hgv", label: "HGV" },
    { value: "recovery", label: "Recovery Trucks" },
    { value: "household", label: "Household Removals" },
  ];

  const packageTypeOptions = [
    { value: "documents", label: "Documents" },
    { value: "small-parcel", label: "Small Parcel" },
    { value: "medium-parcel", label: "Medium Parcel" },
    { value: "large-parcel", label: "Large Parcel" },
  ];

  const vehicleSizeOptions = [
    { value: "small", label: "Small (Up to 3.5 tons)" },
    { value: "medium", label: "Medium (3.5-7.5 tons)" },
    { value: "large", label: "Large (7.5+ tons)" },
  ];

  const materialTypeOptions = [
    { value: "construction", label: "Construction Material" },
    { value: "household", label: "Household Items" },
    { value: "industrial", label: "Industrial Equipment" },
    { value: "other", label: "Other" },
  ];

  const vehicleTypeOptions = [
    { value: "car", label: "Car" },
    { value: "van", label: "Van" },
    { value: "truck", label: "Truck" },
    { value: "motorcycle", label: "Motorcycle" },
  ];

  const conditionOptions = [
    { value: "excellent", label: "Excellent" },
    { value: "good", label: "Good" },
    { value: "fair", label: "Fair" },
    { value: "poor", label: "Poor" },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDriverSelect = (driverType) => {
    setSelectedDriverType(driverType);
    setFormData({});
  };

  const handleSubmit = () => {
    console.log("Form submitted:", { selectedDriverType, formData });
    onClose();
  };

  const renderDriverForm = () => {
    if (!selectedDriverType) {
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
                <span className="font-medium text-gray-900">{option.label}</span>
                <Icon icon="majesticons:chevron-right" className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setSelectedDriverType("")}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon icon="majesticons:chevron-left" className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <Icon 
              icon={getDriverIcon(selectedDriverType)} 
              className="w-6 h-6 text-primary" 
            />
            <h3 className="text-lg font-semibold text-gray-900">
              {driverOptions.find(opt => opt.value === selectedDriverType)?.label}
            </h3>
          </div>
        </div>

        {renderFormFields()}
      </div>
    );
  };

  const getDriverIcon = (type) => {
    const icons = {
      courier: "tabler:bike-filled",
      lgv: "mdi:truck-delivery",
      hgv: "mdi:truck",
      recovery: "mdi:tow-truck",
      household: "mdi:trolley",
    };
    return icons[type] || "mdi:truck";
  };

  const renderFormFields = () => {
    switch (selectedDriverType) {
      case "courier":
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 mb-4">All Delivery Details</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Pickup Location"
                placeholder="Whitechapel, London"
                value={formData.pickupLocation || ""}
                onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Drop-off Location"
                placeholder="Wimbledon, London"
                value={formData.dropoffLocation || ""}
                onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Postcode"
                placeholder="SW19"
                value={formData.postcode || ""}
                onChange={(e) => handleInputChange("postcode", e.target.value)}
                fullWidth
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Package Type</label>
                <Select
                  options={packageTypeOptions}
                  value={formData.packageType || ""}
                  onChange={(value) => handleInputChange("packageType", value)}
                  placeholder="Documents"
                />
              </div>
              
              <Input
                label="Number of Packages"
                type="number"
                placeholder="10"
                value={formData.numberOfPackages || ""}
                onChange={(e) => handleInputChange("numberOfPackages", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Pickup Date"
                type="date"
                value={formData.pickupDate || ""}
                onChange={(e) => handleInputChange("pickupDate", e.target.value)}
                fullWidth
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Add notes (Optional)</label>
              <textarea
                placeholder="Add text here"
                value={formData.notes || ""}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                className="w-full h-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Picture</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                <Icon icon="mdi:cloud-upload" className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Upload Picture</p>
              </div>
            </div>
          </div>
        );

      case "lgv":
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 mb-4">All Delivery Details</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Pickup Location"
                placeholder="Whitechapel, London"
                value={formData.pickupLocation || ""}
                onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Drop-off Location"
                placeholder="Wimbledon, London"
                value={formData.dropoffLocation || ""}
                onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Postcode"
                placeholder="SW19"
                value={formData.postcode || ""}
                onChange={(e) => handleInputChange("postcode", e.target.value)}
                fullWidth
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of Goods</label>
                <Select
                  options={materialTypeOptions}
                  value={formData.typeOfGoods || ""}
                  onChange={(value) => handleInputChange("typeOfGoods", value)}
                  placeholder="Electronics"
                />
              </div>
              
              <Input
                label="Goods Weight"
                placeholder="5 kg"
                value={formData.goodsWeight || ""}
                onChange={(e) => handleInputChange("goodsWeight", e.target.value)}
                fullWidth
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Size Required</label>
                <Select
                  options={vehicleSizeOptions}
                  value={formData.vehicleSizeRequired || ""}
                  onChange={(value) => handleInputChange("vehicleSizeRequired", value)}
                  placeholder="Small (Up to 3.5 tons)"
                />
              </div>
              
              <Input
                label="Delivery Date"
                type="date"
                value={formData.deliveryDate || ""}
                onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Estimated Cost"
                placeholder="£ 50"
                value={formData.estimatedCost || ""}
                onChange={(e) => handleInputChange("estimatedCost", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Postcode"
                value={formData.postcodeSecond || ""}
                onChange={(e) => handleInputChange("postcodeSecond", e.target.value)}
                fullWidth
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of Goods</label>
                <Select
                  options={materialTypeOptions}
                  value={formData.typeOfGoodsSecond || ""}
                  onChange={(value) => handleInputChange("typeOfGoodsSecond", value)}
                  placeholder="Select type"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Add notes (Optional)</label>
              <textarea
                placeholder="Add text here"
                value={formData.notes || ""}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                className="w-full h-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Picture</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                <Icon icon="mdi:cloud-upload" className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Upload Picture</p>
              </div>
            </div>
          </div>
        );

      case "hgv":
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 mb-4">All Delivery Details</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Pickup Location"
                placeholder="Whitechapel, London"
                value={formData.pickupLocation || ""}
                onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Drop-off Location"
                placeholder="Wimbledon, London"
                value={formData.dropoffLocation || ""}
                onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Postcode"
                placeholder="SW19"
                value={formData.postcode || ""}
                onChange={(e) => handleInputChange("postcode", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Cargo Weight"
                placeholder="20 tons"
                value={formData.cargoWeight || ""}
                onChange={(e) => handleInputChange("cargoWeight", e.target.value)}
                fullWidth
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Material Type</label>
                <Select
                  options={materialTypeOptions}
                  value={formData.materialType || ""}
                  onChange={(value) => handleInputChange("materialType", value)}
                  placeholder="Construction Material"
                />
              </div>
              
              <Input
                label="Delivery Date"
                type="date"
                value={formData.deliveryDate || ""}
                onChange={(e) => handleInputChange("deliveryDate", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Delivery Date"
                type="date"
                value={formData.deliveryDateSecond || ""}
                onChange={(e) => handleInputChange("deliveryDateSecond", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Estimated Cost"
                placeholder="£ 200"
                value={formData.estimatedCost || ""}
                onChange={(e) => handleInputChange("estimatedCost", e.target.value)}
                fullWidth
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Add notes (Optional)</label>
              <textarea
                placeholder="Add text here"
                value={formData.notes || ""}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                className="w-full h-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Picture</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                <Icon icon="mdi:cloud-upload" className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Upload Picture</p>
              </div>
            </div>
          </div>
        );

      case "recovery":
        return (
          <div className="space-y-6">
            <h4 className="font-semibold text-gray-900 mb-4">All Delivery Details</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Pickup Location"
                placeholder="Oxford Street, London"
                value={formData.pickupLocation || ""}
                onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Drop-off Location"
                placeholder="Wimbledon, London"
                value={formData.dropoffLocation || ""}
                onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Postcode"
                placeholder="SW19"
                value={formData.postcode || ""}
                onChange={(e) => handleInputChange("postcode", e.target.value)}
                fullWidth
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                <Select
                  options={vehicleTypeOptions}
                  value={formData.vehicleType || ""}
                  onChange={(value) => handleInputChange("vehicleType", value)}
                  placeholder="Car"
                />
              </div>
              
              <Input
                label="Vehicle Model"
                value={formData.vehicleModel || ""}
                onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
                fullWidth
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                <Select
                  options={conditionOptions}
                  value={formData.condition || ""}
                  onChange={(value) => handleInputChange("condition", value)}
                  placeholder="Engine Broken"
                />
              </div>
              
              <Input
                label="Estimated Cost"
                placeholder="£ 50"
                value={formData.estimatedCost || ""}
                onChange={(e) => handleInputChange("estimatedCost", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Estimated Cost"
                placeholder="£ 50"
                value={formData.estimatedCostSecond || ""}
                onChange={(e) => handleInputChange("estimatedCostSecond", e.target.value)}
                fullWidth
              />
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Contact Info</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  placeholder="John"
                  value={formData.fullName || ""}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  fullWidth
                />
                
                <Input
                  label="Phone Number"
                  placeholder="+44 7911 123456"
                  value={formData.phoneNumber || ""}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  fullWidth
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Add notes (Optional)</label>
                <textarea
                  placeholder="Add text here"
                  value={formData.notes || ""}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  className="w-full h-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 resize-none"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Picture</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                <Icon icon="mdi:cloud-upload" className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Upload Picture</p>
              </div>
            </div>
          </div>
        );

      case "household":
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 mb-4">All Delivery Details</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Pickup Location"
                placeholder="Whitechapel, London"
                value={formData.pickupLocation || ""}
                onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Drop-off Location"
                placeholder="Wimbledon, London"
                value={formData.dropoffLocation || ""}
                onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Postcode"
                placeholder="SW19"
                value={formData.postcode || ""}
                onChange={(e) => handleInputChange("postcode", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Moving Date"
                type="date"
                value={formData.movingDate || ""}
                onChange={(e) => handleInputChange("movingDate", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Number of Rooms"
                type="number"
                placeholder="3"
                value={formData.numberOfRooms || ""}
                onChange={(e) => handleInputChange("numberOfRooms", e.target.value)}
                fullWidth
              />
              
              <Input
                label="Estimated Cost"
                placeholder="£ 300"
                value={formData.estimatedCost || ""}
                onChange={(e) => handleInputChange("estimatedCost", e.target.value)}
                fullWidth
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
              <textarea
                placeholder="Any special handling requirements..."
                value={formData.specialRequirements || ""}
                onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                className="w-full h-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Picture</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
                <Icon icon="mdi:cloud-upload" className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Upload Picture</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderWasteManager = () => {
    return (
      <div className="text-center py-8">
        <Icon icon="mdi:trash-can" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Waste Removal</h3>
        <p className="text-gray-600">Waste removal functionality coming soon</p>
      </div>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Job"
      size="xl"
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
        <div className="min-h-[400px]">
          {activeTab === "driver" ? renderDriverForm() : renderWasteManager()}
        </div>

        {/* Footer */}
        {activeTab === "driver" && selectedDriverType && (
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              size="large"
              className="px-8"
            >
              Post Job
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default PostJobModal;