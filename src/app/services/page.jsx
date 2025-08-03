import Link from "next/link";
import React from "react";

export default function Services() {
  const servicePackages = [
    {
      _id: "1",
      service_name: "Web Design",
      service_image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      service_description:
        "Modern and responsive web design tailored to your brand.",
    },
    {
      _id: "2",
      service_name: "Mobile App Development",
      service_image:
        "https://images.unsplash.com/photo-1558888403-c05b14e86f2d",
      service_description:
        "Custom mobile applications for iOS and Android platforms.",
    },
    {
      _id: "3",
      service_name: "SEO Optimization",
      service_image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
      service_description:
        "Improve your search rankings and drive organic traffic.",
    },
    {
      _id: "4",
      service_name: "Social Media Management",
      service_image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      service_description:
        "Grow your audience and engagement with professional social media strategies.",
    },
    {
      _id: "5",
      service_name: "E-commerce Solutions",
      service_image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      service_description:
        "Launch and manage your online store with ease and flexibility.",
    },
    {
      _id: "6",
      service_name: "Brand Identity Design",
      service_image:
        "https://images.unsplash.com/photo-1618477461663-5c329b1f2338",
      service_description: "Create a strong and memorable brand identity.",
    },
    {
      _id: "7",
      service_name: "Content Writing",
      service_image:
        "https://images.unsplash.com/photo-1581091012184-5c1dbaf7f6b1",
      service_description:
        "Professional content that speaks your brand’s voice.",
    },
    {
      _id: "8",
      service_name: "UI/UX Design",
      service_image:
        "https://images.unsplash.com/photo-1603570419983-32320eaa6d9a",
      service_description:
        "Crafting intuitive user experiences and elegant interfaces.",
    },
    {
      _id: "9",
      service_name: "Digital Marketing",
      service_image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      service_description:
        "Strategies to amplify your reach and conversion rates online.",
    },
    {
      _id: "10",
      service_name: "Custom Software Development",
      service_image:
        "https://images.unsplash.com/photo-1531497865144-0464ef8fbf35",
      service_description:
        "Tailored software solutions to meet your business needs.",
    },
    {
      _id: "11",
      service_name: "IT Consulting",
      service_image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      service_description:
        "Expert advice to optimize your technology and operations.",
    },
    {
      _id: "12",
      service_name: "Cloud Services",
      service_image:
        "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9",
      service_description:
        "Reliable and scalable cloud infrastructure and migration services.",
    },
  ];

  return (
    <div className="p-6  lg:pt-155 grid gap-6 md:grid-cols-2  lg:grid-cols-4">
      {servicePackages.map((service) => (
        <div
          key={service._id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={service.service_image}
            alt={service.service_name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              {service.service_name}
            </h2>
            <p className="text-gray-600">{service.service_description}</p>
            <Link href={`/services/${service._id}`}>
              <button className="btn cursor-pointer bg-sky-400 p-2 rounded-2xl">
                details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
