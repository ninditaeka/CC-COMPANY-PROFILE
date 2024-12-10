"use client";
import { getTeams } from "@/api/teams";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Card } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Teams() {

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
