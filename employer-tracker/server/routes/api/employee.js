const employees = require("../../employees");
const uuid = require("uuid");

const employeeRoutes = (app) => {
  app.get("/api/employee", async (req, res) => {
    try {
      await res.status(200).send(employees);
    } catch (error) {
      res.status(404).send(error);
    }
  });
  app.post("/api/employee", async (req, res) => {
    try {
      const newEmployee = await {
        id: uuid.v4(),
        name: req.body.name,
        surname: req.body.surname,
        progress: req.body.progress,
      };
      employees.push(newEmployee);
      res.status(201).json(employees);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};

module.exports = { employeeRoutes };
