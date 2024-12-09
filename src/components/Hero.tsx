import { Avatar, Blockquote, Card } from "flowbite-react";

export default function Hero() {
  const products: any = [
    {
      id: "product-1",
      image: "/geospatial.png",
      title: "Geospatial Analysis and Data Management",
      body: "Geospatial data easier to understand while maintaining security and accuracy through mapping and analysis. In planning, logistics,and other areas, we assist clients in making more informed decisions",
    },
    {
      id: "product-2",
      image: "/remote.jpg",
      title: "Remote Sensing and Visualization",
      body: "Providing satellite imagery and aerial photography. Our products include remote sensing software, and dynamic visualization Empower clients with accuration of geospatial data.",
    },
    {
      id: "product-3",
      image: "/lapangan.jpg",
      title: " Field Data Collection and Real Time",
      body: "Using sophisticated tools for efficient and effective data gathering. We provide advanced systems to track and analyze dynamic factors in real-time, ensuring accurate and timelyinsights for decision-making.",
    },
    {
      id: "product-4",
      image: "/AI.png",
      title: "AI-Powered Platform",
      body: "Using advanced AI to deliver precise geospatial insights, enhancing decision-making through real-time monitoring and predictive analytics.",
    },
  ];
  return (
    <div className=" flex flex-col w justify-between">
      <img
        width={1400}
        height={840}
        className=" rounded-l h-[680px] w-full object-cover"
        src="/map.jpg"
        alt="map company"
      />

      <div className="flex flex-col w-full absolute z-50 text-white mt-32 justify-center px-4 md:px-60">
        <h2 className="md:text-4xl  text-2xl font-bold ">
          Navigating the Future, Empowering Insights through Mapping
        </h2>
        <h2 className="text-xl">Mapping Excellence, Delivering Clarity</h2>
      </div>
      <div className=" md:px-60 px-4 w-full flex flex-col  mt-12 align-middle">
        <h1 className="flex text-3xl font-bold mt-5 justify-center">
          Company Overview
        </h1>
        <div className="flex flex-col mt-4 text-justify">
          <h2 className="">
            Founded in 2019, <b>Digital World Company</b> has quickly
            established itself as a trailblazer in digital mapping solutions,
            redefining how businesses and individuals harness the transformative
            power of geospatial insights. What began as a small group of
            passionate geospatial enthusiasts has evolved into a globally
            recognized enterprise, celebrated for its innovation, precision, and
            unwavering commitment to excellence. From the outset, Digital World
            Company has focused on bridging the gap between complex geospatial
            data and user-friendly applications.
          </h2>

          <h2 className=" text-xl font-bold mt-4"> Our Mission</h2>

          <p>
            At Digital World Company, we aim to revolutionize the way the world
            understands and interacts with geographic data. By providing
            precise, real-time, and actionable geospatial insights, we empower
            decision-makers across industries to make informed, impactful
            choices.
          </p>

          <h2 className=" text-xl font-bold mt-4"> Our Journey</h2>

          <p>
            Starting as a modest team united by a shared fascination for
            geospatial science, we have grown exponentially through unwavering
            dedication and a vision for excellence. From crafting basic mapping
            tools to developing advanced, AI-driven geospatial platforms, our
            journey is a testament to our relentless pursuit of progress.
          </p>

          <h2 className=" text-xl font-bold mt-4">Our Culture</h2>

          <p>
            At Digital World Company, our culture drives our success, fostering
            innovation, collaboration, and growth. We encourage bold ideas and
            creative problem-solving through innovation labs, brainstorming
            sessions, and knowledge-sharing workshops. Collaboration is at the
            heart of our approach, blending expertise from diverse departments
            to tackle challenges together. We value diversity and inclusion,
            creating an environment where voices from all backgrounds are
            respected and celebrated. Our commitment to professional growth is
            reflected in training programs, access to cutting-edge tools, and
            industry events.
          </p>

          <h2 className=" text-xl font-bold mt-4">Meet Our Teams</h2>

          <p>
            Our success is built on the dedication of our specialized teams. The
            Geospatial Science Team gathers and analyzes precise geographic
            data, while the Data Analysis Team transforms it into actionable
            insights. Driving innovation is our Research and Innovation Team,
            exploring new technologies to keep us at the forefront of the
            industry. Our Leadership Team provides guidance and vision,
            empowering every member to excel. Together, these teams make Digital
            World Company a leader in digital mapping solutions and a dynamic,
            inclusive workplace.
          </p>
        </div>

        <h1 className="flex text-3xl font-bold mt-12 justify-center">
          Product and Service
        </h1>
        <div className="flex md:flex-row flex-col mt-4 gap-12">
          {products &&
            products.map((product: any) => (
              <Card key={product.id}
                className="md:w-1/4"
                href="#"
                renderImage={() => (
                  <img
                    width={400}
                    height={500}
                    className=" rounded-t-md h-40 object-cover"
                    src={product.image}
                    alt="geospatial"
                  />
                )}
              >
                <div className="flex flex-col  h-full gap-4">
                  {" "}
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                  <p className="font-normal text-gray-700 text-justify dark:text-gray-400">
                    {product.body}
                  </p>
                </div>
              </Card>
            ))}
        </div>

        <h1 className="flex text-3xl font-bold mt-14 justify-center">
          Testimonials
        </h1>
        <div className="flex md:flex-row flex-col gap-4 mt-4 ">
          <figure className="mx-auto max-w-screen-md text-center">
            <Blockquote>
              <p className="font-medium italic text-gray-900 mt-4 dark:text-white">
                "Digital World Company's mapping services have revolutionized
                our decision-making with precise insights and innovative
                solutions. Highly recommended!"
              </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
              <Avatar rounded size="xs" img="/1.jpg" alt="profile picture1" />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Micheal Gough
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  CEO at Google
                </cite>
              </div>
            </figcaption>
          </figure>

          <figure className="mx-auto max-w-screen-md text-center">
            <Blockquote>
              <p className="font-medium italic text-gray-900 mt-4 dark:text-white">
                "Partnering with Digital Company has been transformative for our
                operations. Their precise mapping solutions and expert team have
                provided invaluable insights that have streamlined our projects
                and enhanced our strategic planning!"
              </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
              <Avatar rounded size="xs" img="/2.jpg" alt="profile picture1" />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Katty Peery
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  CEO at Meikarta
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
