import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import LoginSignup from '../loginSignup';
import InnerDashbaord from './components/innerDashbaord';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [shouldSignup, setShouldSignup] = useState(true);
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const handleShouldSignup = async () => {
      setLoading(true);
      var res = await api.get('/account/shouldSignup');
      setShouldSignup(res.data.shouldSignup);
      setLoading(false);
    };
    handleShouldSignup();
    if (localStorage.getItem('token')) {
      getProfile();
    }
  }, []);

  const handleField = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const getProfile = async () => {
    setLoading(true);
    try {
      var res = await api.get('/account/profile', {
        headers: { authorization: `${localStorage.getItem('token')}` },
      });
      if (res.data.user && !res.data.error) {
        setUser(res.data.user);
        setLoading(false);
      } else {
        localStorage.removeItem('token');
        setLoading(false);
      }
    } catch (e) {
      localStorage.removeItem('token');
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!shouldSignup) {
      try {
        var res = await api.post('/account/signin', user);
        if (res.data.token && !res.data.error) {
          localStorage.setItem('token', res.data.token);
          getProfile();
        } else {
          console.log('error', res.data.error);
        }
      } catch (e) {
        console.log('error', e.message);
      }
    } else {
      var res1 = await api.post('/account/signup', user);
      localStorage.setItem('token', res1.data.token);
      getProfile();
    }
  };
  const logOut = () => {
    localStorage.removeItem('token');
    setUser({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : // ) : user?._id ? (
      true ? (
        <>
          <InnerDashbaord logOut={logOut} />
        </>
      ) : (
        <LoginSignup
          shouldSignup={shouldSignup}
          handleSubmit={handleSubmit}
          user={user}
          handleField={handleField}
        />
      )}
    </>
  );
};

export default Dashboard;
