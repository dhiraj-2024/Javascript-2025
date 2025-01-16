JAVASCTIPT (default) = >>>> Synchronous language  // code is executed in sequentialy order 
             >>>> Single thread.  // but it not feels user that it is slow 

EXECUTION CONTEXT : execute one line at a time 
|
| 
|-console.log("first")
|
|-console.log("second") // each operation waits to complete last one before executing
|
|-console.log("third")
|
 
CALL STACK ;  +++    MEMORY HEAP ;  === JAVASCRIPT ENGIN



BLOCKING CODE                                                NON BLOCKING CODE 
    |                                                                |
   Sync   (read file sync)                                          async. (read file async)
    |                                                                |
block the flow of program                                  does not block the flow of program


![alt text](<Screenshot 2025-01-16 at 7.39.21 PM.png>)