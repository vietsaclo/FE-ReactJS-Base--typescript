import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../app-store/hooks";
import { userLogin, userLogout, selectSessionUser } from "../app-reducers/SessionUserReducer";

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const sessionUser = useAppSelector(selectSessionUser);
  const dispatch = useAppDispatch();

  return (
    <div className='container'>
      <h1>Login Page | {t('hello')}</h1>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
      </ul>
      <hr />

      <h3>User Login Status</h3>
      {sessionUser.id ?
        <ul>
          <li>id: {sessionUser.id}</li>
          <li>userName: {sessionUser.userName}</li>
          <li>fullName: {sessionUser.fullName}</li>
          <li>task:
            <button
              onClick={() => dispatch(userLogout())}
            >Logout Now</button>
          </li>
        </ul> :
        <div>
          User Not Login -
          <button
            onClick={() => dispatch(userLogin({
              id: 1, userName: 'VietSaclo', fullName: 'Nguyen Quoc Viet',
            }))}
          >Login Now</button>
        </div>
      }
    </div>
  );
};

export default LoginPage;