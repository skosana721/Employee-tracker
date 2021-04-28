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
    const { name, surname, progress, isCompleted } = req.body.form;
    try {
      const newEmployee = await {
        id: uuid.v4(),
        name,
        surname,
        progress,
        isCompleted,
      };
      employees.push(newEmployee);
      res.status(201).json(employees);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  app.delete("/api/employee/:id", (req, res) => {
    const { id } = req.params;

    try {
      for (let i in employees) {
        let index = employees.indexOf(employees[i]);
        employees.splice(index, 1);
      }
      return res.status(200).send(employees);
    } catch (error) {
      res.status(404).send(error);
    }
  });
  app.put("/api/employee/:id", (req, res) => {
    const { id } = req.params;
    const { edit } = req.body;
    try {
      for (let i in employees) {
        if (employees[i].id === id) {
          employees[i].progress = edit;
        }
      }
      return res.status(200).send(employees);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  app.put("/api/employee/complete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      for (var i in employees) {
        if (employees[i].id === id) {
          employees[i].isCompleted = !employees[i].isCompleted;
        }
      }

      return res.send(employees);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};
module.exports = { employeeRoutes };
