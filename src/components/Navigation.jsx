import Avatar from "./Avatar.jsx";

const Navigation = (user) => {
    return (
        <div className={'nav'}>
            user=
            <Avatar user={user} size={'small'}/>
        </div>
    );
};

export default Navigation;