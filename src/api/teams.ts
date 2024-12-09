"use client";

import axios from "axios";

export async function getTeams() {
  const baseUrl = "https://randomuser.me";//sync
  const getTeamsEndpoint = `${baseUrl}/api/?results=5`;//sync
  const res = await axios.get(getTeamsEndpoint);//async

  const teams = res.data.results.map((item: any) => {
    return {
      id: item.id.value,
      image: item.picture.large,
      name: `${item.name.first} ${item.name.last}`,
      email: item.email,
      phone: item.phone,
    };
  });

  return teams;
}
