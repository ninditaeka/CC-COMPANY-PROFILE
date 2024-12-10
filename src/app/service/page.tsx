import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Avatar, Blockquote, Card } from "flowbite-react";

export default function Service() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <h1 className="flex text-3xl font-bold mt-2 justify-center">
        Product and Services
      </h1>
      <div className="flex md:px-60  px-4 flex-col">
        <h1 className="flex text-xl font-bold mt-10 justify-left " id="geo">
          Geospatial Analysis and Data Management
        </h1>
        <p className="flex text-base mt-4 text-justify flex-col">
          <b>Geospatial Analysis:</b>At Digital World Company, we excel in
          geospatial analysis by transforming raw geospatial data into
          meaningful insights. Our expertise spans a wide range of applications,
          including land use and cover change, environmental monitoring, urban
          planning, and resource management. We utilize advanced techniques and
          tools to analyze spatial and temporal patterns, providing valuable
          information that supports our clients` decision-making processes. By
          leveraging sophisticated algorithms and cutting-edge technology, we
          deliver precise and actionable insights that enable our clients to
          understand and visualize complex geospatial phenomena. Our
          comprehensive geospatial analysis services help organizations make
          informed decisions, optimize resource allocation, and effectively plan
          for the future.
        </p>
        <p className="flex text-base mt-2 text-justify flex-col">
          <b>Data Management:</b>Our data management services are designed to
          ensure the accuracy, integrity, and accessibility of geospatial data.
          We implement robust data management systems that facilitate efficient
          data collection, storage, maintenance, and integration. Our team is
          skilled in data cleaning, processing, and validation, adhering to the
          highest standards of data quality. Additionally, we provide solutions
          for data security, backup, and recovery, ensuring that our clients`
          valuable geospatial information is safeguarded against any potential
          risks. Our modern data management practices enable seamless data
          sharing and collaboration, enhancing the overall efficiency and
          effectiveness of geospatial projects. We also offer customized data
          management solutions tailored to meet the specific needs of our
          clients, ensuring that their data management processes are streamlined
          and optimized. These combined capabilities in geospatial analysis and
          data management empower our clients to make well-informed decisions
          based on reliable and comprehensive geospatial data. By providing
          accurate, timely, and actionable insights, we help organizations
          achieve their strategic goals and drive innovation in their respective
          fields. Our commitment to excellence in geospatial analysis and data
          management ensures that our clients have the tools and information
          they need to succeed in an increasingly data-driven world.
        </p>
        <div className="flex md:flex-row flex-col mt-6 justify-center gap-12">
          {" "}
          <Card className="md:w-96 md:h-[240px]">
            <figure className="mx-auto max-w-screen-md text-center">
              <Blockquote>
                <p className="text-l font-medium italic text-gray-900 mt-4 dark:text-white">
                  Digital World Company Geospatial Analysis and Data
                  Management services have been transformative, providing
                  precise insights and robust data management that optimized our
                  operations
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Avatar rounded size="xs" img="/14.jpg" alt="Johan" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    Johan brug
                  </cite>
                  <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    CEO at DearME
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
          <Card className="md:w-96 md:h-[240px]">
            <figure className="mx-auto max-w-screen-md text-center">
              <Blockquote>
                <p className="text-l font-medium italic text-gray-900 mt-4 dark:text-white">
                  Their expertise in geospatial analysis provided us with
                  detailed and accurate insights that significantly improved our
                  project outcomes. Highly recommended for their services
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Avatar rounded size="xs" img="/15.jpg" alt="Dany" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    Dany Young
                  </cite>
                  <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    CTO at Traveloka
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
        </div>

        <h1 className="flex text-xl font-bold mt-10 justify-left" id="remote">
          Remote Sensing and Visualization
        </h1>
        <p className="flex text-base mt-4 text-justify flex-col">
          Our Remote Sensing and Visualization services provide extensive
          capabilities through the use of satellite imagery analysis, advanced
          aerial photography, geospatial data integration with GIS, and 3D
          modeling. We offer tailored remote sensing solutions to meet the
          unique needs of each client, utilizing the latest technology to
          capture and analyze data with precision. Our real-time monitoring and
          alert systems enable continuous observation and immediate response to
          dynamic factors such as environmental changes and traffic patterns.
          Additionally, we excel in data processing and analytics, converting
          raw data into actionable insights that drive informed decision-making.
          Our cutting-edge visualization platforms transform static images into
          dynamic, interactive representations, enhancing understanding and
          communication. These comprehensive services empower clients across
          various sectors to optimize operations, drive innovation, and make
          well-informed decisions based on accurate and up-to-date geospatial
          data.
        </p>

        <div className="flex md:flex-row flex-col mt-6 justify-center gap-12">
          {" "}
          <Card className="md:w-96 md:h-[240px]">
            <figure className="mx-auto max-w-screen-md text-center">
              <Blockquote>
                <p className="text-l font-medium italic text-gray-900 mt-4 dark:text-white">
                  Digital World Company`s Remote Sensing and Visualization
                  services enhanced our project`s accuracy with detailed
                  insights and stunning visuals
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Avatar rounded size="xs" img="/16.jpg" alt="Moh" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    Moh Habibi
                  </cite>
                  <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    PM at Lippo
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
          <Card className="md:w-96 md:h-[240px]">
            <figure className="mx-auto max-w-screen-md text-center">
              <Blockquote>
                <p className="text-l font-medium italic text-gray-900 mt-4 dark:text-white">
                  The team`s expertise in remote sensing transformed our data
                  into clear, actionable insights. We highly recommend their
                  services for top-tier geospatial solutions
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Avatar rounded size="xs" img="/17.jpg" alt="Aini" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    Aini Jane
                  </cite>
                  <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    CTO at Booking.com
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
        </div>

        <h1 className="flex text-xl font-bold mt-10 justify-left" id="field">
          Field Data Collection and Real Time
        </h1>
        <p className="flex text-base mt-4 text-justify flex-col">
          Our Field Data Collection and Real-Time services are designed to
          provide accurate and precise data directly from the field using
          advanced tools and technologies. This includes deploying sensors,
          conducting surveys, and utilizing mobile data collection platforms to
          capture real-time information. Our experienced field engineers ensure
          that data is collected efficiently and accurately, adhering to the
          highest standards of quality and integrity. Our real-time services
          offer continuous monitoring and immediate data analysis, enabling
          clients to make timely and informed decisions. We provide real-time
          data reporting, alerts, and notifications to keep clients updated on
          critical changes and events. This capability is essential for
          applications such as environmental monitoring, infrastructure
          management, and emergency response, where timely information is
          crucial for effective action. Together, these services ensure that
          clients have access to reliable, up-to-date data, enhancing their
          ability to respond to dynamic situations and make data-driven
          decisions.
        </p>

        <div className="flex md:flex-row flex-col mt-6 justify-center gap-12">
          {" "}
          <Card className="md:w-96 md:h-[240px]">
            <figure className="mx-auto max-w-screen-md text-center">
              <Blockquote>
                <p className="text-l font-medium italic text-gray-900 mt-4 dark:text-white">
                  Their services have been instrumental in improving our
                  operational efficiency, ensuring that we have the critical
                  information we need to act swiftly and make well-informed
                  decisions
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Avatar rounded size="xs" img="/18.jpg" alt="Floury" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    Floury May
                  </cite>
                  <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    CTO Wilmar
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
          <Card className="md:w-96 md:h-[240px]">
            <figure className="mx-auto max-w-screen-md text-center">
              <Blockquote>
                <p className="text-l font-medium italic text-gray-900 mt-4 dark:text-white">
                  Their ability to gather accurate and precise data directly
                  from the field, combined with continuous monitoring and
                  immediate data analysis, has provided us with reliable,
                  up-to-date information.
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Avatar rounded size="xs" img="/19.jpg" alt="Victory" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    Victory Ang
                  </cite>
                  <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    PM at Scirlo
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
        </div>

        <h1 className="flex text-xl font-bold mt-10 justify-left" id="ai">
          AI-Powered Platform
        </h1>
        <p className="flex text-base mt-4 text-justify flex-col">
          Our AI-Powered Platform services utilize advanced artificial
          intelligence and machine learning to deliver exceptional geospatial
          data management. The platform offers intelligent data analysis,
          identifying patterns and trends swiftly and accurately. With
          predictive analytics, it forecasts future trends, aiding in planning
          and decision-making. Real-time data processing ensures clients have
          the most current information, crucial for applications like emergency
          response. The platform also automates routine tasks, saving time and
          reducing errors, while providing customizable solutions tailored to
          specific needs. Enhanced interactive visualizations transform data
          into intuitive maps and dashboards, and robust data security measures
          protect sensitive information. These features empower organizations to
          maximize their geospatial data`s potential, driving innovation and
          operational excellence.
        </p>

        <div className="flex md:flex-row flex-col mt-6 justify-center gap-12">
          {" "}
          <Card className="md:w-96 md:h-[240px]">
            <figure className="mx-auto max-w-screen-md text-center">
              <Blockquote>
                <p className="text-l font-medium italic text-gray-900 mt-4 dark:text-white">
                  The customizable, real-time processing and advanced
                  visualizations of Digital World Company`s AI-Powered Platform
                  have significantly improved our operations.
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Avatar rounded size="xs" img="/20.jpg" alt="Yak" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    Yake tale
                  </cite>
                  <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    PMO at Alibaba
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
          <Card className="md:w-96 md:h-[240px]">
            <figure className="mx-auto max-w-screen-md text-center">
              <Blockquote>
                <p className="text-l font-medium italic text-gray-900 mt-4 dark:text-white">
                  Digital World Company`s AI-Powered Platform provided us with
                  deeper insights and accurate forecasts, enhancing our
                  decision-making process become faster and point out
                </p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Avatar rounded size="xs" img="/21.jpg" alt="Rome" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    Rome Rar
                  </cite>
                  <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                    CEO at LakaLiku
                  </cite>
                </div>
              </figcaption>
            </figure>
          </Card>
        </div>

        <h1 className="flex text-xl mt-10 text-justify ">
          We are excited to offer you a special price on our services! This
          exclusive deal comes with a range of benefits designed to provide
          exceptional value and enhance your experience. Enjoy high-quality
          service at a reduced cost, with all the features and support you
          expect from us. Don`t miss out on this opportunity to maximize your
          investment while enjoying top-notch solutions tailored to your needs
        </h1>
        <div className=" flex justify-center gap-8 mt-4 ">
          <Card className="hover:border hover:border-blue-600">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
          </Card>
          <Card className="hover:border hover:border-blue-600">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              $1099
            </span>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
