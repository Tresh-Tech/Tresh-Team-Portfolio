import React from 'react';
import blurredEllipse from '../assets/images/Ellipse1.png';
import costumerRep from '../assets/images/Frame 38 (1).png'

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
                <Textarea
                  placeholder="Drop your message here"
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
      </div>
    </div>
  );
};

export default ContactPage;