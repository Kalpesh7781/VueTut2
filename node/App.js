const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

let employees = [
  { id: 1, name: "John Doe", email: "john@example.com", employeeId: "E001" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", employeeId: "E002" }
];

// Get all employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// Get an employee by ID
app.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find(e => e.id === id);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

// Create a new employee
app.post('/employees', (req, res) => {
  const newEmployee = req.body;
  newEmployee.id = employees.length + 1;
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// Update an employee by ID
app.put('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employeeIndex = employees.findIndex(e => e.id === id);

  if (employeeIndex !== -1) {
    employees[employeeIndex] = { id, ...req.body };
    res.json(employees[employeeIndex]);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

// Delete an employee by ID
app.delete('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employeeIndex = employees.findIndex(e => e.id === id);

  if (employeeIndex !== -1) {
    employees.splice(employeeIndex, 1);
    res.json({ message: 'Employee deleted' });
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
