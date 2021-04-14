const express = require("express");
const app = express();
const { employeeRoutes } = require("./routes/api/employee");

employeeRoutes(app);
app.listen(6000, () => console.log(`Server is running on port 6000`));
