import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { readAllPost } from '../actions/index'

import PostListItem from '../components/PostListItem'

class PostList extends Component {
  componentWillMount() {
    this.props.readAllPost()
  }

  render() {
    return (
      <div>
        <h1>Liste des posts</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Action</th>
            </tr>
          </thead>
          <PostListItem posts={this.props.posts} />
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ readAllPost }, dispatch)
// }
function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({ readAllPost }, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
