import React from "react";
import "./Services.css";

const services = [
  {
    title: "Consulting",
    description: "Professional advice tailored to your needs.",
  },
  {
    title: "Training",
    description: "Workshops and programs to upskill your team.",
  },
  {
    title: "Strategy",
    description: "Roadmaps to take your business to the next level.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
