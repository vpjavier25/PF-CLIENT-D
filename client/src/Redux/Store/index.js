import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../Slicers/projectSlicer';

export const Store = configureStore({
    reducer: {
        project: projectReducer,
    }
});

