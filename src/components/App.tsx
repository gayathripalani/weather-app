import * as React from 'react';
import WeatherInfo from './WeatherInfo';
import Header from './common/Header';
import Footer from './common/Footer';
import './styles/App.scss';
import ErrorBoundary from './common/ErrorBoundary';
import Error from './common/Error';

const App: React.FC = () => {
  return (
    <ErrorBoundary fallbackUI={<Error />}>
      <Header />
      <main className="app">
        <WeatherInfo/>
      </main>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
