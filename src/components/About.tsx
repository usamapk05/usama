import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Globe } from 'lucide-react';
const skills = [{
  name: 'Power BI',
  level: 95
}, {
  name: 'DAX & Semantic Modeling',
  level: 90
}, {
  name: 'Data Modeling',
  level: 88
}, {
  name: 'SQL / T-SQL',
  level: 85
}, {
  name: 'AWS Cloud Data Analytics',
  level: 80
}, {
  name: 'IBM Maximo',
  level: 85
}, {
  name: 'Python & PySpark',
  level: 75
}];
const languages = [{
  name: 'Arabic',
  level: 'Fluent',
  percentage: 90
}, {
  name: 'English',
  level: 'Intermediate',
  percentage: 75
}, {
  name: 'Urdu',
  level: 'Native',
  percentage: 100
}, {
  name: 'Punjabi',
  level: 'Native',
  percentage: 100
}];
const SkillBar = ({
  name,
  level,
  delay
}: {
  name: string;
  level: number;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  return <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div initial={{
        width: 0
      }} animate={isInView ? {
        width: `${level}%`
      } : {
        width: 0
      }} transition={{
        duration: 1,
        delay
      }} className="h-full bg-gradient-to-r from-accent to-primary rounded-full" />
      </div>
    </div>;
};
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 50
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate Business Analyst with expertise in transforming data into strategic insights
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio & Info */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -50
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">BI Developer with 3 years of experience in data analysis, dashboard development, and data integration. Certified in Power BI (PL-300), Microsoft Fabric Analytics Engineer Associate (DP-600), Microsoft Fabric Data Engineer Associate (DP-700), and trained in AWS Certified Data Analytics (Specialty) through the Honhaar Jawan government program, with foundational knowledge of cloud-based analytics and data services. Strong expertise in analyzing large datasets, identifying trends, and supporting data driven decision-making. Extracted, cleaned, and transformed data from multiple sources for analysis and reporting. Experienced in building reports and dashboards to monitor business performance, with a growing interest in revenue optimization, forecasting, and strategic analytics. Familiar with cloud environments and continuously enhancing expertise in modern data engineering and AI-driven tools. Experienced in IBM Maximo Functional, focusing on asset management, work orders, Inventory management, Preventive maintenance, and system configuration. Working knowledge of BIRT Reporting for enterprise-level report generation. In addition to BI Completed Azure Fundamentals Certification for better understanding of solution deployment on cloud based environment using Azure services, cloud security and associated tools and technologies.</p>


            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Education</h4>
                  <p className="text-muted-foreground">BS (Honors) — IIUI, 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <p className="text-muted-foreground">3 Years in Business Analytics</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-accent" />
                <h4 className="font-semibold">Languages</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {languages.map(lang => <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-sm">{lang.name}</span>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {lang.level}
                    </span>
                  </div>)}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 50
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="glass-effect rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            {skills.map((skill, index) => <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1} />)}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;