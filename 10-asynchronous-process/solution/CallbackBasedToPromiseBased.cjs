/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */


const { promisify } = require('util');

function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'Jawa Barat' },
      ]);
      return;
    }

    callback(new Error('Country not found'), null);
  }, 1000);
}

// create a Promise version of getProvinces
const getProvincesPromise = promisify(getProvinces);

// Call the Promise version with valid countryId
getProvincesPromise('id') 
  .then(provinces => console.log(provinces)) // [ { id: 'id-jk', name: 'Jakarta' }, { id: 'id-bt', name: 'Banten' }, { id: 'id-jr', name: 'Jawa Barat' } ]
  .catch(err => console.log(err.message));

// // Call the Promise version with invalid countryId
//   getProvincesPromise('idd')
//   .then(provinces => console.log(provinces)) // Country not found
//   .catch(err => console.log(err.message));

module.exports = { getProvinces: getProvincesPromise };