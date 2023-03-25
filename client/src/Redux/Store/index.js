import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../Slicers/projectSlicer';
import usersSlicer from '../Slicers/userSlicer';
import paymentSlicer from '../Slicers/paymentSlicer';

export const Store = configureStore({
    reducer: {
        project: projectReducer,
        user: usersSlicer,
        paymentLink: paymentSlicer
    }
});

