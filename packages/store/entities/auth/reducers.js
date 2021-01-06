import { initialState } from './state'
import { handleActions } from 'redux-actions'
import { auth, authSuccess, authFail } from './actions'

const reducers = handleActions(
  new Map([
    [
      auth,
      (state) => ({
        ...state,
        isLoading: true,
      }),
    ],
    [
      authSuccess,
      (state, action) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      }),
    ],
    [
      authFail,
      (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload.error,
      }),
    ],
  ]),
  initialState
)

export default { auth: reducers }
