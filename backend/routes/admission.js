import express from 'express';
const router = express.Router();

// Mock database for admission applications
const admissionApplications = [];

// Apply for Admission
router.post('/apply', (req, res) => {
  const { fullName, email, phone, course, address, qualification, dob } = req.body;

  // Comprehensive validation
  if (!fullName || !email || !phone || !course || !qualification) {
    return res.status(400).json({
      success: false,
      message: 'Missing mandatory admission details (fullName, email, phone, course, qualification).'
    });
  }

  const application = {
    id: 'LWA-' + Math.floor(100000 + Math.random() * 900000),
    fullName,
    email,
    phone,
    course,
    address: address || 'N/A',
    qualification,
    dob: dob || 'N/A',
    status: 'Pending Review',
    submittedAt: new Date().toISOString()
  };

  admissionApplications.push(application);

  console.log('📝 [DB-MOCK] New Admission Form Submitted:');
  console.log(JSON.stringify(application, null, 2));

  res.status(201).json({
    success: true,
    message: 'Your admission request was successfully submitted! Application ID: ' + application.id,
    application
  });
});

// Get all applications (or by student email)
router.get('/student/:email', (req, res) => {
  const email = req.params.email;
  const studentApps = admissionApplications.filter(
    app => app.email.toLowerCase() === email.toLowerCase()
  );

  res.json({
    success: true,
    applications: studentApps
  });
});

export default router;
