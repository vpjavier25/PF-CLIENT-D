import Cookie from "js-cookie";
import axios from "axios";

// Default config options


    const defaultOptions = {
        baseURL: "http://localhost:3001",
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Create instance
    export let instance = axios.create(defaultOptions);

    // Set the AUTH token for any request
    instance.interceptors.request.use(function (config) {
        const token = Cookie.get('token');
        config.headers.Authorization = `Bearer ${token}`
        return config;
    });
