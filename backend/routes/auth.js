import express from 'express';
const router = express.Router();

// Mock database for students
const registeredStudents = [
  {
    name: 'Demo Student',
    email: 'student@example.com',
    password: 'password123',
    phone: '9876543210'
  }
];

// Register endpoint
router.post('/register', (req, res) => {
  const { name, email, password, phone } = req.body;

  // Simple validation
  if (!name || !email || !password || !phone) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, email, password, phone) are required.'
    });
  }

  // Check if email already registered
  const exists = registeredStudents.some(s => s.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    return res.status(400).json({
      success: false,
      message: 'A student profile with this email address already exists.'
    });
  }

  const newStudent = { name, email, password, phone };
  registeredStudents.push(newStudent);

  console.log('📬 [DB-MOCK] New student registered successfully:');
  console.log(JSON.stringify(newStudent, null, 2));

  res.status(201).json({
    success: true,
    message: 'Registration successful! You can now log in.',
    student: { name, email, phone }
  });
});

// Login endpoint
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Both email and password are required.'
    });
  }

  const student = registeredStudents.find(
    s => s.email.toLowerCase() === email.toLowerCase() && s.password === password
  );

  if (!student) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password. Please try again.'
    });
  }

  console.log(`🔐 [DB-MOCK] Student logged in: ${student.email}`);

  res.json({
    success: true,
    message: 'Login successful!',
    student: {
      name: student.name,
      email: student.email,
      phone: student.phone
    }
  });
});

export default router;
