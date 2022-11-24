import {configureStore} from '@reduxjs/toolkit'
import booksSlicer from './books'


export const store =configureStore({
    reducer:{

        books:booksSlicer
    }
})


