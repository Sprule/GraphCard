import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const HomePageContainer = styled.div`
  .hero-banner {
    .banner-content {
      margin: 0 auto;
      max-width: 1224px;
      .welcome {
        font-size: 42px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .catch-phrase {
        font-size: 22px;
        opacity: .8;
      }
    }
    margin-bottom: 50px;
    background-color: #435881;
    width: 100vw;
    padding: 60px 0px;    
  }

  .content {
    margin: 0 auto;
    max-width: 1224px;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    .stock {
      background-color: #465571;
      border-left: 2px solid #4e7ddc;
      margin-right: 10px;
      padding: 20px;
      .sub-title {
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .card {
        margin-top: 10px;
        .gCard-info-wrapper {
          display: flex;
          margin-left: 14px;
          margin-bottom: 10px;
        }
        .gCard-info {
          margin-right: 4px;
          opacity: .7;
        }
      }
      .MuiCard-root {
        margin-bottom: 15px;
        outline-color: blue;
        background-color: #5c7096;
        color: white;
      }
      .MuiCard-root:hover {
        opacity: .8;
        cursor: pointer;
      }
    }
  }
`;

export const StyledTextField = styled(TextField)`
  margin: 10px 0px !important;
`;
export default HomePageContainer;
