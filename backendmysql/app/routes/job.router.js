
module.exports = (app) => {
    const jobs = require("../controllers/job.controller.js");
  
    // Create a new Customer
    // app.post("/jobs", jobs.create);
  
    // Retrieve all Customers
    app.get("/jobs", jobs.findAll);
  
    // // Retrieve a single Customer with customerId
    // app.get("/jobs/:jobsId", jobs.findOne);
  
    // // Update a Customer with customerId
    // app.put("/jobs/:jobsId", jobs.update);
  
    // // Delete a Customer with customerId
    // app.delete("/jobs/:jobsId", jobs.delete);

    // app.delete("/jobs", jobs.deleteAll);

    
    
  };