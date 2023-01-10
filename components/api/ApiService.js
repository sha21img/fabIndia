import API from './ApiCalls';
import API2 from './ApiCalls2'; // For Admin pannel 2 api call
import * as ApiConstants from './ApiConstants'
// import { Constants } from '../util';

const getHomeData = (data) => {
    return API2(
        {
            method: 'GET',
            url: ApiConstants.GET_HOME_DATA,
            data
        }
    );
}

const getPagesData = (data) => {
    return API(
        {
            method: 'GET',
            url: ApiConstants.BASE_SITE_ID + ApiConstants.GET_PAGES,
            data
        }
    );
}

const getProductList = (params) => {
    return API(
        {
            method: 'GET',
            url: ApiConstants.BASE_SITE_ID + ApiConstants.GET_PRODUCT_LIST,
            params
        }
    );
}

const registerUser = (data) => {
    return API(
        {
            method: 'POST',
            url: ApiConstants.REGISTER_USER,
            data
        }
    );
};

const loginUser = (data) => {
    return API(
        {
            method: 'POST',
            url: ApiConstants.LOGIN_USER,
            data
        }
    );
};

const requestOTP = (data) => {
    return API(
        {
            method: 'POST',
            url: ApiConstants.REQUEST_OTP,
            data
        }
    );
};

const validateOTP = (data) => {
    return API(
        {
            method: 'POST',
            url: ApiConstants.VALIDATE_OTP,
            data
        }
    );
};

const getUserDetail = (data) => {
    return API(
        {
            method: 'POST',
            url: ApiConstants.GET_USER_DETAILS,
            data
        }
    );
};

export const ApiService = {
    getHomeData,
    getPagesData,
    getProductList,


    registerUser,
    loginUser,
    requestOTP,
    validateOTP,
    getUserDetail
};