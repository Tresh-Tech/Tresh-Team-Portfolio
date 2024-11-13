import React from 'react';
import blurredEllipse from '../assets/images/Ellipse1.png';
import costumerRep from '../assets/images/Frame 38 (1).png';

// Simple Input component
const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
);

// Simple Textarea component
const Textarea = ({ className = "", ...props }) => (
  <textarea
    {...props}
    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
);

// Simple Button component
const Button = ({ className = "", children, ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-md transition-colors ${className}`}
  >
    {children}
  </button>
);

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#ffffff] to-[#1d4ed825] overflow-hidden">
      {/* Blurred Ellipses */}
      <img 
        src={blurredEllipse} 
        alt=""
        width={225}
        height={225}
        className="absolute -top-12 -left-8 rotate-12"
      />
      <img 
        src={blurredEllipse} 
        alt=""
        width={225}
        height={225}
        className="absolute -top-12 -right-20 rotate-45"
      />
      <img 
        src={blurredEllipse} 
        alt=""
        width={225}
        height={225}
        className="absolute -bottom-12 -right-36 -rotate-75"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h1 className="text-4xl font-bold mb-8">Contact us</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="First Name"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Last name"
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <p className="mb-2">Drop your message here</p>
                <Textarea
                  placeholder="Your message"
                  className="w-full px-4 py-2 border rounded-md h-32"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block">
            <div className="rounded-lg overflow-hidden">
              <img
                src={costumerRep}
                alt="Customer service representative"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pb-12">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Tresh Team</h3>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {['Topic', 'Topic', 'Topic'].map((title, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {['Page', 'Page', 'Page', 'Page'].map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        {page}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;