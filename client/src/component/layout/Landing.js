import React from "react";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Football-Fiesta</h1>
          <p className="lead">A place where we promote football at grassroot level!!</p>
          <p className="lead">Create your own profile, organise and participate in various amazing football compettions!!!</p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing; 