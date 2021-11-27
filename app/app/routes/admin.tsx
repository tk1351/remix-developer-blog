import React from 'react'
import { Link, Outlet, useLoaderData } from 'remix'
import { getPosts, Post } from '~/post'
import adminStyles from '~/styles/admin.css'

export let loader = () => {
  return getPosts()
}

export let links = () => {
  return [{ rel: 'stylesheet', href: adminStyles }]
}

const Admin = () => {
  let posts = useLoaderData<Post[]>()
  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Admin
