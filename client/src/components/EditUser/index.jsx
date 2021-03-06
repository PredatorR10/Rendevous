import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as userService from "../../api/user.service";
import * as authService from "../../api/auth.service";
import "./index.css";

const EditUser = (props) => {
   
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [gitHub, setGitHub] = useState("");
    const [youTube, setYouTube] = useState("");
    const [avatar, setAvatar] = useState("");
    const navigate = useNavigate();
    let {id} = useParams();

    const HandleSubmit = async () => {
        const updatedUser = new FormData();
        updatedUser.append("userName", userName);
        updatedUser.append("name", name);
        updatedUser.append("email", email);
        updatedUser.append("bio", bio);
        updatedUser.append("gitHub", gitHub);
        updatedUser.append("youTube", youTube);
        updatedUser.append("avatar", avatar);
        //{userName, name, email, bio, gitHub, youTube, avatar}
         await userService.updateUser(props.user._id, updatedUser);
        navigate(`/users/${id}`);
    }

    const deleteProfile = async () => {
        let res = await userService.destroyUser(props.user._id).then(() => {
            authService.logout();
            navigate('/');
        });
        console.log(res);
    }

    useEffect(() => {
        setUserName(props.user.userName);
        setName(props.user.name);
        setEmail(props.user.email);
        setBio(props.user.bio);
        setGitHub(props.user.gitHub);
        setYouTube(props.user.youTube);
    }, [props]);
    console.log(props.user)
    return(
        <>
        <div className="profileform-Container">
        <div className="profile-Edit-Container">
        <h1 className="editprof-title">Edit Your Profile</h1>

            <form encType="multipart/form-data" className="editprof-form" autocomplete="off">
                <label><h2 className="editprof-headers">Username:</h2>
                &nbsp;&nbsp;&nbsp;
                    <input className="editprof-username"
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        value={userName}
                    />
                </label>
                <br />
                <label><h2 className="editprof-headers">Name:</h2>
                &nbsp;&nbsp;&nbsp;
                    <input className="editprof-name"
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        value={name}
                    />
                </label>
                <br />
                <label><h2 className="editprof-headers">Email:</h2>
                &nbsp;&nbsp;&nbsp;
                    <input className="editprof-email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        value={email}
                    />
                </label>
                <br />
                <label><h2 className="editprof-headers">Bio:</h2>
                &nbsp;&nbsp;&nbsp;
                    <input className="editprof-bio"
                        onChange={(e) => setBio(e.target.value)}
                        type="text"
                        value={bio}
                    />
                </label>
                <br />
                <label><h2 className="editprof-headers">GitHub:</h2>
                &nbsp;&nbsp;&nbsp;
                    <input className="editprof-github"
                        onChange={(e) => setGitHub(e.target.value)}
                        type="text"
                        value={gitHub}
                    />
                </label>
                <br />
                <label><h2 className="editprof-headers">YouTube:</h2>
                &nbsp;&nbsp;&nbsp;
                    <input className="editprof-youtube"
                        onChange={(e) => setYouTube(e.target.value)}
                        type="text"
                        value={youTube}
                    />
                </label>
                <br />
                <label><h2 className="editprof-headers">Avatar</h2>
                &nbsp;&nbsp;&nbsp;
                    <input
                        onChange={(e) => setAvatar(e.target.files[0])}
                        filename="image"
                        type="file"
                    />
                </label>
            </form>
            <button onClick={HandleSubmit} className="editprof-button">Edit</button>
            <button onClick={deleteProfile} className="editprof-delete">Delete Profile</button>
        </div>
        </div>
        </>
    
    )
};

export default EditUser;