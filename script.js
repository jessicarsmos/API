const express = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const { uuid } = require("uuidv4"); //id unico

//rotas

const cliente = [];
const funcionario = [];
const socios = [];

//get
app.get("/cliente", (request, response) => {
  return response.json(cliente);
});

app.get("/funcionario", (request, response) => {
  return response.json(funcionario);
});

app.get("/socios", (request, response) => {
  return response.json(socios);
});

//post

app.post("/cliente", (request, response) => {
  const { nome, email, reserva, data } = request.body;
  const clientes = { id: uuid(), nome, email, reserva, data };
  cliente.push(clientes);
  return response.status(201).json(clientes);
});

app.post("/funcionario", (request, response) => {
  const { login, cpf, setor } = request.body;
  const funcionarios = { id: uuid(), login, cpf, setor };
  funcionario.push(funcionarios);
  return response.status(201).json(funcionarios);
});

app.post("/socios", (request, response) => {
  const { login, cpf } = request.body;
  const sociedade = { id: uuid(), login, cpf };
  socios.push(sociedade);
  return response.status(201).json(sociedade);
});

//put

app.put("/cliente/:id", (request, response) => {
  const { id } = request.params;
  const { nome, email, reserva, data } = request.body;
  const newCliente = { id, nome, email, reserva, data };
  const clientesindex = cliente.findIndex((clientes) => clientes.id == id);
  cliente[clientesindex] = newCliente;
  return response.json(newCliente);
});

app.put("/funcionario/:id", (request, response) => {
  const { id } = request.params;
  const { login, cpf, setor } = request.body;
  const newFuncionario = { id, login, cpf, setor };
  const funcionariosindex = funcionario.findIndex(
    (funcionarios) => funcionarios.id == id
  );
  funcionario[funcionariosindex] = newFuncionario;
  return response.json(newFuncionario);
});

app.put("/socios/:id", (request, response) => {
  const { id } = request.params;
  const { login, cpf } = request.body;
  const newSocios = { id, login, cpf };
  const sociedadeindex = socios.findIndex((sociedade) => sociedade.id == id);
  socios[sociedadeindex] = newSocios;
  return response.json(newSocios);
});

//detele

app.delete("/cliente/:id", (request, response) => {
  const { id } = request.params;
  const clientesindex = cliente.findIndex((cliente) => cliente.id == id);
  cliente.splice(clientesindex, 1);
  return response.status(204).send();
});

app.delete("/funcionario/:id", (request, response) => {
  const { id } = request.params;
  const funcionariosindex = funcionario.findIndex(
    (funcionarios) => funcionarios.id == id
  );
  funcionario.splice(funcionariosindex, 1);
  return response.status(204).send();
});

app.delete("/socios/:id", (request, response) => {
  const { id } = request.params;
  const sociedadeindex = socios.findIndex((sociedade) => sociedade.id == id);
  socios.splice(sociedadeindex, 1);
  return response.status(204).send();
});

app.listen(3000, () => {
  console.log("o servidor foi iniciado");
});
