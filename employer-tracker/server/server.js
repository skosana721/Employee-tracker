const express = require("express");
const app = express();
const cors = require("cors");
const { employeeRoutes } = require("./routes/api/employee");
app.use(cors());

employeeRoutes(app);

app.listen(5000, () => console.log(`Server is running on port 5000`));
