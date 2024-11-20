import React from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Jane Doe",
    feedback: "Amazing services! Highly recommend.",
    rating: "★★★★",
  },
  {
    name: "John Smith",
    feedback: "Great experience working with them.",
    rating: "★★★★★",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((test, index) => (
          <div key={index} className="testimonial-card">
            <p>{test.feedback}</p>
            <h4>{test.name}</h4>
            <p className="rating">{test.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
