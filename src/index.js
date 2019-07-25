import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import _ from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // alleen bij ready to use - css
import './index.scss';
import 'jquery';
import 'popper.js';

import FotoGRWH from './GRWH94.png';

const heading = new Heading();
heading.render('xxx');
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}
console.log(_.upperFirst('index.js module'));
