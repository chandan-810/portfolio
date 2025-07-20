import React, { useState, useEffect } from "react";
import {
  Play,
  Award,
  Clock,
  Users,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Star,
} from "lucide-react";

const VideoEditorPortfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Coming Soon",
      category: "Commercial",
      duration: "2:30",
      thumbnail:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
      description: "A dynamic brand story showcasing innovation and growth",
      tags: ["Motion Graphics", "Color Grading", "Sound Design"],
    },
    {
      id: 2,
      title: "Coming Soon",
      category: "Music Video",
      duration: "3:45",
      thumbnail:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop",
      description: "High-energy music video with synchronized visual effects",
      tags: ["Visual Effects", "Sync Editing", "Color Grading"],
    },
    {
      id: 3,
      title: "Coming Soon",
      category: "Event",
      duration: "5:20",
      thumbnail:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=225&fit=crop",
      description: "Emotional storytelling capturing precious moments",
      tags: ["Storytelling", "Audio Mix", "Color Correction"],
    },
    {
      id: 4,
      title: "Coming Soon",
      category: "Commercial",
      duration: "1:45",
      thumbnail:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=225&fit=crop",
      description: "Sleek product showcase with 3D animations",
      tags: ["3D Animation", "Product Demo", "Motion Graphics"],
    },
    {
      id: 5,
      title: "Coming Soon",
      category: "Documentary",
      duration: "15:30",
      thumbnail:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=225&fit=crop",
      description: "Cinematic journey through Southeast Asia",
      tags: ["Documentary", "Drone Footage", "Sound Design"],
    },
    {
      id: 6,
      title: "Coming Soon",
      category: "Fashion",
      duration: "2:15",
      thumbnail:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=225&fit=crop",
      description: "Stylish fashion video with smooth transitions",
      tags: ["Fashion", "Transitions", "Color Grading"],
    },
  ];

  const skills = [
    { name: "DaVinci Resolve", level: 93 },
    { name: "Color Grading", level: 92 },
    { name: "Sound Design", level: 75 },
    { name: "Web Development", level: 80 },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      text: "Outstanding work on our product launch video. The editing was flawless and really brought our vision to life.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Wedding Couple",
      company: "Personal Client",
      text: "Our wedding video exceeded all expectations. Every moment was captured beautifully with incredible attention to detail.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Content Creator",
      company: "Lifestyle Brand",
      text: "Professional, creative, and always delivers on time. The best video editor I've worked with!",
      rating: 5,
    },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ANKIT
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "portfolio", "about", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-purple-400 ${
                    activeSection === item ? "text-purple-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Ankit Adhikari
            </h1>
            <h2 className="text-2xl md:text-2xl text-gray-300 mb-8">
              Professional Video Editor & Motion Graphics Artist & Web Developer
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Bringing stories to life through the art of visual storytelling.
              Specializing in commercial videos, music videos, documentaries,
              and branded content with over 1 years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-purple-500 px-8 py-4 rounded-full text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-gray-400 text-lg">
              A selection of my recent video editing projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-purple-600 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {project.duration}
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                I'm a passionate video editor with over 1 years of experience
                crafting compelling visual stories. My journey began with a love
                for cinema and has evolved into expertise across commercial,
                artistic, and documentary work and web development.
              </p>
              <p className="text-gray-400 mb-8">
                I specialize in bringing creative visions to life through
                precise editing, stunning motion graphics, and meticulous
                attention to detail. Every project is an opportunity to push
                creative boundaries and deliver exceptional results that exceed
                expectations.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400">0+</div>
                  <div className="text-gray-400 text-sm">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400">0+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400">1+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-gray-400 text-lg">
              What my clients say about working with me
            </p>
          </div>
          <div>
            <h1 className=" text-center text-5xl md:text-7xl font-bold mb-6 text-white bg-clip-text ">
              Coming Soon!!!!
            </h1>
          </div>
          {/* <div className="grid md:grid-cols-3 gap-8">  
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-purple-400">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to bring your vision to life? Get in touch!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-gray-300">Email</div>
                    <div className="text-white">adhikariankit123@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-gray-300">Phone</div>
                    <div className="text-white">
                      +91 8171699515 (only whatsapp)
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-gray-300">Location</div>
                    <div className="text-white">Pampapuri, Ramnagar</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-purple-400">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    target="_blank"
                    href="https://instagram.com/adhikari_anku_810"
                    className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    target="_blank"
                    href="https://linkedin/chandan-180"
                    className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/chandan-810"
                    className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Project Type"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Ankit Adhikari. All rights reserved.
            </div>
            <div className="text-gray-500 text-sm">
              Crafted with passion for visual storytelling
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoEditorPortfolio;
