import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const HomePageContainer = styled.div`
  .welcome {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .sub-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .cards {
    margin-right: 750px;
  }

  .MuiCard-root {
    margin-bottom: 15px;
    outline-color: blue;
  }

  .MuiCard-root:hover {
    background-color: #f5f5f5;
  }
`;

export const StyledTextField = styled(TextField)`
  margin: 10px 0px !important;
`;
export default HomePageContainer;
