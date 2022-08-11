import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <h1>Login Page | {t('hello')}</h1>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default LoginPage;