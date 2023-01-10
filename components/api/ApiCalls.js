import axios from 'axios';
import { Platform } from 'react-native';
import * as ApiConstants from './ApiConstants'
// import DeviceInfo from 'react-native-device-info';
import * as Utility from "../util/Utility"
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Create an Axios Client with defaults
 */
const axiosClient = axios.create({
    baseURL: ApiConstants.BASE_URL,
    timeout: 30000
});

/**
 * Request Wrapper with default success/error actions
 */
const Api = async (
    config = { method: 'GET', params: {}, url: '', isToken },
    customHeader = {}
) => {
    // Success
    const onSuccess = response => {
        // Utility.log('Request Successful==>', response.data);
        if (response && response.status && response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response.data);
        }
    };

    // Error
    const onError = async error => {
        Utility.log('Request Failed==>', error.response);
        if (error && error.response) {
            if (error.response.status && error.response.status === 401) {
                /**
                 * If 401
                 * Clear the token from offline store
                 * and navigate to Initial Stack using Navigation Service
                 */
                return Promise.reject(error.response.data);
            } else {
                // Request was made but server responded with something
                // other than 2xx
                return Promise.reject(error.response.data);
            }
        } else {
            // Something else happened while setting up the request
            // triggered the error
            Utility.log('Error Message:', error.message);
            let data = { message: 'Something went wrong, please try later' }
            if (error.message) {
                data.message = error.message
            }
            return Promise.reject(data);
        }
    };

    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);

    // Append headers
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'api_key': ApiConstants.API_KEY,
        // 'device': await getDeviceHeader(),
        // 'device': Platform.OS,
        // 'device-Id': DeviceInfo.getUniqueId(),
        // 'device-brand': DeviceInfo.getBrand(),
        // 'device-model': DeviceInfo.getModel(),
        // 'device-version': DeviceInfo.getSystemVersion(),
        // 'build-numver': DeviceInfo.getBuildNumber(),
        // 'app-version': Platform.OS == 'android' ? DeviceInfo.getVersion() : ApiConstants.IOS_VERSION,
        // 'Authorization': `${getToken.token_type} ${getToken.access_token}`,
        ...customHeader
    };
    if (isToken)
        headers['Authorization'] = `${getToken.token_type} ${getToken.access_token}`
    Utility.log('Axios Headers', headers);
    // Set headers
    axiosClient.defaults.headers = headers;
    Utility.log('Request Headers', axiosClient.defaults.headers);
    Utility.log('Request Configurations', config);
    Utility.log('Request URL', config.url);
    return axiosClient(config)
        .then(onSuccess)
        .catch(onError);
};

export default Api;