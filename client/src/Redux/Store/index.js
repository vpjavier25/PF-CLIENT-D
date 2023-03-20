import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../Slicers/projectSlicer';
import usersSlicer from '../Slicers/userSlicer';

export const Store = configureStore({
    reducer: {
        project: projectReducer,
        user: usersSlicer
    }
});

