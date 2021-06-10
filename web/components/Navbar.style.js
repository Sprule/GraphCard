import styled from 'styled-components';

const NavbarContainer = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #5959ff;
  color: white;
  .content {
    margin: 0 auto;
    max-width: 1224px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .logo {
    color: white;
    font-weight: bold;
    font-size: 18px;
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
  color: blue;
  &:hover {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    transition: 0.2s ease;
    cursor: pointer;
  }
`;

export default NavbarContainer;
