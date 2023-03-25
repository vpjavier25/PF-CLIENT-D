import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../Slicers/projectSlicer';
import usersSlicer from '../Slicers/userSlicer';
import LogInSlicer from '../Slicers/LogInSlicer';

export const Store = configureStore({
    reducer: {
        project: projectReducer,
        user: usersSlicer,
        Login: LogInSlicer,
    }
});

