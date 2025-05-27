import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <nav className="container py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#work" className="hover:text-primary transition-colors">Work</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Product Designer & Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Creating beautiful and functional digital experiences
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
              View My Work
            </button>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">About Me</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-6">
              I'm a product designer and developer passionate about creating meaningful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="max-w-xl">
            <p className="text-lg text-gray-600 mb-8">
              Interested in working together? Let's connect!
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
