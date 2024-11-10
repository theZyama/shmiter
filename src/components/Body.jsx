import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";

const Body = (stats, user) => {
    return (
        <div className={'body'}>
            <Sidebar stats={stats} user={user} />
            <Content/>
        </div>
    );
};

export default Body;