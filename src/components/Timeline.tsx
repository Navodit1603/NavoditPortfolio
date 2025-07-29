import React from "react";
import TimelineItem from "./TimelineItem";

interface TimelineEntry {
  role: string;
  date: string;
  company: string;
  description: string;
}

interface TimelineProps {
  items: TimelineEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l-2 border-gray-300 ml-6">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
