'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Star,
  Calendar,
  MapPin
} from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-slate-900 dark:text-white"
            >
              Faizan
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
              <a
                href="/theme-handbook"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors capitalize"
              >
                Theme Guide
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:faizan@example.com"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4 inline mr-2" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Senior Software Engineer
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Crafting exceptional digital experiences with modern technologies. 
              Available for freelance projects and consulting opportunities.
            </p>
            <div className="hero-buttons">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-lg font-semibold"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-slate-800" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              I&apos;m a passionate senior software engineer with over 8 years of experience building scalable web applications.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                What I Do
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Code className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Full-Stack Development</h4>
                    <p className="text-slate-600 dark:text-slate-300">Building complete web applications from frontend to backend</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Technical Consulting</h4>
                    <p className="text-slate-600 dark:text-slate-300">Providing expert guidance on architecture and technology decisions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Code Quality</h4>
                    <p className="text-slate-600 dark:text-slate-300">Writing clean, maintainable, and well-tested code</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Why Choose Me?
              </h3>
              <div className="space-y-4 text-slate-700 dark:text-slate-200">
                <p>• 8+ years of professional experience</p>
                <p>• Expertise in modern JavaScript frameworks</p>
                <p>• Strong focus on performance and scalability</p>
                <p>• Excellent communication and project management</p>
                <p>• Proven track record of successful deliveries</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              A comprehensive toolkit for building modern web applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Frontend',
                skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL']
              },
              {
                category: 'Backend',
                skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB']
              },
              {
                category: 'DevOps & Tools',
                skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Jest', 'Webpack']
              }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white dark:bg-slate-800" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              My journey in software development
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: 'Senior Software Engineer',
                company: 'Tech Company Inc.',
                period: '2022 - Present',
                location: 'San Francisco, CA',
                description: 'Leading development of enterprise web applications, mentoring junior developers, and driving technical decisions.'
              },
              {
                title: 'Full-Stack Developer',
                company: 'StartupXYZ',
                period: '2020 - 2022',
                location: 'Remote',
                description: 'Built scalable web applications from scratch, implemented CI/CD pipelines, and optimized application performance.'
              },
              {
                title: 'Software Developer',
                company: 'Digital Agency',
                period: '2018 - 2020',
                location: 'New York, NY',
                description: 'Developed client websites and web applications using modern technologies and best practices.'
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-600"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {job.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 md:mt-0">
                    <div className="flex items-center text-slate-600 dark:text-slate-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      {job.period}
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              A showcase of my recent work and capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
                tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
                image: '/api/placeholder/400/250',
                link: '#'
              },
              {
                title: 'Task Management App',
                description: 'Real-time collaborative task management application with drag-and-drop functionality and team collaboration features.',
                tech: ['Next.js', 'TypeScript', 'Socket.io', 'MongoDB'],
                image: '/api/placeholder/400/250',
                link: '#'
              },
              {
                title: 'Analytics Dashboard',
                description: 'Data visualization dashboard for business metrics with interactive charts and real-time data updates.',
                tech: ['React', 'D3.js', 'Python', 'Redis'],
                image: '/api/placeholder/400/250',
                link: '#'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                  <Code className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white dark:bg-slate-800" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Let&apos;s Work Together</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              I&apos;m always interested in new opportunities and exciting projects. 
              Whether you need a full application built or technical consulting, let&apos;s discuss how I can help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
                <p className="text-slate-600 dark:text-slate-300">faizan@example.com</p>
              </div>
              <div className="text-center">
                <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Availability</h3>
                <p className="text-slate-600 dark:text-slate-300">Open to new projects</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-700" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-300">
            © 2024 Faizan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
