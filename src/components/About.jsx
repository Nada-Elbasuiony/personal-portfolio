import { FaUser } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-purple-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 flex justify-center items-center gap-2">
          <FaUser className="text-purple-500 text-2xl" />
          About Me
        </h2>
        <p className="text-gray-700 text-lg leading-loose">
          I’m <strong>Nada Ashraf Ahmed</strong>, a passionate web developer and a senior student at the Faculty of Computers and Information – Damanhour University. 
          I have hands-on experience with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>TypeScript</strong>, <strong>Tailwind</strong>, <strong>Node.js</strong>, and <strong>Git</strong>. 
          I previously worked as an <strong>Instructor</strong> at <em>Be School</em>, where I shared my knowledge and gained valuable teaching experience. 
          I'm always eager to learn new technologies and build modern, user-friendly websites and applications.
        </p>
      </div>
    </section>
  );
}

export default About;
