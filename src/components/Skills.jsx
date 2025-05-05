function Skills() {
    const skills = [
      "HTML", "CSS", "JavaScript", "React", "TypeScript",
      "Tailwind CSS", "Bootstrap", "Node.js", "Git"
    ];
  
    return (
      <section id="skills" className="bg-purple-50 py-10 px-4 text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map(skill => (
            <span key={skill} className="bg-white shadow-md px-6 py-2 rounded-full text-purple-600 font-semibold">
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }
  
  export default Skills;
  