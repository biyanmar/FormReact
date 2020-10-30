import axios from 'axios';
import { BASE_API } from './constants';

export default (
  url,
  method = 'get',
  params = null,
  token = null,
  customConfig = null,
) => {
  let config = {
    method,
    url,
  };
};
