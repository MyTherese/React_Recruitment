
const Job = require("../models/job.model.js");

// Create new endpoint
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // create a registration 
  const job = new Job({
    title: req.body.name,
    description: req.body.description,
    department: req.body.department,
   
  });


  // Save user  in the database
  Job.create(job, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};

// Retrieve all jobs from the database.
exports.findAll = (req, res) => {
  Job.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving jobs."
      });
    else res.send(data);
  });
};



// Find a single Job with a jobId
exports.findOne = (req, res) => {
  Job.findById(req.params.jobId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Job with id ${req.params.jobId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Job with id " + req.params.jobId
        });
      }
    } else res.send(data);
  });
};






// Update a user identified by the userId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Job.updateById(
    req.params.jobId,
    new Job(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Job with id ${req.params.jobId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Job with id " + req.params.jobId
          });
        }
      } else res.send(data);
    }
  );
};








// Delete a User with the specified userId in the request
exports.delete = (req, res) => {
  Job.remove(req.params.jobId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found job with id ${req.params.jobId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Job with id " + req.params.jobId
        });
      }
    } else res.send({ message: `Job was deleted successfully!` });
  });
};






// Delete all jobs from the database.
exports.deleteAll = (req, res) => {
  Job.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all jobs."
      });
    else res.send({ message: `All Jobs were deleted successfully!` });
  });
};