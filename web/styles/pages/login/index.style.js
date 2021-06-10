import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const LoginContainer = styled.div`
  margin: 0 auto;
  max-width: 1224px;
  margin-top: 100px;
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .input {
    display: flex;
    flex-direction: column;
    max-width: 400px;
  }
  a {
    color: #7c80ff;
  }
`;

export const StyledTextField = styled(TextField)`
  margin: 10px 0px !important;
  color: white;
`;

export default LoginContainer;
