import Button from '@material-ui/core/Button';
import Axios from 'axios';
import Link from 'next/link';
import { useState, useContext } from 'react';
import router from 'next/router';
import SignUpContainer, {
  StyledTextField,
} from '../../styles/pages/signup/index.style.js';
import { UserContext } from '../../providers/UserProvider';
import auth from '../../auth/auth';

const SignUpPage = () => {
  const userContext = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [usernameError, setUsernameError] = useState(false); // ex. username exists or to short
  const [passwordError, setPasswordError] = useState(false); // ex. password doesn't meet security requirements
  const [confirmPasswordError, setConfirmPasswordError] = useState(false); // ex. don't match your password

  const [usernameErrorText, setUsernameErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');

  const signUpUser = (e) => {
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
    if (confirmPassword.length === 0) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }

    Axios.post('/auth/register', {
      username,
      password,
    })
      .then(({ data }) => {
        userContext.state.setUser(data.session);
        router.push('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <SignUpContainer>
      <div className="title">Sign Up into GraphCard</div>
      <form className="input" noValidate onSubmit={signUpUser}>
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
          type="password"
          error={passwordError}
          helperText={passwordErrorText}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <StyledTextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          required
          type="password"
          error={confirmPasswordError}
          helperText={confirmPasswordErrorText}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Sign up
        </Button>
      </form>
      <div>
        Already have an account?
        <Link href="/login">
          <a> Log In</a>
        </Link>
      </div>
    </SignUpContainer>
  );
};

SignUpPage.getInitialProps = async function ({ req, res }) {
  const session = await auth.init(req, res);
  await auth.guestOnly(req, res, session);
  return {};
};

export default SignUpPage;
