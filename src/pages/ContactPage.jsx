import React from "react";
import blurredEllipse from "../assets/images/Ellipse1.png";
import costumerRep from "../assets/images/Frame 38 (1).png";

const Fieldset = ({ className = "", children, legend, message }) => (
  <>
    <fieldset
      className={`relative border border-black rounded-[10px] ${className}`}
    >
      <legend className="ml-5 px-4 poppins-500 text-l">{legend}</legend>
      {children}
    </fieldset>
    <p className="poppins-300-i text-l mt-2 text-[#000000b3]">{message}</p>
  </>
);

// Simple Input component
const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full px-4 py-2 rounded-[10px] bg-transparent outline-0 ${className}`}
  />
  // focus:outline-none focus:ring-2 focus:ring-blue-500
);

// Simple Textarea component
const Textarea = ({ className = "", ...props }) => (
  <textarea
    {...props}
    className={`w-full px-4 py-2 border rounded-md outline-none min-h-32 bg-transparent ${className}`}
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
      {/* mt-[100px] */}
      {/* Main Content */}
      <main>
        <div className="container min-h-screen flex items-center justify-center  mx-auto relative z-10 ">
          <div className="w-full min-h-[90vh] pt-[90px] grid grid-cols-1 lg:grid-cols-2 gap-[140px] px-[5vw]">
            {/* Contact Form */}
            <div>
              <h1 className="text-4xl font-medium poppins-500 mb-8">
                Contact us
              </h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Fieldset legend="First Name">
                      <Input
                        name="firstname"
                      />
                    </Fieldset>
                  </div>
                  <div>
                    <Fieldset legend="Last Name">
                      <Input
                        name="lastname"
                      />
                    </Fieldset>
                  </div>
                </div>

                <div>
                  <Fieldset legend="Email Address">
                    <Input
                      type="email"
                      name="email"
                    />
                  </Fieldset>
                </div>

                <div>
                  <Fieldset legend="Your Message" message="Drop your message here">
                    <Textarea />
                  </Fieldset>
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 rounded-[12px] bg-blue-600 text-2xl poppins-500 text-white hover:bg-blue-700"
                >
                  Submit
                </Button>
              </form>
            </div>

            {/* Image Section */}
            <div className="hidden relative lg:block overflow-hidden">
              <div className="h-full rounded-lg bg-orange-500">
                <img
                  src={costumerRep}
                  alt="Customer service representative"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
