function getUsers(isOffline) {
    // return a promise object
    /*
    Promise menawarkan penggantinya dengan memanfaatkan resolve dan reject. Dalam kasus yang menyebabkan
    proses asynchronous error, kita bisa bawa error tersebut menggunakan reject, sedangkan pada kasus 
    proses asynchronous berjalan sukses, kita bisa bawa nilai tersebut dengan resolve

    Objek Promise dibuat dengan cara memanggil constructor Promise, yakni new Promise(). Kemudian di dalam
    constructor, Anda wajib memberikan argumen berupa fungsi yang di dalamnya terdapat operasi asynchronous. 
    Fungsi tersebut juga diberikan akses terhadap dua argumen, yaitu resolve dan reject. Kedua argumen ini 
    bisa Anda manfaatkan dalam membawa hasil dari proses asynchronous berupa data ataupun error.
    */
    return new Promise((resolve, reject) => {
  
      // simulate network delay
      setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
      
        if (isOffline) {
          reject(new Error('cannot retrieve users due offline'));
          return;
        }
  
        resolve(users);
      }, 3000);
    });
}
    /*
    Nilai yang dibawa oleh resolve() dapat diambil melalui fungsi .then() dan seketika status Promise akan 
    berubah dari pending ke fulfilled. Di sisi lain, nilai yang dibawa oleh reject() dapat diambil melalui 
    fungsi .catch() dan seketika status Promise akan berubah dari pending ke rejected.
    
    Perhatikan juga bahwa .then() dan .catch() selalu mengembalikan Promise, itulah yang menyebabkan 
    pemanggilannya dapat berantai seperti .then().catch().
  */
  
    getUsers(false)
        .then(users => console.log(users))
        .catch(err => console.log(err.message));