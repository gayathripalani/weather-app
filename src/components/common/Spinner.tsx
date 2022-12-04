import React from 'react';

import spinnerImg from '../assets/images/spinner.gif';
import '../styles/Spinner.scss';

const Spinner: React.FC = () => {
  return (
    <div data-testid="spinner" className="spinner">
      <img src={spinnerImg} alt="Loading" />
    </div>
  );
};

export default Spinner;
