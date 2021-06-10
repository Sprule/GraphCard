import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #263044;
  color: white;
  .content {
    margin: 0 auto;
    max-width: 1224px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .nav-link {
    margin: 0px 20px;
    opacity: .8;
    &:hover {
      opacity: 1;
    }
  }
  .logo-container {
    color: white;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    margin-right: 20px;
    .logo {
      width: 30px;
      margin-right: 6px;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .buttons {
    display: flex;
  }
`;

export const NavButton = styled.div`
  margin: 0px 10px;
  padding: 4px 15px;
  border-radius: 3px;
  background-color: white;
  border: 2px solid transparent;
  color: #5d76a8;
  &:hover {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    transition: 0.2s ease;
    cursor: pointer;
  }
`;

export default NavbarContainer;
