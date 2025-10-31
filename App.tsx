
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Order from './components/Order';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Contact />
        <Order />
      </main>
      <Footer />
    </div>
  );
};

export default App;
