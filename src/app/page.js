
"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Palette, Zap, Users, ExternalLink, Calendar, MapPin, Building, GraduationCap, Award, Phone, Send, Heart } from 'lucide-react';

export default function Home() {
  // Navigation state
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  // Section visibility states
  const [aboutInView, setAboutInView] = useState(false);
  const [projectsInView, setProjectsInView] = useState(false);
  const [experienceInView, setExperienceInView] = useState(false);
  const [educationInView, setEducationInView] = useState(false);
  const [contactInView, setContactInView] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  // Navigation scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observers for animations
  useEffect(() => {
    const observerOptions = { threshold: 0.3 };

    const aboutObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setAboutInView(true),
      observerOptions
    );

    const projectsObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setProjectsInView(true),
      { threshold: 0.2 }
    );

    const experienceObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setExperienceInView(true),
      observerOptions
    );

    const educationObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setEducationInView(true),
      observerOptions
    );

    const contactObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setContactInView(true),
      observerOptions
    );

    const aboutEl = document.getElementById('about');
    const projectsEl = document.getElementById('projects');
    const experienceEl = document.getElementById('experience');
    const educationEl = document.getElementById('education');
    const contactEl = document.getElementById('contact');

    if (aboutEl) aboutObserver.observe(aboutEl);
    if (projectsEl) projectsObserver.observe(projectsEl);
    if (experienceEl) experienceObserver.observe(experienceEl);
    if (educationEl) educationObserver.observe(educationEl);
    if (contactEl) contactObserver.observe(contactEl);

    return () => {
      aboutObserver.disconnect();
      projectsObserver.disconnect();
      experienceObserver.disconnect();
      educationObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Contact form handlers
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Show success message
    alert("Message sent! Thank you for your message. I'll get back to you soon.");

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  // Data for components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Msdesire1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/adeyemo-oluwakemi-0a4154248', label: 'LinkedIn' },
    { icon: Mail, href: 'adeyemok831@gmail.com', label: 'Email' },
  ];

  const skills = [
    {
      category: 'Frontend Technologies',
      items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Python',],
      percentage: 95,
    },
    {
      category: 'Styling & Animation',
      items: ['Tailwind CSS', 'Framer Motion', 'Bootstrap', 'CSS Grid'],
      percentage: 95,
    },
    {
      category: 'Tools & Workflow',
      items: ['Git', 'Vite', 'Figma'],
      percentage: 75,
    },
    {
      category: 'Backend & Database',
      items: ['Node.js', 'MySQL', ],
      percentage: 70,
    },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following industry best practices and modern design patterns.',
    },
    {
      icon: Palette,
      title: 'UI/UX Focus',
      description: 'Creating intuitive interfaces with attention to detail, accessibility, and user experience.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, SEO, and exceptional user experience across all devices.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with designers, product managers, and backend developers in agile environments.',
    },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform built with React and TypeScript, featuring real-time inventory management, secure payments, and responsive design. Implemented advanced filtering, search functionality, and optimized performance.',
      image: '/smartf.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/Msdesire1',
      demo: 'https://smartpaygenie.com',
      featured: true,
    },
    {
      title: 'Coin Dashboard',
      description: 'Comprehensive project token dashboard with real-time collaboration features, (TLC) isn’t just another token; it’s the heartbeat of the TuluPay ecosystem. From payments to staking, from governance to settlement',
      image: '/coind.png',
      technologies: ['React', 'Framer Motion', 'Chart.js','Socket.io',' Connect Wallet','TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Msdesire1',
      demo: 'https://coin.tulupay.com',
      featured: true,
    },
    {
      title: 'Compliance App',
      description: 'Integrate real-time KYB effortlessly using our developer-first API. Automate compliance, reduce fraud, and strengthen trust across all your fintech operations.',
      image: '/com.png',
      technologies: ['React', 'face detetion', 'CSS Grid', 'jotai','Tailwind CSS'],
      github: 'https://github.com/Msdesire1',
      demo: 'https://compliance.tulupay.com',
      featured: false,
    },
    {
      title: 'Tulu Documentation',
      description: 'API documentationis for developers which  is designed for easy integration',
      image: '/docss.png',
      technologies: ['React', 'Next.js','Tailwind CSS' ],
      github: 'https://github.com/Msdesire1',
      demo: 'https://docs.tulupay.com',
      featured: true,
    },
  ];

  const experiences = [
    {
      title: 'Intern',
      company: 'Ceph Tech',
 location: 'Nigeria',
      period: '2022 - 2023',
      type: 'Full-time',
      description: 'Developing modern web applications with cutting-edge technologies. Creating responsive user interfaces and implementing interactive features using React and modern frontend frameworks.',
      achievements: [
        'Built responsive web applications with React and TypeScript',
        'Implemented modern UI/UX designs with Tailwind CSS',
        'Developed interactive components with smooth animations',
        'Collaborated with cross-functional teams to deliver high-quality products',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frontend Developer',
      company: 'MSME',
      location: 'Nigeria',
      period: '2024 - Present',
      type: 'Full-time',
      description: 'Worked for 1 year and 8 months developing web applications for micro, small and medium enterprises. Focused on creating user-friendly interfaces and optimizing web performance.',
      achievements: [
        'Developed multiple client projects with modern web technologies',
        'Improved website performance and user experience',
        'Created responsive designs compatible across all devices',
        'Collaborated with backend teams for seamless API integration',
      ],
      technologies: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor in Computer Science',
      institution: 'Kwara State University, Malete',
      location: 'Kwara, Nigeria',
      period: '2022 - 2024',
      description: 'Specialized in software engineering, data structures, algorithms, and web technologies. Active member of the coding club and participated in various hackathons.',
      achievements: [
        // 'Dean\'s List for academic excellence (3 consecutive semesters)',
        // 'Winner of Inter-college Web Development Competition 2021',
        'Published research paper on "Modern Frontend Frameworks Performance Analysis"',
        'Led team of 5 students in final year website project',
      ],
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Software Engineering',
        'Web Technologies',
        'Computer Networks',
        'Operating Systems',
      ],
    },
    {
      degree: 'Estate Management and Valuation',
      institution: 'Kwara State Polytechnic, Ilorin',
      location: 'Kwara, Nigeria',
      period: '2015 - 2021',
      description: 'Estate Management and Valuation is a multidisciplinary field focused on the professional direction, supervision, and assessment of landed properties to achieve optimal returns, whether financial, social, or other',
      achievements: [
        'Value of any assets',
        ' Technical Drawing',
        'Building Construction',
        // 'Head of Computer Club',
      ],
      courses: [
        'Property Valuation',
        'Property Management',
        'Property Law',
        'Computer Applications',
        'Property Development ',
        'Real Estate Agency and Marketing ',
      ],
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adeyemok831@gmail.com',
      href: 'adeyemok831@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 9032434519',
      href: '+234 9032434519',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kwara state, NG',
      href: '#',
    },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];


    const downloadFile = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = "/Olamideeee Resume.pdf";
    link.download = "Olamideeee Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloading(false);
  };
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#111317]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
          Dev Desire
              {/* Alex Chen */}
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-[16px] font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-900 hover:text-gray-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-[#3C83F6] text-black px-6 py-2 rounded-lg font-medium hover:bg-blue-300 transition-colors"
            >
              Get In Touch
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <main className='bg-gradient-hero'>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full"
            >
               <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('code.jpg')",
          filter: "blur(4px)"
        }}
      />
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 opacity-70" />
            </motion.div>
          </div>
         <div className="relative z-10 container mx-auto px-6 text-center pt-32">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#172334] border border-blue-400 rounded-full text-blue-700 text-sm font-medium">
                  Available for new opportunities
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-300"
              >
                Frontend Developer &{' '}
                <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Creative Problem Solver</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                I craft exceptional digital experiences with modern web technologies,
                transforming complex ideas into beautiful, intuitive interfaces that users love.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="bg-[#3C83F6] text-black px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                  View My Work
                </motion.button>

                      <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                          onClick={downloadFile}
                         disabled={isDownloading}
                            className="bg-[#16A249] text-black px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isDownloading ? "Downloading..." : "Download CV"}
    </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-[#3C83F6] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#3C83F6] hover:text-white transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center space-x-6"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="p-3 bg-[#07090D] text-white hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 shadow-lg"
                  >
                    <link.icon size={24} />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-blue-600 animate-bounce" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-surface">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Passionate frontend developer with 2+ years of experience creating engaging,
                high-performance web applications that bridge the gap between design and functionality.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-300">My Journey</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Started my journey in computer science with a fascination for creating things that
                    people could see and interact with. This led me to specialize in frontend development,
                    where I could combine technical skills with creativity.
                  </p>
                  <p>
                    Over the years, I&apos;ve worked with startups and established companies, building everything
                    from small business websites to large-scale applications serving millions of users.
                  </p>
                  <p>
                    I&apos;m constantly learning and experimenting with new technologies, always looking for
                    better ways to solve problems and improve user experiences.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.category}
                      initial={{ opacity: 0, x: -30 }}
                      animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-300">{skill.category}</h4>
                        <span className="text-blue-600 font-medium">{skill.percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={aboutInView ? { width: `${skill.percentage}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-blue-600 to-green-500 rounded-full"
                        />
                      </div>
                      <div className="flex flex-wrap gap-4 mt-2">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs bg-[#151E2E] text-blue-400 px-2 py-1 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[#16181D] p-6 rounded-xl shadow-lg hover:shadow-[#2474f5] transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-[#1A2333] rounded-lg flex items-center justify-center mb-4">
                      <highlight.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-[16px] mb-2 text-gray-300">{highlight.title}</h4>
                    <p className="text-gray-300 text-[14px]">{highlight.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}

        {/* Projects Section */}
<section id="projects" className="py-20 bg-[#07090D]">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={projectsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        A showcase of my recent work, demonstrating proficiency in modern web technologies
        and commitment to creating exceptional user experiences.
      </p>
    </motion.div>

    <div className="space-y-20">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group overflow-hidden rounded-2xl shadow-2xl"
            >
              {/* Fixed image display */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/90 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/90 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={projectsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            >
              {project.featured && (
                <span className="inline-block px-3 py-1 bg-[#081813] border border-[#081813] text-green-700 text-sm font-medium rounded-full mb-4">
                  Featured Project
                </span>
              )}

              <h3 className="text-3xl font-bold mb-4 text-gray-300">{project.title}</h3>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-[#151E2E] text-blue-400 text-sm font-medium rounded-lg border border-[#0C1525]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-gray-400 hover:bg-gray-500 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </motion.a>

                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-[#3C83F6] hover:bg-blue-700 text-black px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={projectsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="text-center mt-20"
    >
      <p className="text-gray-300 mb-6">
        Interested in seeing more of my work?
      </p>
      <motion.a
        href="https://github.com/Msdesire1"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center space-x-2 border-2 border-blue-600 text-blue-600 hover:bg-[#3C83F6] hover:text-black px-8 py-3 rounded-lg font-medium transition-all duration-300"
      >
        <Github size={18} />
        <span>View All Projects on GitHub</span>
      </motion.a>
    </motion.div>
  </div>
</section>
  {/* Experience Section */}
   <section id="experience" className="py-20 bg-[#111317]">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={experienceInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
        Experience
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        My professional journey in frontend development, showcasing growth,
        leadership, and technical excellence across various roles and companies.
      </p>
    </motion.div>

    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-300 transform -translate-x-1/2 hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:mt-20'}`}
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={experienceInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2 md:-translate-x-2 shadow-lg hidden md:block"
            />

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[#16181D] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ml-12 md:ml-0"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-[#151E2E] text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  {exp.type}
                </span>
                <div className="flex items-center text-gray-300 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {exp.period}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2 text-gray-300">{exp.title}</h3>

              <div className="flex items-center text-gray-300 mb-4 space-x-4">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  {exp.company}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-green-600">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 + i * 0.1 }}
                      className="flex items-start text-sm text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-2 py-1 bg-[#151E2E] text-blue-400 text-xs rounded border border-[#151E2E]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={experienceInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="text-center mt-16"
    >
      <div className="bg-[#16181D] p-8 rounded-2xl max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-gray-300">Want to work together?</h3>
        <p className="text-gray-300 mb-6">
          I&apos;m always interested in new opportunities and exciting projects.
          Let&apos;s discuss how I can contribute to your team&apos;s success.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-green-600 transition-colors"
        >
          Get In Touch
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>

      {/* Education Section */}
<section id="education" className="py-20 bg-[#07090D]">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={educationInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
        Education
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        My academic foundation and continuous learning journey that shaped my technical expertise
        and problem-solving abilities.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={educationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-[#16181D] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#1A2333] rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-2xl font-bold text-gray-300">{edu.degree}</h3>
              <div className="flex flex-wrap items-center text-gray-300 mt-1 gap-2">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  {edu.institution}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {edu.location}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center text-gray-300 text-sm mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                {edu.period}
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-green-600" />
                <span className="text-green-600 font-medium">{edu.grade}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {edu.description}
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Key Achievements:</h4>
              <ul className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={educationInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 + i * 0.1 }}
                    className="flex items-start text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-300">Key Courses:</h4>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course, i) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={educationInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-2 py-1 bg-[#151E2E] text-blue-400 text-xs rounded border border-[#151E2E]"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={educationInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-center mt-16"
    >
      <div className="bg-[#121418] p-8 rounded-2xl max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-gray-300">Continuous Learning</h3>
        <p className="text-gray-300">
          Education doesn&apos;t stop at graduation. I&apos;m constantly learning new technologies,
          taking online courses, and staying updated with the latest industry trends to
          deliver cutting-edge solutions.
        </p>
      </div>
    </motion.div>
  </div>
</section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#07090D]">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
          </div>

          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-gray-300">
                Get In Touch
              </h2>
              <p className="text-xl text-secondary-foreground max-w-3xl mx-auto text-gray-300">
                Ready to start your next project? Let&apos;s discuss how we can work together
                to create something amazing.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-8 text-gray-300">Let&apos;s start a conversation</h3>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={contactInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center space-x-4 p-4 bg-[#16181D] rounded-xl hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-[#1A2333] text-white rounded-lg flex items-center justify-center group-hover:bg-[#3C83F6] group-hover:text-white transition-colors">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-300">{info.label}</p>
                        <p className="text-gray-300">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={contactInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-gradient-surface p-6 rounded-xl"
                >
                  <h4 className="font-bold text-lg mb-3 text-gray-300">Quick Response Promise</h4>
                  <p className="text-secondary-foreground text-sm text-gray-300">
                    I typically respond to messages within 24 hours. For urgent matters,
                    feel free to call or send a follow-up email.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <form onSubmit={handleSubmit} className="bg-[#16181D] p-8 rounded-2xl shadow-lg">
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={contactInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#21242C] text-gray-300 border border-[#21242C] rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={contactInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#21242C] text-gray-300 border border-[#21242C] rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={contactInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mb-6"
                  >
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#21242C] text-gray-300 border border-[#21242C] rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={contactInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-6"
                  >
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#21242C]  text-gray-300 border border-[#21242C] rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={contactInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="w-full bg-[#3C83F6] text-black py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className=" bg-[#111317] border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                            {/*               className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent cursor-pointer"cursor-pointer" */}
              <h3  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mb-4">
                Dev Desire</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Frontend Developer passionate about creating exceptional digital experiences.
                Always learning, always building.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    viewport={{ once: true }}
                    className="p-2 bg-[#16181D] text-white hover:bg-[#3C83F6] hover:text-primary-foreground rounded-lg transition-all duration-300"
                  >
                    <link.icon size={20} />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-4 text-gray-300 ">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300  hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-4 text-gray-300 ">Let&apos;s Connect</h4>
              <p className="text-gray-300 mb-4">
                Have a project in mind? Let&apos;s discuss how we can work together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-[#3C83F6] text-black px-6 py-2 rounded-lg font-medium hover:bg-primary-hover transition-colors"
              >
                Start a Project
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-300/10 flex flex-col md:flex-row items-center justify-between"
          >
            <p className="text-gray-300  text-sm mb-4 md:mb-0">
              © {currentYear} Dev Desire. All rights reserved.
            </p>
            <div className="flex items-center text-gray-300  text-sm">
              <span>Built by</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-1"
              >
                {/* <Heart className="w-4 h-4 text-red-500 fill-current" /> */}
              </motion.div>
              <span className='text-gray-300 '> Desire using React & Framer Motion</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};
