import React from 'react';
import '../styles/Error.scss';

const Error: React.FC = () => {
  return (
    <div className="error" data-testid="error">
      Something Went Wrong
    </div>
  );
};

export default Error;
