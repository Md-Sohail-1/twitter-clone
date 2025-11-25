import BASE_URL from './helper';
import commonRequest from './axiosCall';

export const getPosts = async () => {
  return await commonRequest(`${BASE_URL}/posts`, 'GET', '', '')
}
export const getUsers = async () => {
  return await commonRequest(`${BASE_URL}/users`, 'GET', '', '')
}
export const getUserPosts = async (id) => {
  return await commonRequest(`${BASE_URL}/users/${id}/posts`, 'GET', '' ,'');
}
export const getUser = async (id) => {
  return await commonRequest(`${BASE_URL}/users/${id}`, 'GET', '', '')
}
export const postTweet = async (body, header) => {
  return await commonRequest(`${BASE_URL}/posts`, 'POST', body, header)
}
export const getPostById = async (id) => {
  return await commonRequest(`${BASE_URL}/posts/${id}`, 'GET', '', '')
}
export const getPostComments = async (id) => {
  return await commonRequest(`${BASE_URL}/posts/${id}/comments`, 'GET', '', '')
}