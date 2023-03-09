import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero.webp";
import "./hero-section.css";

const HeroSection = () => {
  return (

  <div className="Merahero">
  <nav>
  </nav>
  <section className="banner">
    <div className="container">
      <div className="banner-text">
        <h1>Manage</h1>
        <p><strong>We make it easy to get the most out of your virtual machine.</strong> Our tools make it simple to track how your Droplets are performing and help you to respond quickly if there is a problem</p>
        <button>Sign Up</button>
      </div>
    </div>
    <img className="banner-image" src="https://preview.ibb.co/bMi5Y6/banner_img.png" alt="monitoring" />
  </section>
 
  <section>

  <div className="container">
    <div className="row">
      <div className="mb-30 col-md-6 col-lg-4">
        <div className="card">
          <img className="card-icon" src="https://image.ibb.co/cFV8mR/monitoring.png" alt="monitoring" />
          <h3 className="card-title">Monitoring</h3>
          <p className="card-text">Collect metrics on visibility, monitor Droplet performance and receive alerts when problems arise in your infrastructure–at no additional cost.</p>
          <a className="card-link" href="/">Learn more</a>
        </div>
      </div>
     
      <div className="mb-30 col-md-6 col-lg-4">
        <div className="card">
          <img className="card-icon" src="https://image.ibb.co/jfmg6R/cloud_firewalls.png" alt="monitoring" />
          <h3 className="card-title">Cloud Firewalls</h3>
          <p className="card-text">Perfect for both staging and production deployments, cloud firewalls let you easily secure your infrastructure and define what services are visible on your Droplets–at no additional cost.</p>
          <a className="card-link" href="/">Learn more</a>
        </div>
      </div>
      
      <div className="mb-30 col-md-6 col-lg-4">
        <div className="card">
          <img className="card-icon" src="https://image.ibb.co/fcnzt6/team_management.png" alt="team management" />
          <h3 className="card-title">Team Management</h3>
          <p className="card-text">With Digital Teams you can invite and manage users, ensure security with two-factor authentication, and control your resource spend with centralized billing–at no additional cost.</p>
          <a className="card-link" href="/">Learn more</a>
        </div>
      </div>
     
      <div className="mb-30 col-md-6 col-lg-4">
        <div className="card">
          <img className="card-icon" src="https://image.ibb.co/evyiLm/backups.png" alt="monitoring" />
          <h3 className="card-title">Backups</h3>
          <p className="card-text">Backups run automatically on your Droplets each week and are stored for four weeks–add 20% of monthly Droplet cost.</p>
          <a className="card-link" href="/">Learn more</a>
        </div>
      </div>
     
      <div className="mb-30 col-md-6 col-lg-4">
        <div className="card">
          <img className="card-icon" src="https://image.ibb.co/g9bERR/snapshots.png" alt="snapshots" />
          <h3 className="card-title">Snapshots</h3>
          <p className="card-text">Scale out your system effortlessly. Just take a snapshot of an existing server, then spin up a new Droplet from the snapshot–add $0.05 per gigabyte per month.</p>
          <a className="card-link" href="/">Learn more</a>
        </div>
      </div>
      
      <div className="mb-30 col-md-6 col-lg-4">
        <div className="card">
          <img className="card-icon" src="https://image.ibb.co/cFV8mR/monitoring.png" alt="monitoring" />
          <h3 className="card-title">Monitoring</h3>
          <p className="card-text">Collect metrics on visibility, monitor Droplet performance and receive alerts when problems arise in your infrastructure–at no additional cost.</p>
          <a className="card-link" href="/">Learn more</a>
        </div>
      </div>

    </div>
  </div>
  </section>
</div>
  );
};

export default HeroSection;
