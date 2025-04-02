const Features = () => {
    const features = [
      {
        title: "Easy Post Creation",
        description: "Create and publish blog posts effortlessly with our simple editor."
      },
      {
        title: "Secure Authentication",
        description: "Sign in securely using Appwrite authentication services."
      },
      {
        title: "Engaging Comments",
        description: "Interact with readers through a seamless commenting system."
      },
      {
        title: "Analytics Dashboard",
        description: "Track your blog's performance with real-time analytics."
      }
    ];
  
    return (
      <div className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Features;
  