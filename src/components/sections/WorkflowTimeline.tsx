import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { User, Tag, Code, Image, Truck, RefreshCcw } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

// Timeline data
const timelineSteps = [
  {
    title: "User Registration",
    description:
      "Users initiate their journey by registering on our portal, providing essential details.",
    icon: <User />,
    bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    title: "Product Listing Process",
    description:
      "Users create a post on their social media, mentioning our service to list products.",
    icon: <Tag />,
    bgColor: "bg-gradient-to-r from-orange-500 to-orange-700",
  },
  {
    title: "Webhook Activation",
    description:
      "Social media mentions trigger a webhook, connecting the platform with our server.",
    icon: <Code />,
    bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    title: "Content Retrieval",
    description:
      "We retrieve posts, fetching multimedia, captions, and hashtags for processing.",
    icon: <Image />,
    bgColor: "bg-gradient-to-r from-orange-500 to-orange-700",
  },
  {
    title: "Data Processing",
    description:
      "AI models analyze content to enhance product descriptions and metadata.",
    icon: <Truck />,
    bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    title: "Amazon Listing",
    description:
      "The system automates Amazon listing creation, including images and attributes.",
    icon: <Image />,
    bgColor: "bg-gradient-to-r from-orange-500 to-orange-700",
  },
  {
    title: "Periodic Review",
    description:
      "CRON jobs gather metrics and refine marketing strategies over time.",
    icon: <RefreshCcw />,
    bgColor: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
];

export default function WorkflowTimeline() {
  const controls = useAnimation();

  // Parallax effect handler
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    controls.start({
      y: scrollPosition / 10,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full py-20">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-transparent to-orange-200 opacity-30 pointer-events-none z-0"></div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-16 z-10 relative">
        Workflow Of Our Solution
      </h2>

      {/* Timeline */}
      <VerticalTimeline lineColor={"#0f2a54"} animate={true}>
        {timelineSteps.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "linear-gradient(135deg, #ffffff, #f3f6ff)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              borderRadius: "16px",
              position: "relative",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #0461cb",
            }}
            dateClassName="text-blue-700 text-sm font-semibold"
            iconStyle={{
              background: index % 2 === 0 ? "#0461cb" : "#f97316",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
              fontSize: "20px",
            }}
            icon={
              <div className="flex justify-center items-center h-full">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`text-white mt-3 rounded-full ${
                    index % 2 === 0 ? "bg-blue-500" : "bg-orange-500"
                  }`}
                >
                  {step.icon}
                </motion.div>
              </div>
            }
            visible={false}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-300 shadow-xl backdrop-blur-md backdrop-brightness-110 overflow-hidden"
              style={{
                transform: `translateY(${index % 2 === 0 ? 20 : -20}px)`,
              }}
            >
              {/* Icon Area */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-xl flex items-center justify-center -mt-6"
                style={{
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`text-white text-2xl p-3 rounded-full ${
                    index % 2 === 0 ? "bg-blue-500" : "bg-orange-500"
                  }`}
                >
                  {step.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="pt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-lg">{step.description}</p>
              </div>

              {/* Additional parallax effect on background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-300 via-transparent to-transparent opacity-40"
                style={{
                  zIndex: -1,
                  transform: `translateY(${scrollY / 30}px)`,
                }}
              ></motion.div>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
