
export function signIn() {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function userDataUpdated(data) {
  return {
    type: '@auth/USERDATA_UPDATE',
    payload: data,
  };
}

export function ableAcess(bool) {
    return {
        type: '@auth/ABLEACESS',
        payload: bool
    };
}

export function setCityToAcess(city) {
    return {
      type: '@user/SEARCH_CITY_SUCCESS',
      payload: city,
    };
  }

export function signUpRequest(id_city, name, birthday, accepted_terms_of_use, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { id_city, name, birthday, accepted_terms_of_use, email, password },
  };
}



export function SponCreateRequest(values) {
  return {
    type: '@auth/SIGN_UP_SPON_REQUEST',
    payload: values,
  };
}

// export function SponCreateSuccess(data) {
//   return {
//     type: '@auth/SIGN_UP_SPON_SUCCESS',
//     payload: data,
//   };
// }


export function signFailure(error) {
    return {
      type: '@alert/SIGN_FAILURE',
      payload: {messageAlert: error, colorMessageAlert: 2}
    };
  }

export function signOutRequest() {
  return {
    type: '@auth/SIGN_OUT_REQUEST',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}


export function forgetpasswordRequest(email) {
  return {
    type: '@auth/FORGET_PASSWORD_REQUEST',
    payload: email
  };
}





export function clearAlert() {
    return {
        type: '@alert/CLEAR_ALERT',
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

