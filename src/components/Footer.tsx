import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const services = [
    'SaaS Web Applications',
    'Blockchain Solutions',
    'Digital Banking',
    'Ecommerce Solutions',
    'Project Management'
  ];

  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AK</span>
              </div>
              <span className="text-xl font-bold">NEXUS</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading web development agency delivering innovative digital solutions worldwide.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Let's Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@aknexus.co" className="text-gray-300 hover:text-white">
                  info@aknexus.co
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:hr@aknexus.co" className="text-gray-300 hover:text-white">
                  hr@aknexus.co
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">UAE: +971 66 78 3871</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">USA: +1 307 403 0755</span>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Offices</h3>
            <div className="space-y-4">
              <div className="text-sm">
                <div className="flex items-start space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                  <span className="font-medium">UAE Office</span>
                </div>
                <p className="text-gray-300 ml-6">
                  AK NEXUS FZ LLC<br />
                  RAKEZ Compass Coworking Centre<br />
                  Ras Al Khaimah, UAE
                </p>
              </div>
              <div className="text-sm">
                <div className="flex items-start space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                  <span className="font-medium">USA Office</span>
                </div>
                <p className="text-gray-300 ml-6">
                  AK NEXUS LLC<br />
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 AK NEXUS. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}