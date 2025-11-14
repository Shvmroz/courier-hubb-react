import { Icon } from "@iconify/react";
import Select from "../../components/ui/Select";
import { useState } from "react";
import { getTimeandDateAgo } from "../../utils/dateFormat";

const HomePage = () => {
  const [days, setDays] = useState("7");
  const [search, setSearch] = useState("");

  const optionsDays = [
    { value: "7", label: "Last 7 days" },
    { value: "15", label: "Last 15 days" },
    { value: "30", label: "Last 30 days" },
  ];

  const stats = [
    { label: "Active Jobs", value: "03", icon: "mdi:truck-outline" },
    { label: "Completed Jobs", value: "03", icon: "mdi:check-circle-outline" },
    { label: "New Bids", value: "03", icon: "mdi:clock-outline" },
    { label: "New Messages", value: "03", icon: "mdi:message-outline" },
  ];

  const jobs = [
    {
      id: 1,
      title: "Courier Job",
      location: "Greenwich",
      icon: "tabler:bike-filled",
    },
    {
      id: 2,
      title: "LGV Job",
      location: "Greenwich",
      icon: "mdi:truck-delivery",
    },
    { id: 3, title: "HGV Job", location: "Greenwich", icon: "mdi:truck" },
    {
      id: 4,
      title: "Recovery Trucks",
      location: "Greenwich",
      icon: "mdi:tow-truck",
    },
    {
      id: 5,
      title: "Household Removals",
      location: "Greenwich",
      icon: "mdi:trolley",
    },
    {
      id: 6,
      title: "Waste Manger",
      location: "Greenwich",
      icon: "mdi:trash-can",
    },
  ];

  const messages = [
    {
      id: 1,
      name: "Doris B",
      message: "Hi, how are you?",
      time: new Date(Date.now() - 1 * 3600 * 1000).toISOString(), // 1 hr ago
      unread: 2,
      avatar:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Todd S. Ertel",
      message: "Hi, how are you?",
      time: new Date(Date.now() - 3 * 3600 * 1000).toISOString(), // 3 hr ago
      unread: 9,
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Abigail Baxter",
      message: "Hi, how are you?",
      time: new Date(Date.now() - 10 * 3600 * 1000).toISOString(), // 10 hr ago
      avatar:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Doris B",
      message: "Hi, how are you?",
      time: new Date(Date.now() - 1 * 24 * 3600 * 1000).toISOString(), // 1 day ago
      unread: 4,
      avatar:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Todd S. Ertel",
      message: "Hi, how are you?",
      time: new Date(Date.now() - 4 * 24 * 3600 * 1000).toISOString(), // 4 days ago
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Abigail Baxter",
      message: "Hi, how are you?",
      time: new Date(Date.now() - 10 * 24 * 3600 * 1000).toISOString(), // 10 days ago → full date
      avatar:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Doris B",
      message: "Hi, how are you?",
      time: new Date(Date.now() - 20 * 24 * 3600 * 1000).toISOString(), // 20 days ago → full date
      avatar:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "Todd S. Ertel",
      message: "Hi, how are you?",
      time: new Date(Date.now() - 40 * 24 * 3600 * 1000).toISOString(), // 40 days ago → full date
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 9,
      name: "Abigail Baxter",
      message: "Hi, how are you?",
      time: new Date(Date.now() - 60 * 24 * 3600 * 1000).toISOString(), // 60 days ago → full date
      avatar:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=50&h=50&fit=crop&crop=face",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 p-1 gap-4">
        {/* Left text */}
        <div className="text-[18px] text-[#180525] font-semibold">
          Find drivers, post jobs, and get things moving.
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-[80vh]">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-full h-12 px-4 pr-12 bg-gray-50 border border-gray-200 rounded-lg
            focus:outline-none focus:border-primary-dark focus:ring-1 focus:ring-primary-dark
            placeholder-gray-400 text-gray-700 transition-all duration-200
          "
          />
          <Icon
            icon="mynaui:search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"
          />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative bg-[#080808] shadow-[0_4px_4px_0_#b0b0b0] text-white p-6 sm:p-8 rounded-2xl mb-8 overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-md sm:text-lg md:text-2xl font-bold leading-tight mb-3 md:mb-4">
            Need to send something?{" "}
            <span className="block sm:inline">
              Post your <br /> first job for{" "}
              <span className="text-primary">FREE!</span>
            </span>
          </h1>
        </div>

        {/* Right Bike Image */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 md:right-8 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-62 lg:h-62">
          <img
            src="/bike.png"
            alt="Delivery bike illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2 space-y-4">
          {/* Quick Stats */}
          <div className="bg-[#F3F3F3] rounded-2xl p-5 ">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Quick Stats</h2>
              <Select
                options={optionsDays}
                value={days}
                onChange={setDays}
                className=" bg-white rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#212121] text-white rounded-xl p-4 flex items-center space-x-2"
                >
                  {/* Icon with white rounded border */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-gray-500">
                    <Icon icon={item.icon} className="w-4 h-4 text-white" />
                  </div>

                  {/* Label and Value */}
                  <div className="flex flex-col">
                    <p className="text-[13px] text-gray-300">{item.label}</p>
                    <h3 className="text-[13px] font-semibold">{item.value}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Posted Jobs */}
          <div className="bg-[#F3F3F3] rounded-2xl p-5">
            <h2 className="text-lg font-bold mb-4 text-gray-900">
              Posted Jobs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="flex items-center justify-between p-4 bg-white rounded-xl transition border-l-[6px] border-primary h-[130px]"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#212121] flex items-center justify-center text-yellow-300 text-lg">
                      <Icon icon={job.icon} className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{job.title}</p>
                      <span className="text-sm text-gray-500 flex w-[90%] ">
                        <Icon
                          icon="famicons:location"
                          className="w-4 h-4 mr-1 mt-0.5 text-[#212121] flex-shrink-0"
                        />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#212121] flex items-center justify-center hover:bg-slate-700  cursor-pointer ">
                    <Icon
                      icon="majesticons:chevron-right"
                      className="w-8 h-8 text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Total Spend */}
          <div className="bg-[#F3F3F3] rounded-2xl p-5">
            <div className="flex items-center justify-between ">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Total Spend</h2>
                <p className="text-sm text-gray-900 font-medium ">
                  On Completed Jobs
                </p>
              </div>

              <div className="text-lg font-bold text-gray-900">$250.00</div>
            </div>

            <div className="border-t border-gray-300 my-3" />

            <div className="space-y-2 text-sm text-gray-900 font-medium ">
              <div className="flex justify-between">
                <span>This Month</span>
                <span>$120</span>
              </div>
              <div className="border-t border-gray-300 my-3" />

              <div className="flex justify-between">
                <span>Last Month</span>
                <span>$90</span>
              </div>
              <div className="border-t border-gray-300 my-3" />

              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>$250</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-[#F3F3F3] rounded-2xl p-5 h-[65.2vh] flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
              <button className="text-md text-[#485470] font-semibold bg-[#D3DAEA] hover:bg-[#c0c7d6] px-4 py-[6px] rounded-lg">
                See All
              </button>
            </div>

            {/* Scrollable  */}
            <div className="flex-1 overflow-y-auto space-y-4 pe-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-primary-dark cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={msg.avatar}
                      alt={msg.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{msg.name}</p>
                      <p className="text-sm text-gray-500">{msg.message}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-xs text-gray-400">
                      {getTimeandDateAgo(msg.time)}
                    </p>
                    {msg.unread > 1 && (
                      <span className="mt-1 bg-[#212121] text-white text-[9px] font-semibold h-4 w-4 flex items-center justify-center rounded-full">
                        {msg.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
