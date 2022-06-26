// actions for changing the intro info and adding, editing, and deleting posts

let id = 1
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const ADD_URL = 'ADD_URL'
export const ADD_DES = 'ADD_DES'

export const addUrl = url => ({
  type: ADD_URL,
  url
})

export const addDes = description => ({
  type: ADD_DES,
  description
})

export const addPost = (title, url, description) => ({
  type: ADD_POST,
  id: id++,
  title,
  url,
  description
})

export const deletePost = id => ({
  type: DELETE_POST,
  id
})

export const editPost = (id, title, url, description) => ({
  type: EDIT_POST,
  id,
  title,
  url,
  description
})
