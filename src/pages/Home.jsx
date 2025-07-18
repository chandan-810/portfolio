import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Gamepad2,
  MessageCircle,
  Mail,
  Github,
  ExternalLink,
  Code,
  Server,
  Bot,
} from "lucide-react";

export default function AnkitHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: Gamepad2, label: "Minecraft", href: "#minecraft" },
    { icon: MessageCircle, label: "Discord", href: "#discord" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      title: "Minecraft Server Network",
      description: "Custom survival server with unique plugins and game modes",
      tech: ["Java", "Spigot", "MySQL"],
      players: "500+ active",
    },
    {
      title: "Discord Bot Suite",
      description: "Multi-functional bots for moderation, music, and gaming",
      tech: ["Node.js", "Discord.js", "MongoDB"],
      servers: "200+ servers",
    },
    {
      title: "Plugin Development",
      description: "Custom Minecraft plugins for enhanced gameplay",
      tech: ["Java", "Bukkit API", "Redis"],
      downloads: "10K+ downloads",
    },
  ];

  const skills = [
    { name: "Java Development", level: 95, color: "bg-orange-500" },
    { name: "JavaScript/Node.js", level: 90, color: "bg-yellow-500" },
    { name: "Discord Bot Development", level: 88, color: "bg-indigo-500" },
    { name: "Minecraft Plugin Development", level: 92, color: "bg-green-500" },
    { name: "Database Management", level: 85, color: "bg-blue-500" },
    { name: "Server Administration", level: 87, color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white">
              Ankit<span className="text-purple-400">.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-purple-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Hi, I'm Ankit
                <span className="inline-block animate-bounce ml-4">👋</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-300 mb-8">
                A passionate Minecraft & Discord Developer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              I'm a dedicated developer with expertise in creating immersive
              Minecraft experiences and powerful Discord bots. With years of
              experience in Java and JavaScript, I bring creative solutions to
              gaming communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Code size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Clean Code
                  </h3>
                  <p className="text-gray-300">
                    Writing maintainable and efficient code
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Server size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Server Management
                  </h3>
                  <p className="text-gray-300">
                    Optimizing performance and reliability
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Bot size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Bot Development
                  </h3>
                  <p className="text-gray-300">
                    Creating intelligent Discord bots
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300">
              Some of my notable work in the gaming community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-semibold">
                    {project.players || project.servers || project.downloads}
                  </span>
                  <ExternalLink
                    size={20}
                    className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300">
              Let's collaborate on your next project
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Discord
                </h3>
                <p className="text-gray-300">ankuuu_bhaiya</p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">adhikariankit312@gmail.com</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:ankit@example.com"
                className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
              >
                <Mail size={20} />
                <span>Send Message</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Ankit. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
