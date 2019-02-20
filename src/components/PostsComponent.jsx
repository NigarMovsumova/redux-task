import React from "react";
import {connect} from "react-redux";
import {formPostsComponent} from "../actions";
import axios from "axios";
import LoadingComponent from "./LoadingComponent";

class PostsComponent extends React.Component {

    async componentDidMount() {
        const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.props.formPostsComponent(posts.data);
    }

    createContent() {
        return (
            <div>
                <table className="ui inverted grey table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.posts.map(post => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        if (this.props.posts === null) {
            return <LoadingComponent/>;
        }
        return (
            <div>
                <h2>Posts List Component</h2>
                {this.createContent()}
            </div>
        );
    }
}

export default connect((state)=> ({posts:state.posts}), {formPostsComponent})(PostsComponent);