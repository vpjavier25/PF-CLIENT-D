import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../Slicers/projectSlicer';
import usersReducer from '../Slicers/userSlicer';
import logInReducer from '../Slicers/LogInSlicer';

export const Store = configureStore({
    reducer: {
        project: projectReducer,
        user: usersReducer,
        login: logInReducer,
    }
});

