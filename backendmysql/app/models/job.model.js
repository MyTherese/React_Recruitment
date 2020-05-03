const sql = require("./db.js");

// constructor
const Jobs = function(jobs) {
  this.title = jobs.title;
  this.description = jobs.description;
  this.department = jobs.department;
};

Jobs.create = (newJobs, result) => {
  sql.query("INSERT INTO jobs SET ?", newJobs, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created jobs: ", { id: res.insertId, ...newJobs });
    result(null, { id: res.insertId, ...newJobs });
  });
};

Jobs.findById = (jobsId, result) => {
  sql.query(`SELECT * FROM jobs WHERE id = ${jobsId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found jobs: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found jOBS with the id
    result({ kind: "not_found" }, null);
  });
};

Jobs.getAll = result => {
  sql.query("SELECT * FROM jobs", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("jobs: ", res);
    result(null, res);
  });
};

Jobs.updateById = (id, jobs, result) => {
  sql.query(
    "UPDATE jobs SET title = ?, description = ?, department = ?, WHERE id = ?",
    [jobs.title, jobs.description, jobs.department, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found jobs with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated jobs: ", { id: id, ...jobs });
      result(null, { id: id, ...jobs });
    }
  );
};

Jobs.remove = (id, result) => {
  sql.query("DELETE FROM jobs WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted jobs with id: ", id);
    result(null, res);
  });
};

Jobs.removeAll = result => {
  sql.query("DELETE FROM jobs", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} jobs`);
    result(null, res);
  });
};

module.exports = Jobs;