import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user}= useContext(TwitterContext);

    const avatarReplacement = () => {
        const newAvatarUrl = prompt("\n" + "Enter the URL for your avatar:");
        if (newAvatarUrl) {
            setUser((prevUser) => ({
                ...prevUser,
                avatar: newAvatarUrl
            }));
        }
    };

    return (
        <img className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
             alt={user.name}
             onClick={avatarReplacement}
        />
    );
}

export default Avatar;