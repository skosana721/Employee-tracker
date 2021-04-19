const employees = require("../../employees");

const employeeRoutes = (app) => {
  app.get("/api/employee", async (req, res) => {
    try {
      await res.status(200).json(employees);
    } catch (error) {
      res.status(404).json(err);
    }
  });
};
module.exports = { employeeRoutes };
