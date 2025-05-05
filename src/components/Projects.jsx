function Projects() {
    const projects = [
      {
        title: "Personal Portfolio",
        description: "A personal website built using React, Tailwind CSS, and Git to showcase my skills and experience.",
        link: "https://github.com/Nada-Elbasuiony"
      },
      {
        title: "Simple Website with Git",
        description: "A practical project focused on learning and applying Git and GitHub by building a basic website.",
        link: "#" // You can update this later with the actual link
      }
    ];
  
    return (
      <section id="projects" className="py-10 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 underline hover:text-purple-800 transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  