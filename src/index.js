import _ from 'lodash';
import { EMSClient } from '@elastic/ems-client/target/node';

function component() {
    const element = document.createElement('div');

    const emsClient = new EMSClient({appName: 'test'});

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', emsClient.getLocale()], ' ');

    return element;
}

document.body.appendChild(component());