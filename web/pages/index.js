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

  //const [gCardsList, setGCardsList] = useState(graphicsCards);

  let gCardsList = [
    {
      _id: 1,
      name: "NVIDIA GeForce RTX 3080 10GB",
      description: "The GeForce RTX 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.",
      price: "699.99",
      stock: '2',
      date: '6/10/21 15:34:22'
    },
    {
      _id: 1,
      name: "NVIDIA GeForce RTX 3080 10GB",
      description: "The GeForce RTX 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.",
      price: "699.99",
      stock: '2',
      date: '6/10/21 15:34:22'
    },
    {
      _id: 1,
      name: "NVIDIA GeForce RTX 3080 10GB",
      description: "The GeForce RTX 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.",
      price: "699.99",
      stock: '2',
      date: '6/10/21 15:34:22'
    },
    {
      _id: 1,
      name: "NVIDIA GeForce RTX 3080 10GB",
      description: "The GeForce RTX 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.",
      price: "699.99",
      stock: '2',
      date: '6/10/21 15:34:22'
    },
    {
      _id: 1,
      name: "NVIDIA GeForce RTX 3080 10GB",
      description: "The GeForce RTX 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.",
      price: "699.99",
      stock: '2',
      date: '6/10/21 15:34:22'
    },
]

  return (
    <HomePageContainer>
      <div>
        <Head>
          <title>GraphCard</title>
          <meta name="description" content="GraphCard graphics card checker" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Style this later */}
        <div className="hero-banner">
          <div className="banner-content">
            <div className="welcome">Welcome to <br></br>Graph Card</div>
            <div className="catch-phrase">Never miss a gpu drop again</div>
          </div>
        </div>
        <div className="content">
          <div className="stock">
            <div className="sub-title">Recent Checkouts</div>
            <div className="cards">
              {gCardsList.map((gCard) => (
                <Link href={/graphicsCard/ + gCard._id}>
                  <Card className="card">
                    <CardHeader
                      title={gCard.name}
                      subheader={"Price " + gCard.price}
                    ></CardHeader>
                    <div className="gCard-info-wrapper">
                      <div className="gCard-info">{`Stock: ${gCard.stock} -`}</div>
                      <div className="gCard-info">{`Date: ${gCard.date}`}</div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          <div className="stock">
            <div className="sub-title">Recent Stock Updates</div>
            <div className="cards">
              {gCardsList.map((gCard) => (
                <Link href={/graphicsCard/ + gCard._id}>
                  <Card className="card">
                    <CardHeader
                      title={gCard.name}
                      subheader={"Price " + gCard.price}
                    ></CardHeader>
                    <div className="gCard-info-wrapper">
                      <div className="gCard-info">{`Stock: ${gCard.stock} -`}</div>
                      <div className="gCard-info">{`Date: ${gCard.date}`}</div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HomePageContainer>
  );
};


export default HomePage;
