// import  from '../../styles/pages/Profile/index.style.js';
import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper } from "@material-ui/core";
import router from 'next/router';
import ProfileContainer, {
  StyledTextField,
} from "../../styles/pages/profile/index.style.js";
import { UserContext } from "../../providers/UserProvider";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const ProfilePage = ({ username }) => {
  const classes = useStyles();
  const userContext = useContext(UserContext);
  const [bio, setBio] = useState('');
  const [graphicsCardSubbed, setGraphicsCardSubbed] = useState([]);

  useEffect(() => {
    (async () => {
      const userData = await Axios.get(`/user/${username}`);
      const user = userData?.data?.user || {};
      const { bio, graphicsCardsSubscribed } = user;
      setBio(bio || '');
      setGraphicsCardSubbed(graphicsCardsSubscribed || []);
    })();
  }, []);

  return (
    <ProfileContainer>
      <div className="title">{`${username}`}</div>
      <p>{bio}</p>
      <h3>Graphics Card I'm Watched</h3>
      <Grid container spacing={3}>
        {graphicsCardSubbed?.map((gCard) => (
          <Grid item xs={12} onClick={() => {
            router.push(`/graphicsCard/${gCard._id}`);
          }}>
            <Paper className={classes.paper}>{chatroom.name}</Paper>
          </Grid>
        ))}
      </Grid>
    </ProfileContainer>
  );
};

ProfilePage.getInitialProps = async function ({ req, res, query }) {
  const { username: username } = query;
  return { username };
};

export default ProfilePage;
