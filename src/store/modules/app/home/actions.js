
export function getListBuslineCompany(city) {
    return {
        type: '@home/EVENT_DATA_SUCCESS_REQUEST',
        payload: city,
    };

}
export function functionsuccess(data) {
    return {
        type: '@home/EVENT_DATA_SUCCESS',
        payload: data
    };

}



