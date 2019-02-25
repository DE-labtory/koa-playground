import axios from 'axios';

const BASE_URL = 'https://koa-playground.appspot.com';
// const BASE_URL = 'http://example.com';
//http://example.com/movies.json

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

class AxiosClient {
    get(url, params = {}) {
        return instance({
            url,
            method: 'GET',
            params: {
                ...params,
            },
            // headers: {
            //     Authorization: TokenStoreService.getToken(),
            // },
        });
    }

    put(url, data) {
        return instance({
            url,
            data,
            method: 'put',
            // headers: {
            //     Authorization: TokenStoreService.getToken(),
            // },
        });
    }

    post(url, data) {
        return instance({
            url,
            data,
            method: 'POST',
            // headers: {
            //     Authorization: TokenStoreService.getToken(),
            // },
        });
    }

    patch(url, data) {
        return instance({
            url,
            data,
            method: 'PATCH',
            // headers: {
            //     Authorization: TokenStoreService.getToken(),
            // },
        });
    }

    delete(url) {
        return instance({
            url,
            method: 'DELETE',
            // headers: {
            //     Authorization: TokenStoreService.getToken(),
            // },
        });
    }

    upload(url, fileData) {
        return axios({
            url: `/api${url}`,
            method: 'post',
            data: fileData,
            // headers: {
            //     'Content-Type': 'multipart/form-data',
            // },
        });
    }
}

export default new AxiosClient();
