// import  from '../../styles/pages/Profile/index.style.js';
import Button from "@material-ui/core/Button";
import ProfileContainer, {
  StyledTextField,
} from "../../styles/pages/profile/index.style.js";
import { useState, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import Axios from "axios";
import Link from "next/link";

const ProfileSettingsPage = () => {
  const userContext = useContext(UserContext);
  const [bioInput, setBioInput] = useState("");
  const [bio, setBio] = useState(userContext.user.bio);
  const [usernameInput, setUsernameInput] = useState("");
  const [username, setUsername] = useState(userContext.user.username);
  const changeUsername = (e) => {
    e.preventDefault();

    Axios.post(`/user/changeUsername/${userContext.user._id}`, {
      username: usernameInput,
    }).then(({ data }) => {
      setUsername(data.username);
    });
  }
  const changeBio = (e) => {
    e.preventDefault();

    Axios.post(`/user/changeBio/${userContext.user._id}`, {
      bio: bioInput,
    }).then(({ data }) => {
      setBio(data.bio);
    })
  };


  return (
    <ProfileContainer>
      <div className="title">Update Profile</div>
      <u><Link href={`/profile/${username}`}>
        My profile page
      </Link></u>
      <p><b>Bio:</b> {bio}</p>
      <form className="input" noValidate onSubmit={changeBio}>
        <StyledTextField
          id="outlined-basic"
          label="Bio"
          variant="outlined"
          required
          value={bioInput}
          onChange={(event) => setBioInput(event.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Update
        </Button>
      </form>
    </ProfileContainer>
  );
};

export default ProfileSettingsPage;
