import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    id: 1,
    title: 'Microsoft Power BI Data Analyst',
    issuer: 'Microsoft',
    code: 'PL-300',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/UsamaMehmood-7205/8A69B3A82F71326A?sharingId',
    featured: true,
  },
  {
    id: 2,
    title: 'Maximo Application Suite Sales Foundation',
    issuer: 'IBM',
    link: 'https://www.credly.com/badges/0e8fbb1b-db56-4cf4-9006-6915779908e0/linked_in_profile',
    featured: false,
  },
  {
    id: 3,
    title: 'Google Analytics Certification',
    issuer: 'Google',
    link: 'https://skillshop.credential.net/a6b7426e-14ac-4e72-9199-b97b7921c158',
    featured: false,
  },
  {
    id: 4,
    title: 'Microsoft Azure Fundamentals',
    issuer: 'DigiPAKISTAN',
    link: 'https://digipakistan.org/verify-certificate/WQS57087',
    featured: false,
  },
  {
    id: 5,
    title: 'Data Science',
    issuer: 'DigiPAKISTAN',
    link: 'https://digipakistan.org/verify-certificate/RJY34201',
    featured: false,
  },
  {
    id: 6,
    title: 'Python',
    issuer: 'DigiPAKISTAN',
    link: 'https://digipakistan.org/verify-certificate/PRL23241',
    featured: false,
  },
  {
    id: 7,
    title: 'Python Programming',
    issuer: "Stanford University's Code in Place",
    link: 'https://codeinplace.stanford.edu/cip5/certificate/eujm4n',
    featured: false,
  },
  {
    id: 8,
    title: 'SQL',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/iframe/c02c62fa4a16',
    featured: false,
  },
];

const CertCard = ({ cert, index }: { cert: typeof certifications[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-effect rounded-xl p-6 hover-lift ${
        cert.featured ? 'md:col-span-2 lg:col-span-1 border-accent/50' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${cert.featured ? 'bg-accent/20' : 'bg-accent/10'}`}>
          <Award className={`w-6 h-6 ${cert.featured ? 'text-accent' : 'text-accent/80'}`} />
        </div>
        {cert.featured && (
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full animate-pulse-glow">
            Featured
          </span>
        )}
      </div>
      
      <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
      {cert.code && (
        <span className="text-xs text-accent font-medium">({cert.code})</span>
      )}
      <p className="text-sm text-muted-foreground mt-2 mb-4">{cert.issuer}</p>
      
      <Button
        asChild
        variant="ghost"
        size="sm"
        className="text-accent hover:text-accent hover:bg-accent/10 -ml-3"
      >
        <a href={cert.link} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Certificate
        </a>
      </Button>
    </motion.div>
  );
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Separate featured cert for prominent display
  const featuredCert = certifications.find(c => c.featured);
  const otherCerts = certifications.filter(c => !c.featured);

  return (
    <section id="certifications" className="py-20 md:py-32 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-accent">Certifications</span> & Credentials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating my expertise in data analytics and technology
          </p>
        </motion.div>

        {/* Featured Certification */}
        {featuredCert && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="glass-effect rounded-2xl p-8 border-2 border-accent/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                <div className="p-6 rounded-full bg-accent/20 animate-pulse-glow">
                  <Award className="w-12 h-12 text-accent" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="text-xs font-medium text-accent bg-accent/20 px-3 py-1 rounded-full">
                      Microsoft Certified
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{featuredCert.title}</h3>
                  <p className="text-accent font-medium mb-2">({featuredCert.code})</p>
                  <p className="text-muted-foreground mb-4">{featuredCert.issuer}</p>
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <a href={featuredCert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Credential
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherCerts.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
