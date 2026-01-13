import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  BarChart3, 
  Database, 
  RefreshCw, 
  Palette, 
  Settings, 
  FileSpreadsheet 
} from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Power BI Development',
    description: 'Custom dashboards and reports that transform raw data into actionable business insights with interactive visualizations.',
  },
  {
    icon: Database,
    title: 'Data Analytics Solutions',
    description: 'End-to-end analytics solutions including data collection, processing, and advanced statistical analysis.',
  },
  {
    icon: RefreshCw,
    title: 'Data Integration & ETL',
    description: 'Seamless data integration from multiple sources with robust ETL pipelines for reliable data flow.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered dashboard designs that combine aesthetics with functionality for optimal user experience.',
  },
  {
    icon: Settings,
    title: 'IBM Maximo Support',
    description: 'Functional support and implementation of IBM Maximo for enterprise asset management solutions.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Reporting & Visualization',
    description: 'Comprehensive reporting solutions with clear data visualization for informed decision-making.',
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-effect rounded-xl p-6 hover-lift cursor-pointer"
    >
      <div className="p-4 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors duration-300">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 md:py-32 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive data analytics and business intelligence solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
