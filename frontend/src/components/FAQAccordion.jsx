import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion() {
  const faqs = [
    {
      question: 'Is Learning World Academy government registered?',
      answer: 'Yes! Learning World Academy is fully registered under the Government guidelines for Skill Development and Career-Oriented Training Institutes. We are dedicated to providing high-quality digital and vocational education.'
    },
    {
      question: 'What is the benefit of ISO 9001:2015 certification?',
      answer: 'ISO 9001:2015 certification indicates that our institute adheres to international standards for quality management. This guarantees standardized teaching practices, verified syllabus standards, and industry-accepted certification.'
    },
    {
      question: 'Do you offer job placement assistance?',
      answer: 'Absolutely! We offer 100% placement assistance, including intensive resume-building workshops, corporate tie-ups with recruiters, interview preparation seminars, and simulated mock interviews.'
    },
    {
      question: 'Can I pay my course fees in installments?',
      answer: 'Yes. To make professional training highly accessible, we offer flexible payment options and interest-free monthly installment packages for all long-term courses (like DCA, PGDCA, and Stenography).'
    },
    {
      question: 'Are class schedules flexible for working professionals?',
      answer: 'Yes! We conduct separate batches for students, job holders, and housewives. We support weekday morning/evening schedules as well as intensive weekend classes.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => toggleAccordion(index)}>
              <span>{faq.question}</span>
              {isOpen ? <ChevronUp size={18} className="text-primary" /> : <ChevronDown size={18} />}
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
