import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Counter } from '../example-redux/counter/Counter';
import { Apis, Funcs } from "../utils";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    Funcs.fun_log('Hello log', 'HomePage.tsx', 11);
    Funcs.fun_get(`${Apis.API_HOST + Apis.API_TAILER.GET_POSTS}?keyWord=&cate=0&sort=0&start=false&heart=false&page=1&limit=10`)
      .then((data) => {
        Funcs.fun_log(data, 'HomePage.tsx', 14);
      });
  }, []);

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