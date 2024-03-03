import { useState } from 'react';
import axios from 'axios';
import { ContentType } from '@/constants/contentType';

export const useApi = (baseUrl: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = async (endpoint: string, params = {}) => {    
    try {
      console.log(baseUrl)
      setLoading(true);
      const response = await axios.get(`${baseUrl}${endpoint}`, { params });
      setData(response.data);
      return response.data;
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const post = async (endpoint: string, postData: any) => {

    try {
      setLoading(true);
      const response = await axios.post(`${baseUrl}${endpoint}`, postData);
      setData(response.data);
      return response.data;
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const put = async (endpoint: string, putData: any) => {
    try {
      setLoading(true);
      const response = await axios.put(`${baseUrl}${endpoint}`, putData);
      setData(response.data);
      return response.data;
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  
  const deleteRequest = async (endpoint: string) => {
    try {
      setLoading(true);
      const response = await axios.delete(`${baseUrl}${endpoint}`);
      setData(null);
      return true;
    } catch (error: any) {
      setError(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, get, post, put, del: deleteRequest };
};