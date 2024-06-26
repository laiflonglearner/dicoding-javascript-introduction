class ValidationError extends Error { // Custom ValidationError class extends the built-in Error class
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
}
   
  const json = '{ "age": 30 }';
   
  try {
    const user = JSON.parse(json);
   
    if (!user.name) {
      throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
      throw new ValidationError("'age' is required.");
    }
   
    console.log(user.name);
    console.log(user.age);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
      console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    } else {
      console.log(error.stack);
    }
  }
   
  /* output
  Invalid data: 'name' is required.
  */