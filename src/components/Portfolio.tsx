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
    title: 'Sales Analytics Report (Interactive Dashboard)',
    category: 'Power BI',
    icon: BarChart3,
    description: 'Built an interactive Power BI dashboard to analyze sales, profit, COGS, and units across products, countries, and segments. Enabled dynamic insights using DAX measures, slicers, and custom tooltips to support data-driven business decisions.',
    technologies: ['Power BI Desktop & Service', 'DAX measures (Sales, Profit, COGS, Units)', 'Data Modeling (Star Schema)', 'Interactive Tooltips', 'Slicers & Filters'],
    details: `**Business Objective**

The objective of this project was to:
• Provide a clear overview of sales performance
• Analyze profitability and costs (COGS)
• Identify top-performing products, countries, and segments
• Enable self-service analytics through interactive filters and drill-downs

**Key Insights Delivered by the Report**

1️⃣ Overall Sales Performance
Displays total sales, net sales, profit, COGS, and units sold. Provides a quick high-level snapshot of business performance.

2️⃣ Sales & Profit Trend Analysis
Identifies patterns and trends over time. Helps understand periods of growth or decline.

3️⃣ Segment-Wise Analysis
Compares performance across different customer or business segments. Highlights which segments contribute most to sales and profitability.

4️⃣ Country-Wise Performance
Analyzes sales and profit distribution across countries/regions. Helps identify high-performing and underperforming markets.

5️⃣ Product Performance Analysis
Evaluates products based on sales volume, profit, and units sold. Identifies top-selling and low-performing products.

6️⃣ Cost & Profitability Insights
Uses COGS vs Sales analysis to understand margins. Helps assess profitability efficiency across products and regions.

7️⃣ Interactive Tooltips
Custom tooltips provide deeper insights on: Net Sales, Cost of Goods Sold (COGS), Profit, Units Sold. Enhances user experience without cluttering visuals.

**Business Value**
• Enables faster decision-making through a single unified dashboard
• Supports performance monitoring at multiple levels (product, country, segment)
• Reduces reliance on static reports with interactive self-service analytics
• Improves visibility into profitability and cost drivers`,
    link: 'https://app.powerbi.com/view?r=eyJrIjoiNGE1YjE5MzgtMGU3MS00NmI1LWEyN2EtOThmYjU1ZGViYTI3IiwidCI6IjU4M2U4ODhiLTAwOGYtNGExMi05MjliLWVkYzk0ZWQxZmI4ZCIsImMiOjl9',
  },
  {
    id: 2,
    title: 'Credit Card Transaction Analysis Report',
    category: 'Power BI',
    icon: BarChart3,
    description: 'An interactive Power BI analytics report designed to analyze key business data and present meaningful insights through structured visuals and KPIs. The report enables users to explore performance metrics, identify trends, and support data-driven decision-making.',
    technologies: ['Microsoft Power BI Desktop', 'DAX measures and calculations', 'Data Modeling', 'Interactive visuals, slicers, and filters'],
    details: `**Objective**

The goal of this project was to:
• Build a clear and interactive Power BI report
• Present key metrics in an easy-to-understand format
• Enable insightful analysis through filters and visual exploration
• Demonstrate practical Power BI reporting and data analysis skills

**Key Insights**
• High-level performance overview using KPIs
• Comparative analysis across different categories or dimensions
• Trend identification to understand changes over time
• Interactive filtering to explore data dynamically
• Clear visualization of data distribution and contribution

**Business Value**
• Helps stakeholders quickly understand performance
• Supports data-driven insights without technical complexity
• Improves visibility into key metrics through interactive reporting
• Reduces dependency on static or manual reports

**Skills Demonstrated**
• Power BI report development
• Business-focused data visualization
• Data modeling and DAX fundamentals
• Analytical thinking and insight generation`,
    link: 'https://app.powerbi.com/view?r=eyJrIjoiOGM1ZmNiMjUtYTQ1YS00NzdkLTk2ZTktMzNhNTEzN2Y4ZTVhIiwidCI6IjU4M2U4ODhiLTAwOGYtNGExMi05MjliLWVkYzk0ZWQxZmI4ZCIsImMiOjl9',
  },
  {
    id: 3,
    title: 'IBM Maximo Implementation',
    category: 'IBM Maximo',
    icon: Settings,
    description: 'Enterprise asset management implementation with custom workflows and maintenance optimization.',
    technologies: ['IBM Maximo', 'Asset Management', 'Workflow Automation'],
    details: 'Led the functional implementation of IBM Maximo for enterprise asset management, including configuration of work orders, preventive maintenance schedules, and inventory management modules.',
    link: null,
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
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject?.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-secondary px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {selectedProject?.link && (
              <Button asChild className="w-full">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
