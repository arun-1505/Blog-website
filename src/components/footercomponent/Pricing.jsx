const Pricing = () => {
    const plans = [
      {
        name: "Free Plan",
        price: "$0/month",
        features: ["Basic blogging features", "Limited storage", "Community support"],
      },
      {
        name: "Pro Plan",
        price: "$10/month",
        features: ["Advanced editing tools", "Increased storage", "Priority support"],
      },
      {
        name: "Business Plan",
        price: "$25/month",
        features: ["Unlimited storage", "Custom domain support", "24/7 premium support"],
      }
    ];
  
    return (
      <div className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-2xl font-bold text-blue-500 mt-2">{plan.price}</p>
              <ul className="mt-4 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mt-2">✓ {feature}</li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Pricing;
  