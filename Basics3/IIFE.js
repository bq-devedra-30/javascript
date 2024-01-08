(function chai (){  ////named IIFE
    console.log(`Db connect one`);
}) ();

( (name)  =>  { ///// without named IIFE
    console.log(`db connected two ${name}`);
}) ("devendra")