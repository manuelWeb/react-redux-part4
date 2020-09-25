import React from 'react';

const PostListItem = (props) => {
  const { posts } = props
  if (posts.length > 0) {
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
          //   (posts &&
          // ) || null
        }
      </tbody>
    )
  }
  return (
    <tbody><tr>
      <td>Load post</td>
    </tr></tbody>
  )

};

export default PostListItem;