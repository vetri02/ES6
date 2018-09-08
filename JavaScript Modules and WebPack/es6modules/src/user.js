import slug from 'limax';
import {url} from './config';
import base64 from 'base-64';

export default function User(name, email, website) {
    return {
        name, email, website
    }
}

export function createURL(name) {
    return `${url}/users/${slug(name)}`
}

export function gravatar(email) {
    const hash = base64.encode(email);
    const photoURl = `http://www.gravatar.com/avatar/${hash}`
    return photoURl;
}

