'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Briefcase, 
  Mail, 
  Phone,
  Github, 
  Linkedin, 
  Star,
  CheckCircle,
  ArrowRight,
  Users
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
      <nav className="fixed top-0 w-full glass z-50 border-b border-slate-200 dark:glass-dark dark:border-slate-700">
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
              {['home', 'services', 'case-studies', 'testimonials', 'about', 'contact'].map((section) => (
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
                href="tel:+1234567890"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:faizan@yourdomain.com"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 inline mr-2" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Conversion Focused */}
      <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6 animate-pulse">
                <Star className="w-4 h-4 mr-2" />
                ⚡ Only 2 spots left for Q1 2024
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                I Help Startups Scale to{' '}
                <span className="text-gradient">$10M+</span> with Custom Software
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Full-stack developer specializing in React, Node.js, and AWS. 
                Built <strong>50+ applications</strong> that generated <strong>$2M+ in client revenue</strong>.
                <br />
                <span className="text-lg font-semibold text-green-600">✅ 30-day money-back guarantee</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  🚀 Book FREE Strategy Call (Worth $500)
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </a>
                <a
                  href="#case-studies"
                  className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-lg font-semibold text-center"
                >
                  View Case Studies
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-semibold">8+ Years Experience</span>
                </div>
                <div className="flex items-center justify-center bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-semibold">50+ Projects Delivered</span>
                </div>
                <div className="flex items-center justify-center bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-semibold">100% Client Satisfaction</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative animate-float"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-modern-xl p-8 hover-lift">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Recent Project</h3>
                  <p className="text-slate-600 dark:text-slate-300">E-commerce Platform</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-300">Revenue Increase</span>
                    <span className="font-bold text-green-600">+300%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-300">Page Load Time</span>
                    <span className="font-bold text-blue-600">-50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-300">Additional Revenue</span>
                    <span className="font-bold text-purple-600">$500K+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-8 px-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">$2M+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Revenue Generated</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-green-600 mb-1">300%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Avg. Revenue Increase</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">48hrs</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Avg. Response Time</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Services I Provide</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              End-to-end software development solutions that drive business growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Application Development',
                description: 'Custom web applications built with React, Next.js, and modern frameworks',
                features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Scalable Architecture'],
                price: 'From $5,000',
                icon: <Code className="w-8 h-8" />
              },
              {
                title: 'Technical Consulting',
                description: 'Strategic guidance on technology decisions and architecture',
                features: ['Code Reviews', 'Architecture Planning', 'Team Training', 'Best Practices'],
                price: '$150/hour',
                icon: <Users className="w-8 h-8" />
              },
              {
                title: 'Mobile App Development',
                description: 'Cross-platform mobile applications for iOS and Android',
                features: ['React Native', 'Native Performance', 'App Store Ready', 'Push Notifications'],
                price: 'From $8,000',
                icon: <Briefcase className="w-8 h-8" />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-gradient mb-2">{service.price}</div>
                <div className="text-sm text-slate-500 mb-4">⚡ Limited time offer</div>
                <button className="w-full bg-gradient-primary text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-medium shadow-modern hover:shadow-modern-lg transform hover:scale-105 hover-glow">
                  🚀 Get Instant Quote
                </button>
              </motion.div>
            ))}
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
      {/* <section id="experience" className="py-16 px-4 bg-white dark:bg-slate-800" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
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
      </section> */}

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 px-4 bg-white dark:bg-slate-800" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Case Studies</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Real projects with measurable business impact
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: 'E-Commerce Platform for Fashion Brand',
                client: 'StyleHub Fashion',
                challenge: 'Needed a scalable e-commerce solution to handle 10x traffic growth',
                solution: 'Built custom platform with Next.js, Stripe, and AWS',
                results: [
                  { metric: 'Revenue Increase', value: '+300%', color: 'text-green-600' },
                  { metric: 'Page Load Time', value: '-50%', color: 'text-blue-600' },
                  { metric: 'Additional Revenue', value: '$500K+', color: 'text-purple-600' }
                ],
                testimonial: {
                  quote: "Faizan transformed our online presence. Our sales tripled in just 6 months!",
                  author: "Sarah Johnson",
                  role: "CEO, StyleHub Fashion"
                },
                tech: ['Next.js', 'Stripe', 'AWS', 'PostgreSQL', 'Redis']
              },
              {
                title: 'SaaS Dashboard for Analytics Company',
                client: 'DataInsights Inc.',
                challenge: 'Complex data visualization dashboard with real-time updates',
                solution: 'React-based dashboard with D3.js and WebSocket integration',
                results: [
                  { metric: 'User Engagement', value: '+250%', color: 'text-green-600' },
                  { metric: 'Data Processing', value: '10x faster', color: 'text-blue-600' },
                  { metric: 'Customer Retention', value: '+40%', color: 'text-purple-600' }
                ],
                testimonial: {
                  quote: "The dashboard Faizan built is a game-changer. Our clients love the real-time insights.",
                  author: "Michael Chen",
                  role: "CTO, DataInsights Inc."
                },
                tech: ['React', 'D3.js', 'Node.js', 'WebSocket', 'MongoDB']
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                        <Code className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                        <p className="text-blue-600 font-medium">{project.client}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Challenge:</h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">{project.challenge}</p>
                      
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Solution:</h4>
                      <p className="text-slate-600 dark:text-slate-300">{project.solution}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`text-2xl font-bold ${result.color}`}>{result.value}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg mb-4">
                      <p className="text-slate-700 dark:text-slate-200 italic mb-2">&ldquo;{project.testimonial.quote}&rdquo;</p>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        <strong>{project.testimonial.author}</strong> - {project.testimonial.role}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Code className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <p className="text-slate-600 dark:text-slate-300">Project Screenshot</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">What Clients Say</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Don&apos;t just take my word for it - hear from satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO",
                company: "StyleHub Fashion",
                rating: 5,
                quote: "Faizan transformed our online presence. Our sales tripled in just 6 months! His technical expertise and business acumen are unmatched."
              },
              {
                name: "Michael Chen",
                role: "CTO",
                company: "DataInsights Inc.",
                rating: 5,
                quote: "The dashboard Faizan built is a game-changer. Our clients love the real-time insights. Highly recommend for any complex project."
              },
              {
                name: "Emily Rodriguez",
                role: "Founder",
                company: "TechStartup",
                rating: 5,
                quote: "Working with Faizan was the best decision we made. He delivered beyond our expectations and helped us scale from 0 to $2M revenue."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Everything you need to know before getting started
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you start my project?",
                answer: "I can typically begin within 48-72 hours of project approval. For urgent projects, I offer expedited start times with a small rush fee."
              },
              {
                question: "What if I'm not satisfied with the work?",
                answer: "I offer a 30-day money-back guarantee. If you're not completely satisfied, I'll refund your investment, no questions asked."
              },
              {
                question: "Do you work with startups or only established companies?",
                answer: "I work with both! I have special packages designed for startups and offer flexible payment terms to help you get started."
              },
              {
                question: "Can you help with ongoing maintenance after launch?",
                answer: "Absolutely! I offer maintenance packages starting at $500/month, including bug fixes, updates, and 24/7 support."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </p>
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
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Ready to Scale Your Business?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Join 50+ successful businesses that have scaled with my custom software solutions.
              <br />
              <span className="text-lg font-semibold text-green-600">Book your FREE strategy call today!</span>
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">What You&apos;ll Get in Your FREE Call:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom project roadmap (worth $500)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Technology stack recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Timeline & budget estimates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>No-obligation consultation</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
                <p className="text-slate-600 dark:text-slate-300">faizan@yourdomain.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Phone</h3>
                <p className="text-slate-600 dark:text-slate-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <a
                href="mailto:faizan@yourdomain.com?subject=Free Strategy Call - Portfolio Inquiry"
                className="bg-gradient-secondary text-white px-12 py-4 rounded-xl hover:opacity-90 transition-all duration-300 text-xl font-bold shadow-modern-xl hover:shadow-modern-xl transform hover:scale-105 hover-glow animate-pulse-glow"
              >
                🚀 Book Your FREE Strategy Call Now
              </a>
              
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/faizan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/faizan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
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
