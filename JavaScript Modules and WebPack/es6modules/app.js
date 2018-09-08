import {uniq} from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, uno as onu, deffer, fed } from './src/config';
import User, {createURL, gravatar} from './src/user';

const vetri = new User('vetri', 'vetri02@gmail.com', 'thetascript.com')
const profile = createURL(vetri.name)
const image = gravatar(vetri.email)



console.log(vetri)
console.log(profile)
console.log(image)

console.log(onu)

console.log(deffer)

const ages = [1,2,3,12,1,2,3];

console.log(uniq(ages))