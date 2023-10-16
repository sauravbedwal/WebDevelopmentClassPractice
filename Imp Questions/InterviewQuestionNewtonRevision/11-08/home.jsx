import { useDispatch } from "react-redux";

// to send action to reducer we have to use Dispatch hook

const dispatch = useDispatch();

const hotelListAction = {
  type: "LISTING_REDUCER:HOTEL_LISTING",
  payload: [
    { name: "ABC", ratings: 5 },
    { name: "ABC", ratings: 5 },
    { name: "ABC", ratings: 5 },
  ],
};

const hotelListLoadingAction = {
  type: "LISTING_REDUCER:LOADING",
  payload: false,
};

dispatch(hotelListAction);
dispatch(hotelListLoadingAction);
