import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // EmailJS configuration - these would be environment variables in production
    const serviceId = 'service_aknexus'; // Replace with your EmailJS service ID
    const templateId = 'template_contact'; // Replace with your EmailJS template ID
    const publicKey = 'your_public_key'; // Replace with your EmailJS public key

    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: 'info@aknexus.co',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      service: formData.service || 'Not specified',
      message: formData.message,
      reply_to: formData.email,
    };

    // For demo purposes, we'll simulate a successful submission
    // In production, uncomment the EmailJS code below and configure your EmailJS account
    
    console.log('Contact form submission to info@aknexus.co:', {
      timestamp: new Date().toISOString(),
      data: templateParams
    });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Uncomment this for actual EmailJS integration:
    /*
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    
    if (response.status === 200) {
      return true;
    } else {
      throw new Error('EmailJS failed');
    }
    */

    // For now, always return success for demo
    return true;
  } catch (error) {
    console.error('Contact form submission error:', error);
    return false;
  }
};

// Alternative: Using Formspree (simpler setup)
export const submitToFormspree = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('https://formspree.io/f/your_form_id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        _replyto: formData.email,
        _subject: `New Contact Form Submission from ${formData.name}`,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Formspree submission error:', error);
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