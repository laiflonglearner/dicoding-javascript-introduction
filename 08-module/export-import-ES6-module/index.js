import { coffeeStock, isCoffeeMachineReady } from './state.js';
// import { coffeeStock as stock, isCoffeeMachineReady } from './state.js'; // Make import alias
// import coffeeStock from "./state.js"; // Import only single value
// import stock from "./state.js"; // Using export default allows you to use your desired variable import name (if you don't use destructuring object method) 

const displayStock = stock => {
    for (const type in stock) {
      console.log(type);
    }
  }
   
  displayStock(coffeeStock);