import React from 'react'
import { Link, useLoaderData } from 'remix'
import { getPosts, Post } from '~/post'

export let loader = () => {
  return getPosts()
}

const Posts = () => {
  let posts = useLoaderData<Post[]>()
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
