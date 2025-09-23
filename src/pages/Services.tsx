import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Blocks, 
  CreditCard, 
  ShoppingCart, 
  FolderKanban,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'SaaS Based Web Application',
      description: 'Build scalable software-as-a-service solutions with modern cloud architecture.',
      features: [
        'Multi-tenant Architecture',
        'Cloud Infrastructure Setup',
        'API Development & Integration',
        'User Management Systems',
        'Subscription & Billing',
        'Performance Optimization'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Redis']
    },
    {
      icon: Blocks,
      title: 'Blockchain Based Solutions',
      description: 'Develop secure and transparent blockchain applications for various use cases.',
      features: [
        'Smart Contract Development',
        'DeFi Protocol Creation',
        'NFT Marketplace Development',
        'Cryptocurrency Wallets',
        'Blockchain Integration',
        'Security Auditing'
      ],
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'Hardhat']
    },
    {
      icon: CreditCard,
      title: 'Digital Banking Solutions',
      description: 'Create comprehensive fintech solutions for modern banking and financial services.',
      features: [
        'Core Banking Systems',
        'Payment Processing',
        'Digital Wallet Development',
        'KYC/AML Compliance',
        'Risk Management',
        'Mobile Banking Apps'
      ],
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka', 'Docker']
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce Business Solutions',
      description: 'Build complete e-commerce platforms with advanced features for online businesses.',
      features: [
        'Custom Shopping Cart',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing',
        'Customer Management',
        'Analytics & Reporting'
      ],
      technologies: ['Next.js', 'Shopify', 'Stripe', 'MySQL', 'Elasticsearch']
    },
    {
      icon: FolderKanban,
      title: 'Project Management Solutions',
      description: 'Develop efficient project management tools to streamline workflows and boost productivity.',
      features: [
        'Task & Project Tracking',
        'Team Collaboration Tools',
        'Time Management',
        'Resource Planning',
        'Progress Reporting',
        'Integration Capabilities'
      ],
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'MongoDB', 'Chart.js']
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end development services across multiple domains, 
            delivering scalable and innovative solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Card */}
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
                    <CardHeader className="text-center pb-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button asChild className="w-full">
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your requirements and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}