import styled from 'styled-components';
import { Container, TextField } from '@material-ui/core';

const ProfileContainer = styled(Container)`
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
    color: blue;
  }
`;

export const StyledTextField = styled(TextField)`
  margin: 10px 0px !important;
`;

export default ProfileContainer;
