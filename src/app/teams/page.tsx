"use client";
import { getTeams } from "@/api/teams";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Card } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Teams() {
  const members = [
    {
      id: "member1",
      image: "/9.jpg",
      name: "Fanya Freeze",
      email: "fany.freeze@gmail.com",
      phone: "081-234=987-678",
    },
    {
      id: "member2",
      image: "/10.jpg",
      name: "Sarah Tang",
      email: "sarah.ting@gmail.com",
      phone: "081-346-234-123",
    },
    {
      id: "member3",
      image: "/11.jpg",
      name: "Yaman Hadi",
      email: "yaman.hadi@gmail.com",
      phone: "082-109-502-345",
    },
    {
      id: "member4",
      image: "/12.jpg",
      name: "Mike Harmony",
      email: "mike.harmony@gmail.com",
      phone: "081-230-538-039",
    },
    {
      id: "member5",
      image: "/13.jpg",
      name: "Budi Jay",
      email: "budi.jay@gmail.com",
      phone: "081-324-345-000",
    },
  ];

  const [teams, setTeams] = useState([]);

  const handleGetTeams = async () => {
    const data = await getTeams();
    console.log(data);
    setTeams(data);
  };

  useEffect(() => {
    handleGetTeams();
  }, []);

  return (
    <div className="flex flex-col">
      <NavBar />
      <h1 className="flex text-3xl font-bold mt-2 justify-center">
        Our Main Teams
      </h1>
      <div className="flex md:flex-row px-4 flex-col justify-center md:gap-20 gap-4 mt-10">
        {teams &&
          teams.map((team: any) => (
            <Card key={team.id} className="mt-4 md:w-60">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <Image
                  alt="Bonnie image"
                  height="96"
                  src={team.image}
                  width="96"
                  className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {team.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {team.email}
                </span>
                <span className=" mt-4  text-xs text-gray-800d">
                  {team.phone}
                </span>
              </div>
            </Card>
          ))}
      </div>

      <Footer />
    </div>
  );
}
