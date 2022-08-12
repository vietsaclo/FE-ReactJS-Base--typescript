import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Counter } from '../example-redux/counter/Counter';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <h1>Home Page | {t('hello')}</h1>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
      <hr />
      <Counter />
    </div>
  );
};

export default HomePage;