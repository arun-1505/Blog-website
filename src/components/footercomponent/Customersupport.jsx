import Contact from "./Contact";

const CustomerSupport = () => {
    return (
      <div className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Customer Support</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Need help? Our support team is available 24/7 to assist you. Reach out to us via email, chat, or phone.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Contact Us
          </button>
          <button className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400" >
            FAQs
          </button>
        </div>
      </div>
    );
  };
  
  export default CustomerSupport;
  