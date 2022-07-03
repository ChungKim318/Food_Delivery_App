import {USER_URL} from './baseUrl';
import axios from 'axios';

const getProfile = async () => {
  try {
    let data = await axios.get(`${USER_URL}`);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export default {
  getProfile,
};
