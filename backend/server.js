import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import admissionRoutes from './routes/admission.js';
import contactRoutes from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// Custom Logger Middleware
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} request to URL: ${req.url}`);
  next();
});

// Seed basic course details mock for the frontend to consume if needed
const COURSES = [
  { id: 'basic-computer', title: 'Basic Computer', duration: '3 Months', fee: '₹3,000', category: 'Computing Foundations' },
  { id: 'dca', title: 'DCA (Diploma in Computer Applications)', duration: '6 Months', fee: '₹5,500', category: 'Diploma' },
  { id: 'pgdca', title: 'PGDCA (Post Graduate Diploma in Computer Applications)', duration: '1 Year', fee: '₹12,000', category: 'PG Diploma' },
  { id: 'spoken-english', title: 'Spoken English', duration: '3 Months', fee: '₹4,000', category: 'Languages' },
  { id: 'stenography', title: 'Stenography', duration: '6 Months', fee: '₹6,000', category: 'Vocational' },
  { id: 'tally-gst', title: 'Tally & GST', duration: '3 Months', fee: '₹4,500', category: 'Accounting' },
  { id: 'typing', title: 'Typing (English/Hindi)', duration: '3 Months', fee: '₹2,000', category: 'Skills' },
  { id: 'financial-accounting', title: 'Financial Accounting', duration: '6 Months', fee: '₹7,000', category: 'Accounting' },
  { id: 'office-management', title: 'Office Management', duration: '6 Months', fee: '₹5,000', category: 'Vocational' }
];

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/contact', contactRoutes);

// Simple courses endpoint
app.get('/api/courses', (req, res) => {
  res.json({ success: true, courses: COURSES });
});

// Root check endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Learning World Academy API Server',
    status: 'Running',
    version: '1.0.0',
    credentials: ['Government Registered', 'ISO Certified 9001:2015']
  });
});

// 404 Route handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 Learning World Academy Server successfully started!`);
  console.log(`📡 Port: ${PORT}`);
  console.log(`🔗 API Base: http://localhost:${PORT}`);
  console.log(`==================================================`);
});
