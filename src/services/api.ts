import axios from 'axios';
import { store } from '../store/index';

// import { format, addDays } from 'date-fns';
// import pt from 'date-fns/locale/pt';

const api = axios.create({
    // baseURL: 'http://192.168.1.66:3333',
    baseURL: 'http://3.15.222.46:3333',
      // baseURL: 'https://newapiachados.herokuapp.com',
      // baseURL: 'http://api.achadosapp.com',
    timeout: 2000,
    validateStatus: function (status) {
        switch (status) {
            case 400:
                // alert('Erro 400, Solitação Inexistente!');
            case 403:
                // alert('Erro 403, Usuário sem Autorização!');
            case 404:
                // alert('Erro 404, Solitação Não Encontrada!');
            case 500:
                // alert('Erro 500, Servidor Offline!');
    }
    return status >= 200 && status < 300; // default
  },
});


api.interceptors.request.use(
  async config => {
    let url = await store.getState().config.server;
    if (url) {
      config.baseURL = url;
    }

    // const dateToday = format( new Date(), "yyyy-MM-dd H:mm:ss", { locale: pt } );
    // const dateMigration = format( new Date("2020-09-05"), "yyyy-MM-dd H:mm:ss", { locale: pt } );

    // if(dateToday < dateMigration){
    //   console.log("URL ANTIGA");
    // }else{
    //   console.log("URL NOVA");
    // }

    return config;
  },
  error => Promise.reject(error)
);



// api.interceptors.response.use((response) =>{
//     return response;
// }, (error) => {

//     if(error.response.status === 500){
//         alert('Servidor não encontrado')
//         store.dispatch(NavigationActions.navigate({routeName: 'ErrorConection'}))
//     }
//     // const originalRequest = error.config;
//     // if (!error.response) {
//     //    return Promise.reject('Network Error')
//     // }
//     // else if ((error.response.status === 401) && !originalRequest._retry) {
//     //     originalRequest._retry = true;
//     //     return Auth.getToken()
//     //         .then(token => {
//     //             const authTokenResponse = path(['data', 'response'], token)
//     //             api.defaults.headers.common['Authorization'] = 'Bearer ' + authTokenResponse;
//     //             originalRequest.headers['Authorization'] = 'Bearer ' + authTokenResponse;
//     //             return axios(originalRequest);
//     //         })
//     //         .catch(err => err)
//     // } else {
//     //     return error.response
//     // }

// })


export default api;
