import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, X, BarChart3, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'Sales Performance Dashboard',
    category: 'Power BI',
    icon: BarChart3,
    description: 'Interactive sales analytics dashboard with real-time KPIs, trend analysis, and regional performance metrics.',
    technologies: ['Power BI', 'DAX', 'SQL', 'Data Modeling'],
    details: 'Developed a comprehensive sales performance tracking system that monitors key metrics including revenue, growth rates, regional comparisons, and product performance. Features include drill-through capabilities, dynamic filtering, and automated data refresh.',
  },
  {
    id: 2,
    title: 'Financial Analytics Report',
    category: 'Power BI',
    icon: BarChart3,
    description: 'Comprehensive financial reporting solution with P&L analysis, budget tracking, and forecasting capabilities.',
    technologies: ['Power BI', 'DAX', 'Excel', 'Financial Modeling'],
    details: 'Created an enterprise-grade financial analytics platform that consolidates data from multiple sources, provides variance analysis, and enables scenario planning for better financial decision-making.',
  },
  {
    id: 3,
    title: 'HR Analytics Dashboard',
    category: 'Power BI',
    icon: BarChart3,
    description: 'Employee analytics platform tracking headcount, attrition, performance, and workforce demographics.',
    technologies: ['Power BI', 'SQL', 'DAX', 'HR Analytics'],
    details: 'Built an HR analytics solution that provides insights into workforce trends, helps identify retention risks, and supports data-driven talent management decisions.',
  },
  {
    id: 4,
    title: 'IBM Maximo Implementation',
    category: 'IBM Maximo',
    icon: Settings,
    description: 'Enterprise asset management implementation with custom workflows and maintenance optimization.',
    technologies: ['IBM Maximo', 'Asset Management', 'Workflow Automation'],
    details: 'Led the functional implementation of IBM Maximo for enterprise asset management, including configuration of work orders, preventive maintenance schedules, and inventory management modules.',
  },
  {
    id: 5,
    title: 'Maximo Reporting Suite',
    category: 'IBM Maximo',
    icon: Settings,
    description: 'Custom reporting solution for asset performance, maintenance history, and operational KPIs.',
    technologies: ['IBM Maximo', 'BIRT Reports', 'SQL', 'Analytics'],
    details: 'Developed a comprehensive suite of reports for tracking asset performance, maintenance costs, and operational efficiency within the Maximo environment.',
  },
  {
    id: 6,
    title: 'Inventory Optimization',
    category: 'Power BI',
    icon: BarChart3,
    description: 'Inventory management dashboard with stock level monitoring, reorder alerts, and supplier analytics.',
    technologies: ['Power BI', 'DAX', 'Inventory Management'],
    details: 'Created an inventory analytics solution that helps optimize stock levels, reduce carrying costs, and improve supplier performance through data-driven insights.',
  },
];

const ProjectCard = ({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="group glass-effect rounded-xl overflow-hidden cursor-pointer hover-lift"
    >
      {/* Placeholder Image */}
      <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center relative overflow-hidden">
        <Icon className="w-16 h-16 text-accent/50 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
          {project.category}
        </span>
        <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my data analytics and business intelligence projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                {selectedProject?.category}
              </span>
            </div>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-base">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Project Details</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {selectedProject?.details}
            </p>
            
            <h4 className="font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject?.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-secondary px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
