import { endpoint } from 'endpoints/constants';
export const urlExtractor = (url) => url.split(endpoint)[1];
