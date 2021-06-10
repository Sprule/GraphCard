import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const SignUpContainer = styled.div`
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
    color: blue;
  }
`;

export const StyledTextField = styled(TextField)`
  margin: 10px 0px !important;
`;
export default SignUpContainer;
