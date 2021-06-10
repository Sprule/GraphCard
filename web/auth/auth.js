import Axios from 'axios';
import router from 'next/router';

const auth = {};

const redirectOnError = (res) => {
  if (process.browser) {
    router.push('/');
  } else {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
  }
};

auth.init = async (req, res) => {
  let request;
  if (process.browser) {
    request = Axios.get('/auth/session');
  } else {
    request = Axios.get('/auth/session', {
      headers: {
        Cookie: req.headers.cookie,
      },
    });
  }

  try {
    const { data } = await request;
    return data.session;
  } catch (err) {
    return null;
  }
};

auth.userOnly = async (req, res, session) => {
  if (!session) {
    redirectOnError(res);
    return false;
  }
  return true;
};

auth.guestOnly = async (req, res, session) => {
  if (session) {
    redirectOnError(res);
    return false;
  }
  return true;
};

auth.adminOnly = async (req, res, session) => {
  if (!session || !session.admin) {
    redirectOnError(res);
    return false;
  }
  return true;
};

auth.headers = (req) => {
  if (process.browser) {
    return null;
  }
  return {
    Cookie: req.headers.cookie,
  };
};

export default auth;
