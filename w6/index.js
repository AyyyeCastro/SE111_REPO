/* ------------ Lab Prompt ------------ */ 
/* You want to develop a JavaScript program that gathers the user’s hourly pay, hours worked, 
and tax rate for a two-week period. You will use the prompt() function in order to gather this information. 
Use 20% for the tax rate. */ 

/* ------------ Author Comments ------------*/ 

/* There may be some excessive commenting in place for me to reference back to if I get stuck in the future. SORRY! */ 

/* Within the same video I referenced earlier, I also saw that "let" was recommended over "var" for declaring Variables. I have NOOOOOO clue the difference. I did some reading
and it had something to do with "tighter block scoping". That is currently out of my knowledge range. I APPRECIATE ANY FEEDBACK ON THIS!! If we're going over this in the future, then 
please don't worry about explaining it now.*/ 

/* ------------ BEGIN CODE ------------ */
let hours = Number(prompt(`How many hours have you worked in these past two weeks?`)); /* User must input the value. That value will be changed to a NUMBER, from a string. 
                                                                                       The value given by the user will be assigned to the HOURS variable. */ 

let wage = Number(prompt(`What is your hour pay?`));                                   /* User must input the value. That value will be changed to a NUMBER, from a string.
                                                                                       The value given by the user will be assigned to the WAGE variable. */
                                                                                       
const tax = .20                                                                        /* The tax rate will be set to a CONSTANT (unchanging) NUMBER of .20 (20%). 
                                                                                       Numbers in JS do not have Int or Floats, just NUMBERS. */ 
console.log(`All user prompts have been completed.`);  

/* Begin Mathematics... */ 
let firstWeek = hours * wage;                                              
console.log(`Your pay for one week: $` + firstWeek.toFixed(2));                        /* If user enters 15 hours, and $11.25 hourly wage - $168.75 should be first week output. */

let totalWage = firstWeek * 2;                                              
console.log(`Gross Pay: $` + totalWage.toFixed(2));                 /* $337.5 should be the two week output, with the above scenario. Scenario continues throughout comments. */                    

let taxes = totalWage * tax;
console.log(`Uncle Sam's share: $` + taxes.toFixed(2));                                /* $67.50 should be the output. */ 

let netWage = totalWage - taxes;
console.log(`Net Pay: $` + netWage.toFixed(2));                                   /* $270.00 Should be output */        

/* Alert user */ 
alert(`The following income has been calculated for a two week time period.\n\n Gross Pay: $${totalWage.toFixed(2)} \n Uncle Sam's Share: $${taxes.toFixed(2)} \n Net Pay: $${netWage.toFixed(2)}`)

/* END code */







