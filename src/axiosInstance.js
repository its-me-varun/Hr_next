// src/axiosInstance.js
import axios from 'axios';

export const  axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/employee', // Replace with your Spring Boot API URL
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});


export const  axiosInstanceChangepassword = axios.create({
    baseURL: 'http://localhost:8080/api/v1/employee', // Replace with your Spring Boot API URL
    headers: {
      'Content-Type': 'application/json',
    },
  });




