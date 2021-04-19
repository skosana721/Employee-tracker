const employees = require("../../employees");

const employeeRoutes = (app) => {
  app.get("/api/employee", async (req, res) => {
    try {
      await res.status(200).send(employees);
    } catch (error) {
      res.status(404).send(error);
    }
  });
};

module.exports = { employeeRoutes };
