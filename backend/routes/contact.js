import express from 'express';
const router = express.Router();

// Mock database for contact inquiries
const inquiries = [];

// Handle Contact Form Submission
router.post('/submit', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, email, subject, message) are required to submit an inquiry.'
    });
  }

  const newInquiry = {
    id: 'INQ-' + Math.floor(1000 + Math.random() * 9000),
    name,
    email,
    phone: phone || 'N/A',
    subject,
    message,
    submittedAt: new Date().toISOString()
  };

  inquiries.push(newInquiry);

  console.log('✉️ [DB-MOCK] New Contact Inquiry Received:');
  console.log(JSON.stringify(newInquiry, null, 2));

  res.status(201).json({
    success: true,
    message: 'Thank you! Your message has been sent successfully. We will get back to you shortly.',
    inquiry: newInquiry
  });
});

export default router;
