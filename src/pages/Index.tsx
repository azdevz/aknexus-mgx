import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Blocks, 
  CreditCard, 
  ShoppingCart, 
  FolderKanban,
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  Zap
} from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: Code,
      title: 'SaaS Based Web Application',
      description: 'Scalable software-as-a-service solutions built with modern technologies and cloud-native architecture.',
      features: ['Cloud Infrastructure', 'Multi-tenant Architecture', 'API Integration']
    },
    {
      icon: Blocks,
      title: 'Blockchain Based Solutions',
      description: 'Secure and transparent blockchain applications for various industries and use cases.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms']
    },
    {
      icon: CreditCard,
      title: 'Digital Banking Solutions',
      description: 'Comprehensive fintech solutions for modern banking and financial services.',
      features: ['Payment Processing', 'Digital Wallets', 'Compliance Systems']
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce Business Solutions',
      description: 'Complete e-commerce platforms with advanced features for online businesses.',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management']
    },
    {
      icon: FolderKanban,
      title: 'Project Management Solutions',
      description: 'Efficient project management tools to streamline workflows and boost productivity.',
      features: ['Task Management', 'Team Collaboration', 'Progress Tracking']
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Team Members', value: '50+' }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              Leading Web Development Agency
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Ideas Into
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Digital Reality
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge web development solutions that drive business growth. 
              From SaaS applications to blockchain solutions, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in delivering comprehensive digital solutions across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose AK NEXUS?
              </h2>
              <p className="text-lg text-gray-600">
                We combine technical expertise with business acumen to deliver solutions that not only work but drive real results.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Global Presence</h3>
                    <p className="text-gray-600">Offices in UAE and USA serving clients worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Team</h3>
                    <p className="text-gray-600">Skilled developers and designers with proven track records</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fast Delivery</h3>
                    <p className="text-gray-600">Agile development process ensuring quick turnaround</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Ready to Get Started?</h3>
                <p className="text-gray-600">
                  Let's discuss your project and see how we can help you achieve your goals.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full">
                    <Link to="/contact">Schedule a Consultation</Link>
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    Free consultation • No commitment required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}