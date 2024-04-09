/*
Ada satu fungsi dalam JavaScript yang digunakan untuk menjadwalkan pemanggilan sebuah kode sekaligus membuatnya berjalan secara asynchronous, yakni setTimeout(). Fungsi tersebut menerima dua argumen dengan penjelasan berikut.

Argumen pertama merupakan sebuah fungsi yang akan dipanggil secara terjadwal dan asynchronous.
Argumen kedua merupakan delay waktu dalam satuan milisecond yang menentukan delay dari pemanggilan fungsi pada argumen pertama.
Inilah contoh dari penggunaan fungsi setTimeout().
*/
console.log('Selamat datang!');
 
setTimeout(() => {
  console.log('Terima kasih sudah mampir, silakan datang kembali!');
}, 3000)
 
console.log('Ada yang bisa dibantu?');

/*
Jika kita terbiasa dengan pola synchronous, wajar bila kita menganggap output pada console memiliki urutan sebagai berikut.

Mencetak → Selamat datang!
Menunggu selama tiga detik.
Mencetak → Terima kasih sudah mampir, silakan datang kembali!
Mencetak → Ada yang bisa dibantu?
Namun, nyatanya setTimeout() tidak akan menghentikan JavaScript untuk mengeksekusi kode pada baris berikutnya. Jadi, urutannya seperti ini.

Mencetak →  Selamat datang!
Mencetak → Ada yang bisa dibantu?
Menunggu selama tiga detik.
Mencetak → Terima kasih sudah mampir, silakan datang kembali!
*/