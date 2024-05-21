// import { legacy_createStore as createStore } from 'redux'
import { Store, configureStore } from '@reduxjs/toolkit' 

import reducer from './reducer';

// const store = createStore(
//     reducer, {}
// )

const store = configureStore({
    reducer: reducer
})

export default store;