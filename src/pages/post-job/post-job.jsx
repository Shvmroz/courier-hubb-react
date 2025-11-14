import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import { Icon } from '@iconify/react';

const PostJobPage = () => {
  const [searchParams] = useSearchParams();
  const jobType = searchParams.get('type');
  const [formData, setFormData] = useState({});

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
    { value: "electronics", label: "Electronics" },
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
    { value: "engine-broken", label: "Engine Broken" },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { jobType, formData });
    // Handle form submission
  };

  const getJobTitle = () => {
    switch (jobType) {
      case 'courier': return 'Courier Job';
      case 'lgv': return 'Book LGV Truck';
      case 'hgv': return 'Book HGV Service';
      case 'recovery': return 'Recovery Truck Service';
      case 'household': return 'Household Removals';
      case 'waste': return 'Waste Removal';
      default: return 'Post a Job';
    }
  };

  const getJobIcon = () => {
    switch (jobType) {
      case 'courier': return 'tabler:bike-filled';
      case 'lgv': return 'mdi:truck-delivery';
      case 'hgv': return 'mdi:truck';
      case 'recovery': return 'mdi:tow-truck';
      case 'household': return 'mdi:trolley';
      case 'waste': return 'mdi:trash-can';
      default: return 'mdi:plus';
    }
  };

  const renderCourierForm = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon icon="tabler:bike-filled" className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold text-gray-900">Courier Job</h2>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900">All Delivery Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Pickup location"
          placeholder="Whitechapel, London"
          value={formData.pickupLocation || ""}
          onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
          fullWidth
        />
        
        <Input
          label="Drop-off location"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Package type</label>
          <Select
            options={packageTypeOptions}
            value={formData.packageType || ""}
            onChange={(value) => handleInputChange("packageType", value)}
            placeholder="Documents"
          />
        </div>
        
        <Input
          label="Number of packages"
          type="number"
          placeholder="10"
          value={formData.numberOfPackages || ""}
          onChange={(e) => handleInputChange("numberOfPackages", e.target.value)}
          fullWidth
        />
        
        <Input
          label="Pickup date"
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

  const renderLGVForm = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon icon="mdi:truck-delivery" className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold text-gray-900">Book LGV Truck</h2>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900">All Delivery Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Pickup location"
          placeholder="Whitechapel, London"
          value={formData.pickupLocation || ""}
          onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
          fullWidth
        />
        
        <Input
          label="Drop-off location"
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

  const renderHGVForm = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon icon="mdi:truck" className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold text-gray-900">Book HGV Service</h2>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900">All Delivery Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Pickup location"
          placeholder="Whitechapel, London"
          value={formData.pickupLocation || ""}
          onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
          fullWidth
        />
        
        <Input
          label="Drop-off location"
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

  const renderRecoveryForm = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon icon="mdi:tow-truck" className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold text-gray-900">Recovery Truck Service</h2>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900">All Delivery Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Pickup location"
          placeholder="Oxford Street, London"
          value={formData.pickupLocation || ""}
          onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
          fullWidth
        />
        
        <Input
          label="Drop-off location"
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
        <h3 className="text-lg font-semibold text-gray-900">Contact Info</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

  const renderHouseholdForm = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon icon="mdi:trolley" className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold text-gray-900">Household Removals</h2>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900">All Delivery Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Pickup location"
          placeholder="Whitechapel, London"
          value={formData.pickupLocation || ""}
          onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
          fullWidth
        />
        
        <Input
          label="Drop-off location"
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

  const renderJobForm = () => {
    switch (jobType) {
      case 'courier':
        return renderCourierForm();
      case 'lgv':
        return renderLGVForm();
      case 'hgv':
        return renderHGVForm();
      case 'recovery':
        return renderRecoveryForm();
      case 'household':
        return renderHouseholdForm();
      case 'waste':
        return (
          <div className="text-center py-12">
            <Icon icon="mdi:trash-can" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Waste Removal</h2>
            <p className="text-gray-600">Waste removal functionality coming soon</p>
          </div>
        );
      default:
        return (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon="mdi:plus" className="w-10 h-10 text-gray-800" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Create New Job Posting</h2>
            <p className="text-gray-600 mb-8">
              Please select a job type from the sidebar to get started
            </p>
          </div>
        );
    }
  };

  if (!jobType) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text mb-2">Post a Job</h1>
          <p className="text-xl text-gray-600 font-normal">
            Create a new job posting to find drivers
          </p>
        </div>

        <div className="bg-white p-12 rounded-3xl shadow-sm text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon icon="mdi:plus" className="w-10 h-10 text-gray-800" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Create New Job Posting</h2>
          <p className="text-gray-600 mb-8">
            Click "Post a Job" in the sidebar to select a job type and get started
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text mb-2">{getJobTitle()}</h1>
        <p className="text-xl text-gray-600 font-normal">
          Fill out the details for your job posting
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm">
        <form onSubmit={handleSubmit}>
          {renderJobForm()}
          
          {jobType && jobType !== 'waste' && (
            <div className="flex justify-end pt-6 mt-8 border-t border-gray-200">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className="px-12"
              >
                Post Job
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostJobPage;