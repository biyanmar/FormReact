import { isEmpty, trim } from 'lodash';
import get from 'lodash/get';


export const isEmptyString = value => (value ? isEmpty(trim(value)) : false);

export const getResponseMessage = (res, defaultMessage = null) => {
    let message = get(res, ['response', 'data', 'message']);
    if (message) {
        return message;
    }
    message = get(res, ['data', 'success', 'message']);
    if (message) {
        return message;
    }
    return defaultMessage;
  };

export const numberWithCommas = numString => (numString ? numString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '-');

export const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(aia)\.com$/i;
    return regex.test(email);
};
