const initState = {                                //initState means initialState variable name and there can be multiple varibales that we need to update
    hotelsListing: [],
    isLoading: true,
    error: {},
    filters: {}
};

/*
Missing info
1. type: which types of variable i want to update
2. payload/data : what data should i update?
*/

//action will be equal to no. of variables bcz each variable have one type. 

//  Pasted them in home.jsx file

// const action = {
//     type: "HOTEL_LISTING",
//     payload: [{ name: "ABC", ratings: 5 }, { name: "ABC", ratings: 5 }, { name: "ABC", ratings: 5 }]
// }

// const action2 = {
//     type: "LOADING",
//     payload: false
// }

/* when type is HOTEL_LISTING it wil spread all the modules and then override the hotelListing.

  //spread the modeuls
    hotelsListing: [],
    isLoading: true,
    error: {},
    filters: {}
    
    //After override of the modules
    hotelsListing: [{ name: "ABC", ratings: 5 }, { name: "ABC", ratings: 5 }, { name: "ABC", ratings: 5 }],
    isLoading: true,
    error: {},
    filters: {}

    
    but then again if we pass action2 with type Loading then it wil spread all the modules and then override the
     isLoading but here the previous data of state is removed of hotelListing and its empty again as per
     the initState as it has to be value with the array.
     
    hotelsListing: [],
    isLoading: false,
    error: {},
    filters: {}
     
 */

export const listingReducer = (state = initState, action) => {
    //updation logic for listing object
    //immutable state updates


    // BY switch case if it will be case of hotelsListing then it will update the data of hotelsListing or 
    // if case of loading then it will update the data of loading and so on and if we have 20 differnet 
    // variables in initState then we can write 20 differnet cases so that we cna figure out that from 
    // where the variable is updated 


    //added LISTING_REDUCER: name of reducer function so redux wont confuse and now we can share module
    // like loading for differnet modules also as in start they will have differnet reducer function name

    switch (action.type) {
        case "LISTING_REDUCER:HOTEL_LISTING":
            //hotelListing
            return {
                // ...initState,      
                ...state, //Last Updated State
                hotelsListing: action.payload //new data (payload) to be updated
            }
        case "LISTING_REDUCER:LOADING":
            //isLoading
            return {
                // ...initState,
                ...state, //Last Updated State
                isLoading: action.payload //new data (payload) to be updated
            }
        case "LISTING_REDUCER:FILTERS":
            //filters
            return {
                // ...initState,
                ...state, //Last Updated State
                filters: {} //new data (payload) to be updated
            }
        default:
            return initState;
    }


    // initState.hotelsListing = []          //not possible as its against redux rule as its doing mutation
    // {...initState,                       //thats how we can do it but as there can be different state change so we use switch
    //     hotelsListing: [] 
    // }

    return initState;
};