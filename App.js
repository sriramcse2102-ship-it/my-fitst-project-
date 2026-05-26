function App() {
  const services = [
    {
      name: "Electrician",
      worker: "Arun",
      location: "Chennai"
    },
    {
      name: "Plumber",
      worker: "Karthik",
      location: "Coimbatore"
    },
    {
      name: "AC Repair",
      worker: "Vijay",
      location: "Madurai"
    }
  ];

  return (
    <div className="container">
      <h1>Local Service Marketplace</h1>

      <p className="subtitle">
        Find trusted local service providers instantly
      </p>

      <div className="card-container">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h2>{service.name}</h2>
            <p><strong>Worker:</strong> {service.worker}</p>
            <p><strong>Location:</strong> {service.location}</p>

            <button>Book Service</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
