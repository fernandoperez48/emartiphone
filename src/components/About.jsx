import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              itaque exercitationem ex nostrum aperiam nesciunt quam earum
              maiores at, ullam quo aliquam, eos omnis. Sed praesentium, nostrum
              quidem nobis nemo cumque necessitatibus voluptatem iure hic,
              deleniti deserunt! Consequuntur voluptate impedit dolores dicta
              placeat quae hic a repudiandae magnam ratione in veritatis
              doloribus facere deserunt illum, natus temporibus obcaecati amet
              est consequatur? Excepturi explicabo earum iusto a quasi quia,
              illum, odio ea eius dignissimos corporis labore. Sunt totam cum
              ratione minus odit officia eveniet ab quisquam quos repudiandae
              natus tempora, incidunt voluptas cupiditate laudantium aliquam et
              iusto nemo velit eum? Repellendus!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="400px"
              widt="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
