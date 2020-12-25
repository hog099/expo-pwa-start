export function registerPushToken(data) {
  return {
    type: '@user/SEND_REGISTER_TOKEN_PUSH_NOTIFICATION',
    payload: data,
  };
}


export function getUserDataRequest(payload) {
  return {
    type: '@user/GET_USERDATA_REQUEST',
    id: payload.id,
    token: payload.token
  };
}

export function getUserDataSuccess(data) {
  return {
    type: '@user/GET_USERDATA_SUCCESS',
    payload: data,
  };
}


export function verifyUserNameRequest(id_user, token, username) {
  return {
    type: '@user/VERIFY_USERNAME_REQUEST',
    payload: { id_user, token, username },
  };
}

export function verifyUserNameSuccess(message) {
  return {
    type: '@user/VERIFY_USERNAME_SUCCESS',
    payload: message,
  };
}

export function verifyUserNameFailure(message) {
  return {
    type: '@user/VERIFY_USERNAME_FAILURE',
    payload: message,
  };
}


export function clearVerifyUserName() {
  return {
    type: '@user/CLEAR_VERIFY_USERNAME',
  };
}



export function userUpdateEmailRequest(token, data) {
  return {
    type: '@user/USER_CHANGEEMAIL_REQUEST',
    token: token,
    values: data,
  };
}


export function userUpdatePasswordRequest(token, data) {
  return {
    type: '@user/USER_CHANGEPASSWORD_REQUEST',
    token: token,
    values: data,
  };
}

// export function userUpdateEmailSuccess(data) {
//     return {
//       type: '@user/USER_CHANGEEMAIL_SUCCESS',
//       payload: {token},
//       values: data,
//     };
//   }


export function userUpdateRequest(userLogged, token, data) {
  return {
    type: '@user/USER_UPDATE_REQUEST',
    token,
    userLogged,
    values: data,
  };
}

export function userUpdateSuccess(user) {
  return {
    type: '@auth/UPDATED_USER_SUCCESS',
    payload: { user },
  };
}





export function getAddressRequest(cep) {
  return {
    type: '@user/GET_ADDRESS_REQUEST',
    payload: cep,
  };
}

export function getAddressSuccess(data) {
  return {
    type: '@user/GET_ADDRESS_SUCCESS',
    payload: data,
  };
}


export function getCitiesRequest(uf) {
  return {
    type: '@user/GET_CITIES_REQUEST',
    payload: uf,
  };
}

export function getCitiesSuccess(data) {
  return {
    type: '@user/GET_CITIES_SUCCESS',
    payload: data,
  };
}

export function getStatesRequest() {
  return {
    type: '@user/GET_STATES_REQUEST'
  };
}

export function getStatesSuccess(data) {
  return {
    type: '@user/GET_STATES_SUCCESS',
    payload: data,
  };
}








export function changeLoadingOn() {
  return {
    type: '@loading/LOADING_ON',
    payload: true
  };
}

export function changeLoadingOff() {
  return {
    type: '@loading/LOADING_OFF',
    payload: false
  };
}

