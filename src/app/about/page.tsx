"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Card, Select } from "flowbite-react";
import Image from "next/image";

export default function About() {
  const teams = [
    {
      id: "team1",
      image: "/3.jpg",
      name: "Bonnie Green",
      title: "CEO",
      experience: "Ex-CEO Amazon",
    },
    {
      id: "team2",
      image: "/4.jpg",
      name: "Greddy Potter",
      title: "CTO",
      experience: "Ex-CTO Tokopedia",
    },
    {
      id: "team3",
      image: "/5.jpg",
      name: "Jane Marry",
      title: "CFO",
      experience: "Ex-CFO Microsoft",
    },
    {
      id: "team4",
      image: "/6.jpg",
      name: "Jordan John",
      title: "Geospatial Analyst",
      experience: "Ex- OpenStreetMap",
    },
    {
      id: "team5",
      image: "/7.jpg",
      name: "Michael Yard",
      title: "Software Developer",
      experience: "Ex-Grab",
    },
    {
      id: "team6",
      image: "/8.jpg",
      name: "Yani Flaw",
      title: "Software Developer",
      experience: "Ex-AWS",
    },
  ];
  return (
    <div className="flex flex-col">
      <NavBar />

      <h1 className="flex text-3xl font-bold mt-2 justify-center">
        Company History
      </h1>
      <div className="md:px-60 px-4  mt-4">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          History and Founding
        </h5>
        <p className="font-normal text-gray-700 mt-4 dark:text-gray-400 text-justify">
          Founded in 2019, Digital World Company emerged with the ambition to
          revolutionize the digital mapping industry. Recognizing the growing
          need for precise and actionable geospatial insights, we set out to
          provide top-notch mapping solutions that empower businesses and
          individuals alike.The company was established by a group of geospatial
          enthusiasts who shared a passion for innovation and a deep
          understanding of the potential of geospatial data. Combining their
          expertise in geospatial science, data analysis, and software
          development, they laid the foundation for a company that would become
          a trusted leader in the digital mapping field.
        </p>
        <h5 className="text-xl font-bold tracking-tight mt-6 text-gray-900 dark:text-white">
          Milestone
        </h5>
        <div className="font-normal text-gray-700 mt-4 dark:text-gray-400 text-justify">
          <p>
            <b>2019</b>: Digital World Company was officially launched, offering
            initial mapping solutions and services.
          </p>
          <p>
            {" "}
            <b>2020</b>: Introduced our first proprietary mapping software,
            which gained widespread acclaim for its accuracy and user-friendly
            interface.
          </p>{" "}
          <p>
            <b>2021</b>: Expanded our services globally, opening offices in key
            markets to better serve our international clients.
          </p>
          <p>
            {" "}
            <b>2022</b>: Achieved a major technological breakthrough with the
            development of our AI-powered mapping platform, enhancing our
            capabilities in real-time data analysis and predictive analytics.{" "}
          </p>
          <b>2023</b>: Recognized as an industry leader, receiving prestigious
          awards for innovation and excellence in geospatial solutions. Through
          dedication to innovation, quality, and customer satisfaction, Digital
          World Company has grown from a small team of visionaries to an
          industry leader, continuously pushing the boundaries of what is
          possible in the realm of digital mapping.
        </div>
        <div className="flex justify-center">
          <img
            className=" flex h-[450px] w-[450]"
            src="/milestone.png"
            alt="milestone"
          />
        </div>
        <h5 className="text-xl font-bold tracking-tight mt-6 text-gray-900 dark:text-white">
          Our Teams
        </h5>
        <div className="flex md:flex-row flex-col justify-center md:gap-20 gap-4">
          {teams &&
            teams.map((team: any) => (
              <Card key={team.id} className="max-w-sm mt-4">
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex  flex-col  items-center pb-10">
                  <Image
                    alt={team.image}
                    height="96"
                    src={team.image}
                    width="96"
                    className="mb-3 rounded-full shadow-lg"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {team.name}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {team.title}
                  </span>
                  <span className=" mt-4  text-xs text-gray-800d">
                    {team.experience}
                  </span>
                </div>
              </Card>
            ))}
        </div>

        <h5 className="text-xl font-bold tracking-tight text-gray-900 mt-6 dark:text-white">
          Culture
        </h5>
        <p className="font-normal text-gray-700 mt-4 dark:text-gray-400 text-justify">
          At Digital World Company, we foster a culture of innovation,
          collaboration, and continuous improvement. Our team thrives in an
          environment where creativity is encouraged, and conventional
          approaches are constantly challenged. We believe that diversity of
          thought and background leads to the most groundbreaking ideas and
          solutions. Professional development is a cornerstone of our culture;
          we provide numerous opportunities for learning and growth, ensuring
          that our team members stay at the forefront of technological
          advancements. Inclusivity is a fundamental principle at our company—we
          strive to create a supportive and welcoming atmosphere where everyone
          feels valued and empowered to contribute their unique perspectives.
          Teamwork and open communication are integral to our success; we
          encourage cross-departmental collaboration and the sharing of
          knowledge and expertise. Our commitment to excellence drives us to
          continuously seek new ways to improve our services and deliver
          exceptional value to our clients. At Digital World Company, we are not
          just a workplace—we are a community dedicated to shaping the future of
          digital mapping and making a positive impact on the world.
        </p>
      </div>
      <Footer />
    </div>
  );
}
