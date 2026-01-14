import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Award, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import profileImage from '@/assets/profile.jpeg';
const roles = ['Power BI Certified Consultant', 'Business Analytics Developer', 'IBM Maximo Functional Associate'];
const Hero = () => {
  const typedText = useTypingEffect(roles, 100, 50, 2000);
  return <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.5
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent to-primary p-1 animate-pulse-glow">
                <img src={profileImage} alt="Usama Mehmood" className="w-full h-full rounded-full object-cover" />
              </div>
              {/* PL-300 Badge */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5,
              duration: 0.5
            }} className="absolute -bottom-4 -right-4 bg-card border-2 border-accent rounded-full p-3 shadow-lg">
                <Award className="w-8 h-8 text-accent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left max-w-2xl">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              <p className="text-accent font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                Usama Mehmood
              </h1>
              <div className="h-12 md:h-16 mb-6">
                <span className="text-xl md:text-3xl text-muted-foreground">
                  <span key={typedText}>{typedText}</span>
                  <span className="animate-blink text-accent">|</span>
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-sm">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">Microsoft Certified: Power BI Data Analyst (PL-300)</span>
              </div>
              <p className="text-muted-foreground mb-8 text-lg">Delivering data-driven insights by building scalable Power BI dashboards and analytics solutions, with 2+ years of experience across business intelligence and IBM Maximo Functional implementations.</p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#portfolio">View Portfolio</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
                <a href="/Usama-resume.pdf" download="Usama resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.6
          }} className="flex items-center justify-center lg:justify-start gap-4">
              <a href="https://www.linkedin.com/in/usama-mehmood-33504b365" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-accent/20 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:mehmoodusama745@gmail.com" className="p-3 rounded-full bg-secondary hover:bg-accent/20 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 0.6
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>;
};
export default Hero;