import React from "react";
import PostsComponent from "./PostsComponent";
import UsersComponent from "./UsersComponent";

const AppComponent = () => {
    return (
        <div className="ui container" >
            <h1>App Component</h1>
            <br/>
            <PostsComponent />
            <UsersComponent/>
        </div>
    );
};

export default AppComponent;
