import { useState } from 'react';
import axios from 'axios';

export const useApi = (baseUrl: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiClient = axios.create({
    baseURL: baseUrl,
  });

  apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });


  const get = async (endpoint: string, params = {}) => {    
    try {
      setLoading(true);
      const response = await apiClient.get(`${baseUrl}${endpoint}`, { params });
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
      const response = await apiClient.post(`${baseUrl}${endpoint}`, postData);
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
      const response = await apiClient.put(`${baseUrl}${endpoint}`, putData);
      setData(response.data);
      return response.data;
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  return { data, loading, error, get, post, put };
};