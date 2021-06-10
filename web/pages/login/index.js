import Button from '@material-ui/core/Button';
import { useState, useContext } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Axios from 'axios';
import LoginContainer, {
  StyledTextField,
} from '../../styles/pages/login/index.style.js';
import { UserContext } from '../../providers/UserProvider';
import auth from '../../auth/auth';

const LoginPage = () => {
  const userContext = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [usernameErrorText, setUsernameErrorText] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState(false);

  const [errorMsg, setErrorMsg] = useState(''); // error msg from server after attempting to log in

  const loginUser = (e) => {
    e.preventDefault();

    if (username.length === 0) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (password.length === 0) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    Axios.post('/auth/login', {
      username,
      password,
    })
      .then(({ data }) => {
        console.log('data', data);
        userContext.state.setUser(data.session);
        Router.push('/');
      })
      .catch((err) => {
        if (err.response && err.response.data.error) {
          setErrorMsg(err.response.data.error);
        } else {
          console.error(err);
          setErrorMsg('An error occurred.');
        }
      });
  };

  return (
    <LoginContainer>
      <div className="title">Log in to GraphCard</div>
      <form className="input" noValidate onSubmit={loginUser}>
        <StyledTextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          required
          error={usernameError}
          helperText={usernameErrorText}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <StyledTextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          required
          error={passwordError}
          helperText={passwordErrorText}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Log in
        </Button>
      </form>
      <div>
        Don't have an account?
        <Link href="/signup">
          <a> Sign Up</a>
        </Link>
      </div>
      <div className="errorMsg">{errorMsg}</div>
    </LoginContainer>
  );
};

LoginPage.getInitialProps = async function ({ req, res }) {
  const session = await auth.init(req, res);
  await auth.guestOnly(req, res, session);
  return {};
};

export default LoginPage;
