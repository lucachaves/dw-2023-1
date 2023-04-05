// String ', ", `
let ip = '192.168.0.1';
// ip = "192.168.0.1";
ip = `192.168.0.1`;

// Concat
// IP: 192.168.0.1
// Mask: 255.255.255.0
const mask = '255.255.255.0';
ip = '192.168.0.1';
console.log('IP: ' + ip + '\nMask: ' + mask);

console.log(1 + 1); // => 2

console.log(1 + '1'); // => 11

console.log(1 + Number('1')); // => 2

// Template literals / Template strings
// multi-line strings
// string interpolation
console.log(`IP: ${ip}
Mask: ${mask}`);

// Array of characthers
const hostname = 'desktop01';

console.log(hostname[0]); // => d

hostname[0] = 'D';

console.log(hostname); // => desktop01 (immutable)

// Object String

// String.length
console.log('desktop01'.length); // => 9

// String.split / Array.join
const name = 'John Doe';

const words = name.split(' ');

console.log(words); // => [ 'John', 'Doe' ]

words.join(' '); // => 'John Doe'

// String.toLowerCase
console.log('John Doe'.toLowerCase()); // => 'john doe'

// String.includes
const host = `IP: 192.168.0.1
Mask: 255.255.255.0`;

console.log(host.includes('255.255.255')); // => true

// String.match
console.log(host.match(/\d{1,3}(\.\d{1,3}){3}/g)); // => ['192.168.0.1', '255.255.255.0']

// String.padStart
// DSK01LB65-JP
const desktopNumber = String(1).padStart(3, '0');
const laboratoryNumber = String(65).padStart(3, '0');
console.log(`DSK${desktopNumber}LB${laboratoryNumber}-JP`); // => DSK001LB065-JP
