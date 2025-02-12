//1. In Google search: "youtube data api key"; 2. In Google search: "youtube data api overview"
//Log In with my Google account (gmail)
/* export const API_KEY = 'AIzaSyCNad1lqYpj5d88B-6lhh8kTlsIpLGKm-s'; //Project name: YouTUbe Clone */
export const API_KEY = 'AIzaSyAGrfHw_En_GSDsKU4iY5Oqsw4ySNUFkac'; //Project name: YouTUbe Clone 2

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }

}
