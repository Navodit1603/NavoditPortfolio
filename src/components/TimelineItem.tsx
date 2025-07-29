import React from "react";
// import { Briefcase } from "lucide-react";

interface Props {
  role: string;
  date: string;
  company: string;
  description: string;
}

const TimelineItem: React.FC<Props> = ({ role, date, company, description }) => {
  return (
    <div className="mb-10 ml-6 flex items-start relative">
         <span className="absolute -left-8.25 top-2 w-4 h-4 bg-[#F8FCFA] rounded-full border-4 border-white"></span>
      {/* Content */}
      <div className="flex flex-col md:flex-row md:items-start md:space-x-10 w-full">
        <div className="w-full md:w-1/3 mb-2 md:mb-0">
          <h4 className="font-semibold text-[#F8FCFA]">{role}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="w-full md:w-2/3">
          <h5 className="text-lg font-bold text-cyan-600">{company}</h5>
          <p className="text-[#F8FCFA] mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
