import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className='container'>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;