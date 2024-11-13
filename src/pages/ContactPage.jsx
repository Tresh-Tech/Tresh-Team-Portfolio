import React from "react";
import blurredEllipse from "../assets/images/Ellipse1.png";
import costumerRep from "../assets/images/Frame 38 (1).png";
import Footer from "@/components/Footer";
import { Button, FieldInput, FieldTextarea, Form } from "@/components/FormComponents";

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
            <h1 className="text-4xl font-medium poppins-500 mb-8">
              Contact us
            </h1>
            <Form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FieldInput legend="First Name" name="firstname" />
                </div>

                <div>
                  <FieldInput legend="Last Name" name="lastname" />
                </div>
              </div>

              <div>
                <FieldInput legend="Email Address" type="email" name="email" />
              </div>

              <div>
                <FieldTextarea
                  legend="Your Message"
                  message="Drop your message here"
                />
              </div>

              <Button type="submit">Submit</Button>
            </Form>
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
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
