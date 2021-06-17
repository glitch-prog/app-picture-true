import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
        fetch(url)
        .then(response => response.json())
            .then(json => this.setState({posts: json}))
    }

    render() {
        const { posts } = this.state;
        return (
            <div className="container">
                {posts.map((post) => (
                    <div className="img" key={post.id}>
                        <div className="imgText">
                            #{post.id} {post.title}
                        </div>
                        <div className="body">
                            <img src={post.thumbnailUrl}></img>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default App;