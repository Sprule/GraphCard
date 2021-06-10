import { useState, useContext } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import GraphicsCardContainer from "../../../styles/pages/graphicsCard/index.style.js";
import { RealtimeContext } from "../../providers/RealtimeProvider";
import { UserContext } from "../../providers/UserProvider";
import { Router } from "next/router";

const GraphicsCardPage = ({
  notFound,
  graphicsCardData,
}) => {
  const { socket } = useContext(RealtimeContext);
  const userContext = useContext(UserContext);
  const [chatroom, setChatroom] = useState(chatroomData);

  if (notFound) {
    return <div>This graphics card doesn't exist</div>;
  }

  return (
    <GraphicsCardContainer>
      <div className="header">
        <div>Hello</div>
      </div>
    </GraphicsCardContainer>
  );
};

GraphicsCardPage.getInitialProps = async function ({ req, res, query }) {
  const { data } = await Axios.get(`/graphicsCard/${query.chatroomId}`);

  return {
    notFound: data.graphicsCard === null,
    graphicsCardData: data.graphicsCard
  };
};

export default ChatroomPage;
