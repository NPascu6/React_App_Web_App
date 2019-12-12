import {
    CHANGE_TAB
} from '../constants/action_types'

const initialState = {
    isActive: true,
    nextTab: 'Users'
};

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                ...state,
                isActive: !state.isActive,
                nextTab: action.payload
            }

        default:
            return state;
    }
}

export default navigationReducer;