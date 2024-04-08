/**
 * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
 * mendeteksi jenis segitiga berdasarkan nilai argumen.
 * Contoh:
 *  - 1, 1, 1 -> Segitiga sama sisi
 *  - 4, 4, 2 -> Segitiga sama kaki
 *  - 3, 4, 6 -> Segitiga sembarang
 *
 * Namun fungsi detectTriangle belum berjalan dengan baik karena
 * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
 * Contoh:
 *  - 1, false, 1 -> Segitiga sembarang
 *  - 'a', 3, 5 -> Segitiga sembarang
 *  - 12, 2, null -> Segitiga sembarang
 * Kondisi yang diharapkan:
 *  - 1, false, 1 -> Argumen kedua harus number
 *  - 'a', 3, 5 -> Argumen pertama harus number
 *  - 12, 2, null -> Argumen ketiga harus number
 *
 *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
 *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
 *
 * TODO 1:
 * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
 *   - Turunan dari class Error
 *   - Memiliki constructor(message)
 *   - this.name harus bernilai "ValidationError"
 *
 * TODO 2:
 * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
 *   - Menerima 3 argumen
 *   - Bila argumen pertama bukan number:
 *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
 *   - Bila argumen kedua bukan number:
 *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
 *   - Bila argumen ketiga bukan number:
 *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
 *
 * TODO 3:
 * - Panggil fungsi validateNumberInput di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
 *   - pastikan Anda memanggil validateNumberInput menggunakan try .. catch.
 *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateNumberInput.
 */

// TODO 1
class ValidationError extends Error { // Custom ValidationError class extends the built-in Error class
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    }
}

// TODO 2
const validateNumberInput = (a, b, c) => {
    if (typeof(a) !== 'number') {
        throw new ValidationError("Argumen pertama harus number");
    }
    if (typeof(b) !== 'number') {
        throw new ValidationError("Argumen kedua harus number");
    }
    if (typeof(c) !== 'number') {
        throw new ValidationError("Argumen ketiga harus number");
    }
};

const detectTriangle = (a, b, c) => {
    // TODO 3
    try {
        validateNumberInput(a, b, c);
    } catch (error){
        return `${error.message}`;
    }
    
    if (a === b && b === c) {
        return 'Segitiga sama sisi';
    }
    if (a === b || a === c || b === c) {
        return 'Segitiga sama kaki';
    }
    return 'Segitiga sembarang';
};


// Example 1
const result1 = detectTriangle(1, 1, 1);
console.log(result1); // Expected: Segitiga sama sisi

// Example 2
const result2 = detectTriangle(4, 4, 2);
console.log(result2); // Expected: Segitiga sama kaki

// Example 3
const result3 = detectTriangle(3, 4, 6);
console.log(result3); // Expected: Segitiga sembarang

// Example 4 - Invalid inputs
try {
  const result4 = detectTriangle(1, false, 1);
  console.log(result4);
} catch (error) {
  console.log(`Error: ${error.message}`); // Expected: Argumen kedua harus number
}

// Example 5 - Invalid inputs
try {
  const result5 = detectTriangle('a', 3, 5);
  console.log(result5);
} catch (error) {
  console.log(`Error: ${error.message}`); // Expected: Argumen pertama harus number
}

// Example 6 - Invalid inputs
try {
  const result6 = detectTriangle(12, 2, null);
  console.log(result6);
} catch (error) {
  console.log(`Error: ${error.message}`); // Expected: Argumen ketiga harus number
}