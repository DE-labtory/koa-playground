import axiosClient from '../../utility/axiosClient';

export const compile = ({ payload }) => axiosClient.post('/compile', {Code: payload});

export const deploy = ({ payload }) => axiosClient.post('/deploy', {RawByteCode: payload});

export const run = ({ payload }) => axiosClient.post('/execute',{Address: payload});
