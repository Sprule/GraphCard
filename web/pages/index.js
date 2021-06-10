import Head from "next/head";
import Axios from "axios";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import { useState, useContext, useEffect } from "react";
import HomePageContainer, {
  StyledTextField,
} from "../styles/pages/home/index.style.js";

const HomePage = ({ graphicsCards }) => {

  const [gCardsList, setGCardsList] = useState(graphicsCards);

  return (
    <HomePageContainer>
      <div>
        <Head>
          <title>GraphCard</title>
          <meta name="description" content="GraphCard graphics card checker" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Style this later */}
        <div className="welcome">Welcome to Graph Card</div>
        <div className="header">
          <div className="sub-title">In-stock Graphics Cards:</div>
          <div className="cards">
            <ul>
              {gCardsList.map((gCard) => (
                <Link href={/graphicsCard/ + gCard._id}>
                  <Card>
                    <CardHeader
                      title={gCard.name}
                      subheader={"Price " + gCard.price}
                    ></CardHeader>
                  </Card>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </HomePageContainer>
  );
};

HomePage.getInitialProps = async function ({ req, res, query }) {
  const {data} = await Axios.get(`/graphicsCard/all`);
  const { graphicsCards } = data;

  return {
    graphicsCards,
  };
};

export default HomePage;
