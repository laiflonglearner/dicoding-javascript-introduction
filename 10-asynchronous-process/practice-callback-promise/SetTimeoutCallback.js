function getUsers(isOffline, callback) {
    // simulate network delay for 3000ms/3s
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
      /*
      Offline Check:
      - If isOffline is true, it means the app is offline.
      - In this case, the function calls the callback function with an error and null as the user data.
      - The error passed is an instance of Error with the message 'cannot retrieve users due offline'.
      */
      if (isOffline) {
        callback(new Error('cannot retrieve users due offline'), null);
        return;
      }
      /*
      Online Case:
      - If isOffline is false, it means the app is online.
      - The function calls the callback function with null as the error (indicating no error) 
        and the users array as the data.
      */
      callback(null, users);
    }, 3000);
  }
   
  function usersCallback(error, users) {
    if (error) {
      console.log('process failed:', error.message);
      return;
    }
    console.log('process success:', users);
  }
   
  getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
  getUsers(true, usersCallback); // process failed: cannot retrieve users due offline

  /*
  Seiring kompleksnya pengembangan aplikasi, kita akan semakin banyak menggunakan fungsi yang berjalan 
  secara asynchronous. Tidak jarang kita perlu mengagregasikan banyak data dari berbagai proses asynchronous. 
  Masalah akan timbul ketika sebuah proses asynchronous perlu dijalankan setelah tahapan serupa lainnya selesai.

  masalah yang berhubungan dengan readability code adalah masalah yang serius. Saking seriusnya, masalah ini dikenal 
  sebagai callback hell atau pyramid of doom. Pola callback dapat digunakan pada bahasa pemrograman apa pun, begitu 
  juga masalah yang dihasilkan olehnya. Beruntunglah di JavaScript terdapat cara lain dalam menangani proses asynchronous
  lebih baik lagi dengan menggunakan **Promise**. Ia dapat membuat kode kita lebih mudah dibaca dibanding callback. 
  */