import _ from 'lodash';

import _ from 'lodash';
 
const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);
 
console.log(sum);
 
/* output
10
*/

/*
Penamaan menggunakan underscore (_) seperti di atas merupakan standar dari lodash yang perlu kita ikuti.
Sekarang mari kita lihat bagaimana lodash ini bekerja. Di dalam dokumentasinya, lodash menyebutkan bahwa 
mereka menyediakan utilitas untuk membuat JavaScript lebih mudah dengan menghilangkan kerumitan ketika 
menggunakan array, number, object, string, dll.

Menggunakan for loop:
```
const myArray = [1, 2, 3, 4];
let sum = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
 
console.log(sum); // Output: 10
```

Atau menggunakan fungsi reduce:
```
const myArray = [1, 2, 3, 4];
let sum = myArray.reduce((prev, curr) => {
    return prev + curr;
});
 
console.log(sum); // Output: 10

Menggunakan lodash lebih ringkas
```

*/