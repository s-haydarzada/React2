import { POST_ADDED, POST_REMOVED } from "../actions/ActionTypes/index";

const initialState = {
    basket: [],
    count: 0

};

const addCarts = (state = initialState, action) => {
    // console.log(state);
    switch (action.type) {
        case POST_ADDED:
            //obj qebul etdik-action payloada gore
            //stati update edirik
            console.log(action.payload);
            const bag = [...state.basket];
            bag.push(action.payload);
            // console.log(bag);

            return state.basket = [...bag];


        // return [
        //     ...bag;
        //     action.payload
        // ];
        // return [

        // //   ...state,
        // //   action.payload

        // ];

        case POST_REMOVED:
            return state = state.filter((x) =>
                x.id !== action.payload.id
            );

        default:
            return state;
    }
};


export default addCarts;

