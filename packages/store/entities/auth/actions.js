import { createAction } from 'redux-actions'

const auth = createAction('AUTH')
const authSuccess = createAction('AUTH_SUCCESS')
const authFail = createAction('AUTH_FAIL')

export { auth, authSuccess, authFail }
