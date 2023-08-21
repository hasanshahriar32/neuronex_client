import { useState } from "react";

const Team = () => {
  const people = [
    {
      firstname: "Shahriar",
      lastname: "Hasan",
      role: "Project Lead, Developer",
      picture:
        "https://media.licdn.com/dms/image/C4D03AQGQ5Ea1MQ1XHw/profile-displayphoto-shrink_800_800/0/1630823098356?e=2147483647&v=beta&t=wSIG5g0V1ddOzDRArQEEuJg2T5clxXXbMbqnHlivGJs",
      description:
        "A full-stack developer who focuses on writing clean, standard code that adheres to best practices, and who is also a lifelong learner who is continually investigating new technologies and solutions to different programming challenges in order to advance.",
      facebookURL: "https://facebook.com/H4549",
      githubURL: "https://github.com/hasanshahriar32",
      linkedinURL: "https://www.linkedin.com/in/hasanshahriar32",
      youtubeURL: "https://www.youtube.com/channel/UCHehUx9eSXXKl3xAMXm0mbQ",
    },
    {
      firstname: "Md",
      lastname: "Shakeeb",
      role: "Web Developer",
      picture: "https://avatars.githubusercontent.com/u/74618922?v=4",
      description:
        "As a highly skilled and experienced front-end developer with over a year of professional expertise, my passion lies in coding, programming, continuous learning, and troubleshooting complex coding problems. I have a proven track record of successfully utilizing cutting-edge technologies",
      facebookURL: "https://www.facebook.com/info.mdshakeeb/",
      githubURL: "https://github.com/info-mdshakeeb",
      linkedinURL: "https://www.linkedin.com/in/mdshakeeb/",
      youtubeURL: "",
    },
    {
      firstname: "MST Sharmin",
      lastname: "Ara ",
      role: "Ai Data Analyst",
      picture:
        "https://i.ibb.co/b3NwYYb/356205988-950894832787233-1726184323226059799-n.jpg",
      description: "Student of HSTU.",
      facebookURL: "https://www.facebook.com/anilajannat.zabin",
      githubURL: "",
      linkedinURL: "",
      youtubeURL: "",
    },
    {
      firstname: "Abid",
      lastname: "Hasan ",
      role: "Ai Data Analyst, Graphic Designer",
      picture:
        "https://i.ibb.co/0ymKnVV/349108020-1493711468104483-6651199751524940996-n.jpg",
      description: `if(knowThyself==1) {
Console.WriteLine(new { Message = "obnoxious-unobtrusive-ambivert" }.Message);
}`,
      facebookURL: "https://www.facebook.com/abidhasan.rafi.10",
      githubURL: "",
      linkedinURL: "",
      youtubeURL: "",
    },
    {
      firstname: "Delower",
      lastname: "Hossain ",
      role: "Ai Data Analyst",
      picture:
        "https://i.ibb.co/FHyz31g/340649779-248172957626701-7055950563208393581-n.jpg",
      description:
        "Every time you give up somethig for the sake of Allah,he will keep replacing it with something better.",
      facebookURL: "https://www.facebook.com/delowerhossain.dipu",
      githubURL: "",
      linkedinURL: "",
      youtubeURL: "",
    },
  ];

  const [member, setMember] = useState(0);

  return (
    <div className="relative mx-auto py-10 w-full max-w-7xl bg-gray-50 text-gray-700">
      {/* :TITLE CONTAINER */}
      <div className="mb-8 flex justify-center items-center">
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        <h2 className="px-3 text-xl lg:text-3xl font-semibold uppercase">
          Our passionate team
        </h2>
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
      </div>

      <div className="mx-auto flex flex-col items-center justify-center px-4 w-full max-w-5xl sm:grid grid-cols-1 lg:grid-cols-2 gap-y-4 sm:gap-y-10">
        {/* :PICTURES CONTAINER */}
        <div className="col-span-full lg:col-span-1 flex flex-col sm:flex-row justify-center items-start">
          {/* ::Team members */}
          <ul className="mb-4 sm:mb-0 px-4 flex sm:flex-col justify-center items-center space-x-3 sm:space-x-0 sm:space-y-3">
            {people.map((person, index) => (
              <li
                key={person.lastname}
                className={`w-12 h-12 rounded-full overflow-hidden filter ${
                  index !== member
                    ? "saturate-0 hover:brightness-125"
                    : "saturate-100"
                }`}
              >
                <button
                  className="w-full h-full"
                  onClick={() => setMember(index)}
                >
                  <img src={person.picture} alt="" className="object-cover" />
                </button>
              </li>
            ))}
          </ul>
          {/* ::Picture selected team member */}
          <div className=" rounded mr-0 lg:mr-8 overflow-hidden">
            <img
              src={people[member].picture}
              alt=""
              className="w-[250px] h-[250px] sm:w-[300px]  sm:h-[300px]  object-cover"
            />
          </div>
        </div>

        {/* :DETAILS CONTAINER */}
        <div className="col-span-full lg:col-span-1 mx-0 sm:mx-auto lg:mx-0 max-w-lg flex flex-col justify-center space-y-4">
          {/* ::Role */}
          <span className="font-bold text-lg uppercase tracking-wider">
            {people[member].role}
          </span>
          {/* ::Name */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center flex-wrap flex-row gap-2">
            <span className="block">{people[member].firstname}</span>
            <span className="block">{people[member].lastname}</span>
          </h3>
          {/* ::Description */}
          <p className="py-2 text-sm text-justify text-base">
            {people[member].description}
          </p>
          {/* ::Socials */}
          <div className="mb-4 inline-flex space-x-4">
            {/* Facebook */}
            <a
              href={people[member].facebookURL}
              className={`text-gray-600 hover:text-red-600 ${
                !people[member].facebookURL && "hidden"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
              </svg>
            </a>
            {/* gitHub */}
            <a
              href={people[member].githubURL}
              className={`text-gray-600 hover:text-red-600 ${
                !people[member].githubURL && "hidden"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.303,3.438,9.8,8.205,11.385c0.6,0.111,0.82-0.261,0.82-0.577c0-0.285-0.011-1.039-0.016-2.037c-3.338,0.724-4.042-1.611-4.042-1.611c-0.546-1.387-1.333-1.758-1.333-1.758c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.084,1.838,1.236,1.838,1.236c1.07,1.834,2.809,1.305,3.495,0.998c0.108-0.776,0.419-1.305,0.762-1.605C8.98,20.695,5.74,19.7,5.74,14.1c0-1.547,0.551-2.811,1.455-3.805c-0.146-0.359-0.632-1.801,0.138-3.754c0,0,1.191-0.382,3.9,1.455c1.131-0.314,2.344-0.471,3.547-0.477c1.203,0.006,2.416,0.163,3.547,0.477c2.706-1.837,3.895-1.455,3.895-1.455c0.772,1.953,0.285,3.395,0.139,3.754c0.908,0.994,1.453,2.258,1.453,3.805c0,5.613-3.246,6.59-6.351,6.938c0.5,0.436,0.945,1.296,0.945,2.619c0,1.891-0.017,3.416-0.017,3.887c0,0.32,0.216,0.695,0.825,0.576C23.566,24.795,27,20.298,27,15C27,8.373,21.627,3,15,3z" />
              </svg>
            </a>
            {/* Linkedin */}
            <a
              href={people[member].linkedinURL}
              className={`text-gray-600 hover:text-red-600 ${
                !people[member].linkedinURL && "hidden"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
              </svg>
            </a>
            {/* Youtube */}
            <a
              href={people[member].youtubeURL}
              className={`text-gray-600 hover:text-red-600 ${
                !people[member].youtubeURL && "hidden"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
