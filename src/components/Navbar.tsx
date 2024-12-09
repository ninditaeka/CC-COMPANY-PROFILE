"use client";

import {
  Dropdown,
  Navbar,

} from "flowbite-react";
import { IoIosSearch } from "react-icons/io";

export default function NavBar() {
  return (
    // <div className="md:px-96 flex flex-row w-full">
    <Navbar className="flex w-full justify-between">
      <Navbar.Brand href="/">
        <img
          className="md:w-28 w-14 md:h-28 h-14"
          src="/logo2.jpg"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex flex-col md:flex-row items-left md:items-center md:gap-6">
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>

          <Navbar.Link href="/about">About</Navbar.Link>

          {/* <Navbar.Link href="#"> */}
          <div className="py-2 md:px-0 px-3">
            <Dropdown href="/service" label="Product and Services" inline>
              {/* <NavbarCollapse className="flex flex-col"> */}
              <Dropdown.Item href="/service#geo">
                Geospatial Analysis and Data Management
              </Dropdown.Item>
              <Dropdown.Item href="/service#remote">
                Remote Sensing and Visualization
              </Dropdown.Item>
              <Dropdown.Item href="/service#field">
                Field Data Collection and Real-Time Monitoring
              </Dropdown.Item>
              <Dropdown.Item href="/service#ai">AI-Powered Platforms</Dropdown.Item>
              {/* </NavbarCollapse> */}
            </Dropdown>
          </div>
          {/* </Navbar.Link> */}

          <Navbar.Link href="/teams">Teams</Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
    // </div>
  );
}
