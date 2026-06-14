import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, X, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

// Import project images
import salesAnalyticsImg from '@/assets/sales-analytics-dashboard.png';
import creditCardImg from '@/assets/credit-card-analysis.png';
import salesPerformanceImg from '@/assets/sales-performance-dashboard.png';
import faizanMartImg from '@/assets/faizan-mart-dashboard.png';

const projects = [
  {
    id: 5,
    title: 'Student Performance Intelligence Dashboard',
    category: 'Power BI',
    icon: BarChart3,
    image: undefined,
    description: 'A 5-page Power BI dashboard analyzing 1,044 students across two secondary schools, combining risk scoring, grade forecasting, and socioeconomic impact analysis to surface actionable insights for educational institutions.',
    technologies: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'ETS Forecasting', 'Linear Regression', 'Statistical Analysis', 'UCI Dataset', 'Education Analytics'],
    details: `**Project Overview**

I built this project to move past surface-level dashboards and demonstrate what education sector analytics actually looks like when done with real institutional intent. I chose the UCI Student Performance dataset (Cortez & Silva, 2008) deliberately because it's academically credible, publicly citable, and rich enough in socioeconomic and behavioral variables to support multi-dimensional analysis.

The dataset covers 1,044 students across two Portuguese secondary schools, tracking academic performance across three grading periods alongside 30 demographic, behavioral, and social variables.

**What I Built**

The final dashboard runs across five dedicated pages, each serving a specific analytical purpose:

• Executive Summary — Total enrollment (1,044 students), average final grade (11.34/20), pass rate (78.0% against an 85% target), distinction rate (6.7%), and at-risk count (250 students). Grade band distribution and school-gender performance breakdown matrix.

• Academic Performance — Grade trajectory across all three periods (G1 → G2 → G3) with a progression forecast showing a 95% confidence band. Study time impact analysis, G1 vs G3 correlation scatter, and grade momentum indicator.

• Risk & Intervention — A composite risk scoring system flagging students as High Risk (immediate counseling + mandatory classes + parent communication), Medium Risk (faculty mentor + weekly progress check), or Low Risk (monitoring + encouragement programs). At-Risk Student Registry drill-through table and alcohol impact delta (+1.02 grade points between Low and Moderate Risk groups).

• Socio-Academic Analysis — Parental education level vs. student grade (2.33 point gap between highest and lowest education households), internet access advantage (+1.02 grade points), school and family support cross-analysis, higher education aspiration rate (91.48%), gender-disaggregated alcohol risk impact, and urban-rural grade gap (1.02 points).

• Forecast & Statistical Analysis — Exponential Smoothing (ETS) for grade progression with 95% confidence band. Linear regression equation: G3 = 1.05 × G1 + (−0.41), with R² = 0.655 and Pearson correlation r = 0.809. Full statistical summary matrix by school and gender, plus cumulative grade distribution S-curve.

**Data Engineering & Power Query Transformation**

The raw data arrived as two separate CSV files — Math course (395 students) and Portuguese (649 students). Both files were cleaned and harmonized in Power Query Editor.

I profiled both queries using Column Quality, Column Distribution, and Column Profile views to catch nulls, outliers, and encoding inconsistencies. Calculated columns added directly in the query layer included a Subject tag, Student_ID index, and readable labels for studytime, traveltime, Medu, and Fedu.

A critical issue was a column naming discrepancy: the Math file used "paid" for extra paid classes, while the Portuguese file used "fatherd" for the same field. I caught this during a column audit, renamed "fatherd" to "paid" before appending, and documented the step. Additional transformation columns included Alcohol_Risk_Level (Low / Moderate / High), Has_Internet (Yes/No), and Study_Intensity bands. The two cleaned queries were appended into a single Student-Combined table (1,044 rows) and source tables were disabled from loading to keep the model clean.

**Data Modeling**

A three-table star-schema model was built: the combined Student table (1,044 rows), a Grade Bands reference table, and an Education reference table. All relationships were managed explicitly.

**DAX Measures**

44 custom measures organized into four display folders — Core KPIs, Trend & Progression, Statistical Analysis, and Socio-Academic. ISBLANK guards were built into ratio and comparison measures, with hidden helper measures keeping the field list clean.

**Statistical Techniques**

Linear regression (manual DAX implementation), Pearson correlation, Exponential Smoothing forecasting, standard deviation tracking, cumulative distribution modeling, and confidence interval bands.

**UX & Navigation**

Custom navigation buttons across all five pages, drill-through configuration from summary to the At-Risk Student Registry, custom tooltips, and an interactive intervention checklist embedded in the Risk page.

**Key Analytical Findings**

• Pass rate is 7 percentage points below the 85% institutional target — the single most actionable headline number

• 250 students (24% of enrollment) meet the at-risk threshold — requiring a tiered intervention framework

• First period grade explains 65.5% of final grade variance (R² = 0.655) — early identification is both possible and impactful

• Students from higher-educated families outperform peers by over 2 grade points — pointing to structural support deficits

• Internet access at home correlates with a +1.02 grade point advantage — a simple infrastructure gap with measurable consequences

• Students studying more than 5 hours weekly average 12.49 vs. 10.58 for those below 2 hours — a nearly 2-point gap supporting targeted study habit interventions

**Challenges**

The column name discrepancy between the two source files was the most technically dangerous issue — silent data corruption is far worse than an error message. Several DAX measures had to be rebuilt after disabling source tables from load, sharpening my understanding of how Power BI resolves table references at query time versus model load time. Building the risk scoring system also required thinking beyond standard BI patterns — it's a composite calculation designed and validated against logical edge cases.

**Why This Project**

I built this specifically to demonstrate education sector BI capability to institutions. Academic performance data is one of the most policy-sensitive categories an analyst can work with — visualizations need to be clear enough for a department head to act on, defensible enough for an academic committee to question, and rigorous enough to hold up against a statistician's review.`,
    link: 'https://app.powerbi.com/links/eZjtaIkWDv?ctid=583e888b-008f-4a12-929b-edc94ed1fb8d&pbi_source=linkShare',
  },
  {
    id: 4,
    title: 'Faizan Mart — Business Intelligence Dashboard',
    category: 'Power BI',
    icon: BarChart3,
    image: faizanMartImg,
    description: "A full-scale Power BI dashboard built on live retail data extracted from a remote SQL Server, covering sales performance, purchasing, inventory, void analysis, and cash flow for a real grocery mart — from raw data cleaning all the way to actionable business insights.",
    technologies: ['Power BI', 'DAX', 'SQL Server', 'Data Modeling', 'Data Cleaning', 'ETL', 'Business Intelligence'],
    details: `**Business Objective**

Faizan Mart is a real retail grocery mart managing thousands of products across hundreds of categories. The owner needed a clear, data-driven way to monitor business performance — sales trends, purchasing costs, inventory health, and cash flow — all in one place. The goal was to build a professional Power BI dashboard that could turn raw transactional data into actionable business decisions.

**Data Source & Technical Challenges**

The data was stored on a SQL Server (on-premises), not accessible online. To collect the data, I had to establish a remote connection to the SQL Server, which came with multiple technical hurdles — network configuration, authentication issues, and driver compatibility. I debugged and resolved each issue independently, which deepened my practical understanding of SQL Server connectivity and database access in real-world environments.

**Data Cleaning & Discovery**

This was the most demanding phase of the project. The raw data came directly from the mart's billing and inventory system, and it was far from clean. I spent significant time:
• Identifying and fixing inconsistencies in product names, categories, and pricing records
• Handling null values, duplicate entries, and mismatched transaction records
• Discovering system-level issues within the mart's own software — data that was being recorded incorrectly at the source
• Flagging these issues to the mart owner with proper documentation and suggested solutions

To validate my findings, I regularly cross-checked my cleaned data against the live SQL Server database to make sure nothing was lost or altered incorrectly. I also spent time with the mart team directly to understand how their system works, how transactions are recorded, and what the data actually means — which proved essential for accurate modeling.

**Data Modeling**

After cleaning, I built a structured data model in Power BI connecting sales, purchase, stock, void, and payment tables. Relationships were carefully defined to ensure accurate cross-filtering across all report pages. DAX measures were written for KPIs including Total Sales, Gross Profit, Gross Margin %, YOY Growth, Sales MTD, Return Rate, and Rolling 3-Month Sales.

**Dashboard Pages & Key Features**

The final report contains 6 pages covering the complete business picture:
• Home — Branded landing page with navigation to all sections.
• Business Overview — High-level KPIs: Rs111.9M total sales, Rs14.1M gross profit, 12.56% gross margin, 18.25% YOY growth. Monthly sales vs. gross profit trend, sales by category breakdown, top 10 categories, and year-over-year comparison (2024–2026).
• Sales Analysis — Deep-dive into revenue performance with YOY growth trend line, product-level performance table showing sales amount, quantity, profit and margin, and full category summary with rolling 3-month sales.
• Products & Purchasing — Rs97.9M total purchases tracked across 109 suppliers. Margin vs. volume scatter analysis by category, monthly sales vs. purchase comparison, and top suppliers by purchase value.
• Stock & Void — Inventory health monitoring with 21,373 current stock units, 2,706 low-stock alerts, and a negative stock detection table that exposed products being sold without proper stock records — a direct finding from the data cleaning process. Void transaction tracking showing Rs135,223 in voided sales with monthly trend analysis.
• Finance & Cash Flow — Rs111.8M cash received, Rs73,527 outstanding balance, payment status split (Paid vs. Overpaid), monthly cash vs. sales trend, and top invoices by value.

**Key Insights Delivered**
• Beverages and Cooking Oil are the top revenue-driving categories, together contributing over Rs20M in sales
• Gross margin sits at 12.56%, with specific products like JF Red Chilli Powder achieving 45.87% margin
• Negative stock records were found for several high-selling products (e.g., Eggs with -1,362 units), revealing a gap in the mart's stock-in recording process — this was highlighted and communicated to management
• Over 53% of invoices had overpayment entries, pointing to a cash handling pattern that needed review
• 18.25% year-over-year sales growth confirmed the business is expanding, giving the owner a clear benchmark going forward

**Project Scope**

Period Covered: January 2024 – June 2026
Products: 7,456 | Categories: 165 | Suppliers: 109
Prepared by: Usama Mehmood`,
    link: 'https://app.powerbi.com/links/mKWesjDdUD?ctid=583e888b-008f-4a12-929b-edc94ed1fb8d&pbi_source=linkShare',
  },
  {
    id: 1,
    title: 'Sales Analytics Report (Interactive Dashboard)',
    category: 'Power BI',
    icon: BarChart3,
    image: salesAnalyticsImg,
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
    image: creditCardImg,
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
    title: 'Sales Performance Dashboard',
    category: 'Power BI',
    icon: BarChart3,
    image: salesPerformanceImg,
    description: 'This project is an interactive Power BI sales analytics report designed to analyze sales performance and provide meaningful business insights. The report helps users understand overall performance, identify trends, and compare results across different dimensions through intuitive and interactive visuals.',
    technologies: ['Microsoft Power BI Desktop', 'DAX for calculated measures and KPIs', 'Data Modeling', 'Interactive visuals, slicers, and filters'],
    details: `**Objective**

The objective of this project was to:
• Analyze sales performance using key metrics
• Identify trends and patterns in the data
• Enable comparative analysis across categories, regions, or time
• Demonstrate practical skills in Power BI reporting and data visualization

**Key Insights Delivered**

Overall Sales Performance
The report provides a clear overview of total sales and related KPIs, allowing users to quickly assess overall business performance.

Trend Analysis
Time-based visuals highlight sales trends, helping identify periods of growth, decline, or consistency.

Category / Segment Comparison
Comparative visuals show how different categories, segments, or regions contribute to total sales, making it easier to identify top and low performers.

Performance Distribution
The report visualizes how sales are distributed across different dimensions, supporting deeper understanding of contribution patterns.

Interactive Exploration
Filters and slicers allow users to dynamically explore data and focus on specific areas of interest for deeper analysis.

**Business Value**
• Supports data-driven decision-making
• Improves visibility into sales trends and performance
• Reduces reliance on static reports through self-service analytics
• Helps stakeholders quickly identify key insights and patterns

**Skills Demonstrated**
• Power BI report development
• Business-focused data visualization
• Data modeling and DAX fundamentals
• Analytical thinking and insight generation`,
    link: 'https://app.powerbi.com/view?r=eyJrIjoiZjg2ZDg5OWMtNTNlMS00NTUxLTllN2UtYjhhN2EyM2QxMjI0IiwidCI6IjU4M2U4ODhiLTAwOGYtNGExMi05MjliLWVkYzk0ZWQxZmI4ZCIsImMiOjl9',
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
      {/* Project Image */}
      <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <Icon className="w-16 h-16 text-accent/50 group-hover:scale-110 transition-transform duration-300" />
        )}
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
        <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
          <DialogHeader className="flex-shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                {selectedProject?.category}
              </span>
            </div>
            <DialogTitle className="text-xl md:text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-sm md:text-base">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto pr-3 mt-4 space-y-6 scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent hover:scrollbar-thumb-accent/50">
            {/* Technologies Used */}
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Project Details</h4>
              <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                {selectedProject?.details.split('\n\n').map((section, index) => {
                  const lines = section.split('\n');
                  const isHeading = lines[0]?.startsWith('**') && lines[0]?.endsWith('**');
                  
                  if (isHeading) {
                    const headingText = lines[0].replace(/\*\*/g, '');
                    const contentLines = lines.slice(1);
                    return (
                      <div key={index} className="space-y-2">
                        <h5 className="font-semibold text-foreground text-sm">{headingText}</h5>
                        {contentLines.map((line, lineIndex) => (
                          <p key={lineIndex} className="pl-0">{line}</p>
                        ))}
                      </div>
                    );
                  }
                  
                  return (
                    <div key={index} className="space-y-1">
                      {lines.map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Fixed Button at Bottom */}
          {selectedProject?.link && (
            <div className="flex-shrink-0 pt-4 border-t border-border mt-4">
              <Button asChild className="w-full">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
