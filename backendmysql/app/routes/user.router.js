


module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    // Create a new Customer
    app.post("/users", users.create);
  
    // Retrieve all Customers
    app.get("/users", users.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/users/:userId", users.findOne);
  
    // Update a Customer with customerId
    app.put("/users/:userId", users.update);
  
    // Delete a Customer with customerId
    app.delete("/users/:userId", users.delete);

    app.delete("/users", users.deleteAll);


    
  };