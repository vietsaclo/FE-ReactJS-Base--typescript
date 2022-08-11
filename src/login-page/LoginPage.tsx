import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className='container'>
      <h1>Login Page</h1>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default LoginPage;