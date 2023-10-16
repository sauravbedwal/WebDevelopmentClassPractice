// import { createStore } from "redux"; //Old deprecated method to create store
import { configureStore } from "@reduxjs/toolkit"; //correct and new method to create store
import { listingReducer } from "../reducers/listingReducer";
import { detailsReducer } from "../reducers/detailsReducer";

//Store is just a plain js object

/*changed the code to make it more clean as doing the same code  */

// const store = configureStore({
//     reducer: {
//         listing: {},
//         details: {},
//         cart: {},
//         checkout: {}
//     }
// });


// export default store;

// ------------------------------------------------------

// const combinedReducers = {
//         listing: {},
//         details: {},
//         cart: {},
//         checkout: {}
// };

// const store = configureStore({
//     reducer: combinedReducers
// });

// export default store;

// ------------------------------------------------------

// const combinedReducers = {
//     listing: {
//         hotelsListing: [],
//         isLoading: true
//     },
//     details: {},
//     cart: {
//         items: [],
//         cartExpiryTime: ''
//     },
//     checkout: {}
// };

// const store = configureStore({
//     reducer: combinedReducers
// });

// export default store;

// ------------------------------------------------------

// const listingReducer = () => {
//     //updation logic for listing object
//     return {
//         hotelsListing: [],
//         isLoading: true
//     }
// };

// const detailsReducer = () => {
//     return {
//         hotelName: "",
//         roomNos: [],
//         amenities: []
//     }
// };

// const combinedReducers = {
//     listing: listingReducer(),
//     details: detailsReducer(),
// };

// const store = configureStore({
//     reducer: combinedReducers
// });

// export default store;

// ------------------------------------------------------

const combinedReducers = {
    listing: listingReducer,
    details: detailsReducer,
};

const store = configureStore({
    reducer: combinedReducers
});

export default store;
