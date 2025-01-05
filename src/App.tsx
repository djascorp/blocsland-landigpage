import React from 'react';
import { Hero } from './components/Hero';
import { ContactForm } from './components/ContactForm';

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <Hero onContactClick={scrollToContact} />
      <ContactForm />
    </div>
  );
}

export default App;