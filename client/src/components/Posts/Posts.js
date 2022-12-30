
import React from 'react'
//import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Post from './Post/Post'
import useStyles from './styles'

const Posts = () => {
  const posts = useSelector((state) => state.posts) // [] -> {posts : []}
  const classes = useStyles();
   console.log(posts);
  return  (
    <>
    <h1>POST</h1>
    <Post />
    <Post/>
    </>
  );
}

export default Posts