import { useEffect } from "react";
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
    description: [
      "	Users initiate their journey by registering on our portal, providing essential details to create a unique account. This ensures a seamless user experience and allows for personalized interactions within our service.",
      "Once the user registers, we implement a verification process using a deep learning model designed to analyze data from the user’s social handles (with their consent). This model evaluates profile parameters, behavioral patterns and activity metrics to assess the likelihood of the account being genuine. By detecting potential indicators of fake or automated accounts, we can better ensure that our platform remains secure and authentic.",
    ],
    icon: <User />,
  },
  {
    title: "Product Listing Process",
    description: [
      "When a registered user wishes to list a new product, they simply create a post on their social media platform (e.g., Instagram) and mention our service's handle. This mention acts as a trigger for our automated system.",
    ],
    icon: <Tag />,
  },
  {
    title: "Webhook Activation",
    description: [
      "The mention of our service handle triggers a webhook—a real-time HTTP callback mechanism that communicates between the social media platform and our server. This event notifies our service that a new product post has been created.",
    ],
    icon: <Code />,
  },
  {
    title: "Content Retrieval",
    description: [
      "Our service then initiates a process to fetch the post along with its associated metadata, including multimedia, captions and hashtags. This data can be semi-structured or unstructured.",
    ],
    icon: <Image />,
  },
  {
    title: "Data Processing",
    description: [
      "The retrieved content undergoes multimodal analysis through advanced Large Language Models (LLMs) and Deep Learning algorithms.",
      "We utilize Natural Language Processing (NLP) techniques to analyze the text in the post, extracting relevant features such as product characteristics, benefits, and user sentiment.",
      "Simultaneously, we employ Computer Vision techniques to assess images, identifying product attributes and visual elements that enhance the description.",
    ],
    icon: <Truck />,
  },
  {
    title: "Amazon Listing",
    description: [
      "Upon generating the product description, our system automates the listing process on Amazon. This includes creating the product entry, uploading images, and filling in the necessary attributes based on the processed content, ensuring the product is live and available for purchase.",
      "After the product goes live, we collect customer feedback and use it to continuously improve our models, refining future content generation for enhanced accuracy and relevance.",
    ],
    icon: <Image />,
  },
  {
    title: "Periodic Review",
    description: [
      "On a periodic basis, managed by a CRON job, our system will review the social media listings to gather insights. This involves fetching relevant metrics, comments, and engagement data from the social media posts.",
      "○	The collected information will be analyzed to develop insights into customer perceptions and preferences, helping refine product descriptions and marketing strategies for the listed products.",
    ],
    icon: <RefreshCcw />,
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
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-16 z-10 relative uppercase">
        Workflow Of Our Solution
      </h2>

      {/* Timeline */}
      <VerticalTimeline lineColor={"#0f2a54"} animate={true}>
        {timelineSteps.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "transparent",
              padding: "0px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              borderRadius: "16px",
              position: "relative",
            }}
            contentArrowStyle={{
              borderRight:
                index % 2 === 0 ? "10px solid #0461cb" : "10px solid #f97316",
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
              initial={{
                opacity: 0,
                // x: index % 2 === 0 ? 100 : -100,
                visibility: "hidden",
              }}
              whileInView={{ visibility: "visible", x: 0, opacity: 1 }}
              exit={{
                // x: index % 2 === 0 ? 100 : -100,
                visibility: "hidden",
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="h-full relative p-10 rounded-2xl bg-gradient-to-br from-indigo-100 via-indigo-200 to-orange-300 shadow-xl backdrop-blur-md backdrop-brightness-110 overflow-hidden"
              style={{
                transform: `translateY(${index % 2 === 0 ? 20 : -20}px)`,
              }}
            >
              {/* Icon Area */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-xl flex items-center justify-center -mt-4"
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
              <div className="pt-12 pb-4">
                <h3 className="text-3xl text-center font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <ul className="text-gray-700 text-md italic list-disc text-justify">
                  {step.description.map((e, index) => (
                    <li key={index} className="py-1">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional parallax effect on background */}
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
