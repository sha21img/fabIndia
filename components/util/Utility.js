import { Linking } from 'react-native';
import * as ApiConstants from '../api/ApiConstants'
import Toast from 'react-native-simple-toast';
import { Strings, Colors, Dimens } from '../values'

export function log() {
    if (ApiConstants.CONSOLE_ENABLED) {
        console.log(...arguments);
    }
}

export function showToast(message) {
    Toast.show(message)
}

export function validateEmail(value) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(value) !== false;
}

export function validatePhoneNumber(value) {
    let reg = /^[6-9]\d{9}$/;
    return reg.test(value) !== false;
}

export function validateName(value) {
    let reg = /^[a-zA-Z ]{3,50}$/;
    return reg.test(value) !== false;
}

export function onlyNumeric(text) {
    return text.replace(/[^0-9]/g, '')
}

export function onlyAlphaNumeric(text) {
    return text.replace(/[^0-9a-zA-Z_ ]/g, '')
}

export function isValueNullOrEmpty(value) {
    // log("isValueNullOrEmpty==>" + value)
    let isValue = false;
    if (value === undefined || value == null || value === '' || value === '.' || value === 'null' || value == 0) {
        isValue = true;
    }
    return isValue;
}

export function openExternalUrl(url) {
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            showToast(Strings.PROVIDED_URL_CAN_NOT_BE_OPENED)
        } else {
            return Linking.openURL(url);
        }
    }).catch(err => log('An error occurred==>', err))
}

export function callNumber(mobileNo) {
    log("cal===> ", mobileNo)
    let callingUrl = "tel:" + mobileNo

    Linking.canOpenURL(callingUrl).then(supported => {
        if (!supported) {
            showToast('Can\'t handle url: ' + callingUrl)
        } else {
            return Linking.openURL(callingUrl)
        }
    }).catch(err => log('An error occurred', err))
}