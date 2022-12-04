import React from 'react';
import '../styles/Error.scss';

const Error: React.FC = (errorMessage: any) => {
  return (
    <div className="error" data-testid="error">
      {errorMessage.message}
    </div>
  );
};

export default Error;
