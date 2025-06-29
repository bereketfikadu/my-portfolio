"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Menu,
  X,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Python", level: 88 },
    { name: "Machine Learning", level: 75 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 90 },
  ]

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description:
        "A smart task management application that uses machine learning to prioritize tasks and predict completion times.",
      image: "/images/ai_task_manager_banner.jpg",
      tech: ["React", "Node.js", "Python", "TensorFlow", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Real-Time Chat Application",
      description: "Scalable chat application with WebSocket connections, file sharing, and group messaging features.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Socket.io", "Express", "MongoDB", "AWS S3"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800 dark:text-white">Bereket Fikadu</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "resume", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-2 space-y-2">
              {["home", "about", "projects", "skills", "resume", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 p-1">
                <Image
  src="/images/photo.jpg"  // ← Your profile photo
  alt="Bereket Fikadu"
  width={128}
  height={128}
  className="w-full h-full rounded-full object-cover bg-white"

                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Bereket</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Software Engineer & AI/ML Enthusiast crafting innovative solutions with modern technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate software engineer with over 5 years of experience in building scalable web applications
                and exploring the fascinating world of artificial intelligence and machine learning.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in technology started with a curiosity about how things work, which led me to pursue computer
                science and specialize in full-stack development. I love solving complex problems and turning innovative
                ideas into reality through code.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community through blog posts and mentoring.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Experience</h4>
                  <p className="text-teal-600 dark:text-teal-400 font-medium">5+ Years</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Projects</h4>
                  <p className="text-teal-600 dark:text-teal-400 font-medium">8+ Completed</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-teal-400 to-blue-500 p-1">
                <Image
                  src="/images/coding_lab_portrait.jpg" // ← Your profile photo
                  alt="Bereket Fikadu"
                  width={400}
                  height={400}
                  className="w-full h-full rounded-2xl object-cover bg-white"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development and AI/ML
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-slate-900 border-0 shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/images/photo.jpg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800 dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-slate-800 dark:text-white">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Resume</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Download my resume to learn more about my experience, education, and achievements
            </p>
          </div>

          <Card className="bg-white dark:bg-slate-900 border-0 shadow-lg max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Bereket Fikadu - Resume</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Software Engineer with 5+ years of experience in full-stack development and AI/ML
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Resume (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800 dark:text-white">Send me a message</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-800 dark:text-white mb-2">Name</label>
                    <Input placeholder="Your name" className="bg-slate-50 dark:bg-slate-700 border-0" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-800 dark:text-white mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-slate-50 dark:bg-slate-700 border-0"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 dark:text-white mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    className="bg-slate-50 dark:bg-slate-700 border-0"
                  />
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Send Message</Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Let's connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">bereket.fikadu@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Follow me on social media</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/bereket-fikadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </a>
                  <a
                    href="https://github.com/bereket-fikadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">© {new Date().getFullYear()} Bereket Fikadu. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
