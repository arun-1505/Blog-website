import React from "react";

const Contact = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-4">Feel free to reach out to us via the details below:</p>
      
      <div className="space-y-4">
        <p className="text-gray-700 font-semibold">📍 Address: NIT Kurukshetra Hostel 9</p>
        <p className="text-gray-600">1234 React Street, JavaScript City, Web State, 56789</p>
        
        <p className="text-gray-700 font-semibold">📧 Email:</p>
        <p className="text-blue-500 hover:underline">ninjacoders@gmail.com</p>
        
        <p className="text-gray-700 font-semibold">📞 Phone:</p>
        <p className="text-gray-600">+1 (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Contact;
