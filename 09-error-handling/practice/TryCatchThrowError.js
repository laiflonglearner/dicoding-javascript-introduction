let json = '{ "age": 30 }';
 
try {
  let user = JSON.parse(json); // Mencoba mengonversi data String menjadi object.
 
  if (!user.name) {
    throw new SyntaxError("'name' is required."); 
    //Apabila nama tidak ditemukan, maka SyntaxError akan dilemparkan
  }
 
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}

/*
Output: JSON Error: 'name' is required.
*/