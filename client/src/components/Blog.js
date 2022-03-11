import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Blog.module.css'


const Post = props => (
  <tr>
    <td>{props.post.name}</td>
    <td>{props.post.description}</td>
    <td>{props.post.date}</td>
  </tr>
)

export default class PostsList extends Component {
  constructor(props) {
    super(props);

    this.state = {posts: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/posts/')
      .then(response => {
        this.setState({ posts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  

  PostList() {
    return this.state.posts.map(currentpost => {
      return <Post post={currentpost} key={currentpost._id}/>;
    })
  }

  render() {
    const listItems = this.state.posts.map((d) =>
    <div className={styles.post}>
     <div className={styles.post_title}>{d.title}</div>
     <div className={styles.description}>{d.description}</div>
     <div>{(new Date(d.date)).toLocaleDateString()}</div>
    </div>
     );
    return (
      <div>
        <h3 className={styles.title}>Ανακοινώσεις</h3>
          <div className={styles.container}>
            { listItems }
          </div>
      </div>
    )
  }
}