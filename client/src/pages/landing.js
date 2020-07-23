import React from 'react';
import Main from '../components/Landing/main';
import Second from '../components/Landing/second';
import Benefits from '../components/Landing/benefits';
import Reviews from '../components/Landing/reviews';
import ActionForm from '../components/Landing/action-form';
import ColoredLine from '../components/Landing/colored-line';

function Landing() {
  return (
    <div className="container">
      <div className="container my-4">
        <Main />
        <ColoredLine color="green" />
      </div>
      <div className="container my-4">
        <Second />
        <ColoredLine color="green" />
      </div>
      <div className="container  my-4">
        <Benefits />
        <ColoredLine color="green" />
      </div>
      <div className="container my-4">
        <Reviews />
        <ColoredLine color="green" />
      </div>
      <div className="container my-4">
        <ActionForm />
      </div>
    </div>
  );
}

export default Landing;
