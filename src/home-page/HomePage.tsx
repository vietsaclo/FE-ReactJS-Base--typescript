import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <h1>Home Page | { t('hello') }</h1>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;