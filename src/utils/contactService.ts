interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // For demo purposes, we'll simulate a successful submission
    // In production, this would integrate with your email service
    
    console.log('Contact form submission:', {
      to: 'info@aknexus.co',
      from: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      data: formData,
      timestamp: new Date().toISOString()
    });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For now, always return success
    // In production, replace this with actual email service integration
    return true;
  } catch (error) {
    console.error('Contact form submission error:', error);
    return false;
  }
};

// Email template for the submission
export const generateEmailTemplate = (formData: ContactFormData): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">New Contact Form Submission - AKNEXUS</h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #334155; margin-top: 0;">Contact Details:</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${formData.service || 'Not specified'}</p>
      </div>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #334155; margin-top: 0;">Message:</h3>
        <p style="white-space: pre-wrap;">${formData.message}</p>
      </div>
      
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
      <p style="color: #64748b; font-size: 14px;">
        Submitted on: ${new Date().toLocaleString()}<br>
        From: AKNEXUS Contact Form
      </p>
    </div>
  `;
};