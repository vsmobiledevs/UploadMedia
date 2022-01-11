import {authHeader} from '../utils/constants';
import {getData, postData, putData} from '../services/apiServices';

export const get = async (url, token = authHeader, params) => {
  return getData.get(url, {headers: token}, {params: {...params}});
};

export const post = async (url, params, token = authHeader) => {
  return await postData.post(url, params, {headers: token});
};

export const put = async (url, params) => {
  return await putData.put(url, {...params});
};
