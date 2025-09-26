// Simple contact form handler for demo purposes
// In production, this would be replaced with a proper backend service

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, service, message, to } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Missing required fields: name, email, and message are required' 
    });
  }

  // Log the form submission (in production, this would send an actual email)
  console.log('Contact form submission:', {
    to: to || 'info@aknexus.co',
    from: email,
    name,
    phone,
    service,
    message,
    timestamp: new Date().toISOString()
  });

  // Simulate email sending (replace with actual email service like SendGrid, Nodemailer, etc.)
  const emailData = {
    to: 'info@aknexus.co',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toISOString()}</small></p>
    `
  };

  // Return success response
  res.status(200).json({ 
    message: 'Message sent successfully',
    data: emailData
  });
}