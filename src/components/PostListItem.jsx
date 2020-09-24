import React from 'react';

const PostListItem = (props) => {
  const { posts } = props
  return (
    <tbody>
      {
        posts.map(post => {
          const { title, id } = post
          return (
            <tr key={id}>
              <td>
                {title}
              </td>
              <td><button className="btn btn-danger">Supprimer</button></td>
            </tr>
          )
        })
      }
    </tbody>
  )

};

export default PostListItem;