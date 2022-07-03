// Using the "require()" method to require faker as a Dependency
const { faker } = require("@faker-js/faker");
// Requiring "Express" as a Dependency
const express = require("express");
// Setting Express as my "app" server Instance
const app = express();
// Setting up my port
const port = 8000;

// Fake User Objects/instances using Faker API
const users = () => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  password: faker.internet.password(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
});

// Fake Company Objects/instances using Faker API
const company = () => ({
  id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
  },
});

// API route for new Users Instances, Using the Anonymous (req/res) Callback function concept here
app.get("/api/users/new", (req, res) => {
  res.json(users());
});

// API route for new Company Instances
app.get("/api/company/new", (req, res) => {
  res.json(company());
});

// API route for new Users object with Company Instances attached
app.get("/api/users/company", (req, res) => {
  const newUsers = users();
  const newCompany = company();
  const response = {
    userObj: newUsers,
    companyObj: newCompany,
  };
  res.json(response);
});

const server = app.listen(port, () =>
  console.log(`Server listening on ${server.address().port}!`)
);
