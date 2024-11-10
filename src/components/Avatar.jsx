import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({ size }) => {
    const { user, setUser } = useContext(TwitterContext);

    const chengAvatar = () => {
        const newAvatarUrl = prompt("Enter a new URL for the avatar:");
        if (newAvatarUrl) {
            setUser((prevUser) => ({
                ...prevUser,
                avatar: newAvatarUrl
            }));
        }
    };

    return (
        <img
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
            onClick={chengAvatar}
        />
    );
};

export default Avatar;