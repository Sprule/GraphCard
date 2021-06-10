import Head from 'next/head';
import LayoutContainer from './Layout.style';
import NavBar from './Navbar';

const UserLayout = ({ children }) => (
  <LayoutContainer>
    <Head>
      <title key="title">GraphCard</title>
      <meta name="description" content="GraphCard chat rooms" />
      <link rel="icon" href="/favicon.ico" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <NavBar />
    <div className="page-content">{children}</div>
  </LayoutContainer>
);

export default UserLayout;
