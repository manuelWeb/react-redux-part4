import React from 'react';

const PostListItem = (props) => {
  const { post, key } = props

  return (
    <tr key={key}>
      <td>{post.title}</td>
      <td><button className="btn btn-danger">Supprimer</button></td>
    </tr>
  );

};

export default PostListItem;