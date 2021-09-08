import Header from "./components/header";
import "./app.scss";
import HeadLine from "./components/headline";
import Button from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    this.props.fetchPosts();
  }
  render() {
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    };
    const { posts } = this.props;
    return (
      <div className="App">
        <Header />
        <section className="main">
          <HeadLine header="Posts" desc="click the button to render posts" />
          <Button {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configList = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configList} />
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
