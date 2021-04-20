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
    const { name, surname, progress } = req.body.form;
    try {
      const newEmployee = await {
        id: uuid.v4(),
        name,
        surname,
        progress,
      };
      employees.push(newEmployee);
      res.status(201).json(employees);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  app.delete("/api/employee/:id", (req, res) => {
    const employeeExists = employees.some(
      (employee) => employee.id === req.params.id
    );
    if (employeeExists) {
      const newEmployees = employees.filter(
        (employee) => employee.id !== req.params.id
      );
      res.send(newEmployees);
    } else {
      res.send(`Id was not found`);
    }
  });
};

module.exports = { employeeRoutes };
