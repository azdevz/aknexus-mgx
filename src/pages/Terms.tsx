import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Legal Information
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                By accessing and using the services provided by AK NEXUS FZ LLC and AK NEXUS LLC 
                (collectively "AK NEXUS", "we", "us", or "our"), you accept and agree to be bound 
                by the terms and provision of this agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Services Description</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                AK NEXUS provides web development services including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>SaaS Based Web Application Development</li>
                <li>Blockchain Based Solutions</li>
                <li>Digital Banking Solutions</li>
                <li>Ecommerce Business Solutions</li>
                <li>Project Management Solutions</li>
                <li>Custom software development and consulting services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Client Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Providing accurate and complete project requirements</li>
                <li>Timely provision of necessary materials, content, and feedback</li>
                <li>Payment of fees according to agreed terms</li>
                <li>Compliance with applicable laws and regulations</li>
                <li>Proper use of delivered software and services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Upon full payment of all fees, clients will own the custom code developed specifically 
                for their project. AK NEXUS retains rights to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>General methodologies, processes, and know-how</li>
                <li>Pre-existing intellectual property and frameworks</li>
                <li>Third-party components and libraries</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Payment terms are established in individual project agreements. Generally:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Projects require an initial deposit before work begins</li>
                <li>Payments are due according to agreed milestones</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to project-specific terms</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                AK NEXUS's liability is limited to the amount paid for services. We are not liable 
                for indirect, incidental, or consequential damages. Services are provided "as is" 
                without warranties beyond those required by law.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Termination</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Either party may terminate services with written notice. Upon termination, 
                payment is due for work completed. Confidentiality obligations survive termination.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                These terms are governed by the laws of the jurisdiction where services are provided. 
                For UAE clients: UAE law applies. For US clients: Wyoming state law applies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                For questions about these terms, contact us at:
              </p>
              <div className="mt-3">
                <p><strong>Email:</strong> info@aknexus.co</p>
                <p><strong>UAE:</strong> +971 66 78 3871</p>
                <p><strong>USA:</strong> +1 307 403 0755</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}