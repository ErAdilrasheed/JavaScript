// Immediately Invoked Function Expression (IIFE)

// named IIFE

(function database(){
    console.log(`DB1 Connected to SQL`);
})();

// simple IIFE

((name) => {
    console.log(`DB2 Connected to ${name}`);
})("MongoDB")
