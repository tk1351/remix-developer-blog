import React from 'react'
import { LoaderFunction, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'
import { getPost } from '~/post'

export let loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug')
  return getPost(params.slug)
}

const PostSlug = () => {
  let post = useLoaderData()
  return <div dangerouslySetInnerHTML={{ __html: post.html }} />
}

export default PostSlug
