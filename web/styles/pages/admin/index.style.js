import styled from 'styled-components';

const AdminContainer = styled.div`
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .command-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    button {
      margin: 10px;
    }
  }
`;

export default AdminContainer;
