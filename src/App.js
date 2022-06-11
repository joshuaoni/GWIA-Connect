import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import 'tachyons';
import Body from './components/Body/Body';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Body />
      <div className='pv4'>
        <div className='dim flex'>
          <span>Next</span>
          <div>
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
