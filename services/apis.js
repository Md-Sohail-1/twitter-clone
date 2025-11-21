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