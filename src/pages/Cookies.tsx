import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CookiesPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Cookie Information
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: January 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. What Are Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                analyzing how you use our site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Essential Cookies</h4>
                  <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
                  <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Functional Cookies</h4>
                  <p>These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Marketing Cookies</h4>
                  <p>These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Specific Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_session</td>
                      <td className="border border-gray-300 px-4 py-2">Maintains user session</td>
                      <td className="border border-gray-300 px-4 py-2">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_preferences</td>
                      <td className="border border-gray-300 px-4 py-2">Remembers user preferences</td>
                      <td className="border border-gray-300 px-4 py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_analytics</td>
                      <td className="border border-gray-300 px-4 py-2">Website analytics</td>
                      <td className="border border-gray-300 px-4 py-2">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We may use third-party services that set cookies on our website:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Social Media Platforms:</strong> For social media integration and sharing</li>
                <li><strong>Customer Support Tools:</strong> For providing customer assistance</li>
                <li><strong>Marketing Platforms:</strong> For advertising and marketing campaigns</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Managing Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                You can control cookies in several ways:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
                <li><strong>Cookie Preferences:</strong> Use our cookie preference center when available</li>
                <li><strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                <li><strong>Browser Extensions:</strong> Install privacy-focused browser extensions</li>
              </ul>
              
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website 
                  and limit your ability to use some features.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Browser-Specific Instructions</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900">Chrome</h4>
                  <p className="text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Firefox</h4>
                  <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Safari</h4>
                  <p className="text-sm">Preferences → Privacy → Cookies and website data</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Edge</h4>
                  <p className="text-sm">Settings → Site permissions → Cookies and site data</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We may update this Cookie Policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                If you have questions about our use of cookies, please contact us:
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