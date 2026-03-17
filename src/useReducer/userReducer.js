import { userRegistration, userUpdate, userDeletion, userSetList } from './userActions.js'

export const userReducer = (state = [], action) => {

    switch (action.type) {

        case userRegistration:
            return [...state,
            {
                producto: action.payload,
                cantidad: 1
            }
            ];

        case userUpdate:
            if (!action.payload?.id) {
                return state;
            }

            return state.map((user) =>
                user.id === action.payload.id ? { ...user, ...action.payload } : user
            );

        case userSetList:
            return action.payload || [];


        case userDeletion:
            return state.filter((user) => user.id !== action.payload);

        default:
            return state;
    }

}