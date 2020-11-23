axios.defaults.baseURL = 'https://developer.duyiedu.com/vue/bz';

axios.interceptors.response.use((response) => {


    // console.log(response);

    const {status} = response;

    if (status === 200) {

        console.log(response);

        return response.data;
    }

    return response;
});
