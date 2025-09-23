import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Privacy & Data Protection
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We collect information you provide directly to us, such as:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Contact information (name, email, phone number)</li>
                <li>Company information and project requirements</li>
                <li>Communications between you and AK NEXUS</li>
                <li>Payment and billing information</li>
                <li>Technical information related to your projects</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Communicate with you about services, updates, and promotions</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We do not sell, trade, or rent your personal information. We may share information in these situations:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>With your consent</li>
                <li>With service providers who assist our operations</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and prevent fraud</li>
                <li>In connection with business transfers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information</li>
                <li>Secure development practices</li>
                <li>Regular staff training on data protection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Provide services and support</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our services</li>
              </ul>
              <p className="mt-3">
                You may request deletion of your personal information, subject to legal and contractual obligations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Depending on your location, you may have rights to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. International Transfers</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                As we operate globally, your information may be transferred to and processed in 
                countries other than your own. We ensure appropriate safeguards are in place for 
                such transfers in accordance with applicable laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Our services are not directed to individuals under 18. We do not knowingly collect 
                personal information from children under 18. If we become aware of such collection, 
                we will delete the information promptly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-3">
                <p><strong>Email:</strong> info@aknexus.co</p>
                <p><strong>UAE Office:</strong> RAKEZ Compass Coworking Centre, Ras Al Khaimah, UAE</p>
                <p><strong>USA Office:</strong> 30 N Gould St Ste R, Sheridan, WY 82801</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}