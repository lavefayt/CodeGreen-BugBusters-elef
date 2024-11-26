import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center bg-adminlanding-bg min-h-screen">
      <div>
        <Header />
      </div>
      <div className="w-[50rem] h-[30rem] bg-gray-400 overflow-y-auto rounded-md scrollbar bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-hoverbutton">
      <div className="text-lef py-2 px-6 rounded-xl bg-clip-padding ">
        <div className=" overflow-y-auto scrollbar">
          <h1 className="text-textgreen font-syke-medium text-2xl mt-4">About Us</h1>

          <p className="text-white font-syke">
            Welcome to CodeGreen Gateway, the official parking management system
            for our school. We strive to maintain an organized, secure, <br />
            and efficient parking environment on campus, ensuring that both
            students and staff have access to safe parking spaces.
          </p>

          <h1 className="text-textgreen font-syke-medium text-2xl mt-4">
            Our Mission
          </h1>

          <p className="text-white font-syke">
            Our mission is to provide a streamlined, digital platform to manage
            parking within the campus. By creating a comprehensive system for
            tracking parking
            <br /> violations and organizing parking spaces, we aim to enhance
            the overall campus experience and ensure safety and convenience for
            all members of our community.
          </p>

          <h1 className="text-textgreen font-syke-medium  text-2xl mt-4">What We Do</h1>

          <p className="text-white font-syke">
            At CodeGreen Gateway, we offer a secure and easy-to-use platform for
            the administration to manage parking within the school campus. Our
            system allows <br /> administrators to track, report, and address
            parking violations, ensuring that parking regulations are enforced
            effectively. The website allows for:
          </p>

          <ul className="space-y-2 list-disc font-syke-light ml-12 mt-4 text-white">
            <li>
              <span className="text-textgreen font-bold mr-1">
                Parking Violation Reporting :
              </span>
              Administrators can input violators' details into the system via a
              simple form. This includes details such as the vehicle's license
              <br />
              plate number, the type of violation, and the action taken. This
              helps maintain a record of all violations and ensures that
              necessary actions are taken in a timely manner.
            </li>

            <li>
              <span className="text-textgreen font-bold mr-1">
                Violation Management :
              </span>
              The system categorizes and organizes the data on parking
              violations, making it easier
              <br />
              to review, analyze, and address issues in a systematic manner.
            </li>

            <li>
              <span className="text-textgreen font-bold mr-1">
                Efficiency & Transparency :
              </span>
              By moving the process of parking violation documentation online,
              we enhance transparency
              <br />
              and streamline the process, allowing for quick and accurate
              record-keeping.
            </li>
          </ul>

          <h1 className="text-textgreen text-2xl font-syke-medium mt-4">Our Goals</h1>
          <p className="text-white font-syke">
            As our school grows, so does the need for a smarter way to manage
            parking. With CodeGreen Gateway, we hope to:
          </p>
          <ul className="space-y-2 list-disc ml-12 mt-4 font-syke-light text-white">
            <li>Improve parking compliance and reduce violations</li>

            <li>Foster a safer parking environment for everyone on campus</li>

            <li>
              Provide an easy-to-access system for parking violation
              documentation
            </li>

            <li>
              Help maintain an organized, well-managed parking facility for
              students, faculty, and staff
            </li>
          </ul>
        </div>
      </div>
          </div>
    </div>
  );
};

export default AboutPage;
