import { sum } from './lib.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const span = document.getElementById('result-sum');

span.innerText = sum(2, 2);

console.log(1 + 1);
