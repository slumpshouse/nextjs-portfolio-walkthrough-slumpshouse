import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with React and Node.js, featuring user authentication, shopping cart, and payment integration.",
      image: "bg-gradient-to-r from-blue-400 to-purple-600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      category: "Web App"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS, showcasing projects and skills with a modern design.",
      image: "bg-gradient-to-r from-green-400 to-blue-500",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      github: "#",
      demo: "#",
      category: "Website"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "bg-gradient-to-r from-purple-400 to-pink-500",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "#",
      demo: "#",
      category: "Web App"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather and forecasts for multiple cities with beautiful data visualizations.",
      image: "bg-gradient-to-r from-yellow-400 to-orange-500",
      technologies: ["JavaScript", "Chart.js", "Weather API"],
      github: "#",
      demo: "#",
      category: "Dashboard"
    },
    {
      title: "Mobile-First Blog",
      description: "A responsive blog platform optimized for mobile devices with content management and SEO optimization features.",
      image: "bg-gradient-to-r from-indigo-400 to-purple-500",
      technologies: ["React", "Gatsby", "GraphQL", "CMS"],
      github: "#",
      demo: "#",
      category: "Website"
    },
    {
      title: "Data Visualization Tool",
      description: "An interactive data visualization tool that transforms complex datasets into beautiful, interactive charts and graphs.",
      image: "bg-gradient-to-r from-teal-400 to-blue-500",
      technologies: ["D3.js", "React", "Python", "Flask"],
      github: "#",
      demo: "#",
      category: "Dashboard"
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's a collection of projects I've worked on, ranging from web applications to data visualizations. 
              Each project represents a learning journey and a step forward in my development skills.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`h-48 ${project.image} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">💻</div>
                    <p className="font-bold">{project.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      className="flex-1 bg-gray-900 text-white text-center py-2 px-4 rounded text-sm font-semibold hover:bg-gray-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded text-sm font-semibold hover:bg-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Work Together?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with other developers. 
              If you have an idea or want to discuss a potential project, let's connect!
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
