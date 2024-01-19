import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './Userslice'
export default configureStore({
    reducer:{
        user:UserReducer,
    }
})