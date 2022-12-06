const express = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const { uuid } = require("uuidv4"); //id unico

//rotas

const cliente = [];
const funcionario = [];
const quarto = [];

//get
app.get("/cliente", (request, response) => {
  return response.json(cliente);
});

app.get("/funcionario", (request, response) => {
  return response.json(funcionario);
});

app.get("/quarto", (request, response) => {
  return response.json(quarto);
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

app.post("/quarto", (request, response) => {
  const { login, cpf } = request.body;
  const suite = { id: uuid(), login, cpf };
  quarto.push(suite);
  return response.status(201).json(suite);
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

app.put("/quarto/:id", (request, response) => {
  const { id } = request.params;
  const { login, cpf } = request.body;
  const newquarto = { id, login, cpf };
  const suiteindex = quarto.findIndex((suite) => suite.id == id);
  quarto[suiteindex] = newquarto;
  return response.json(newquarto);
});

//delete

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

app.delete("/quarto/:id", (request, response) => {
  const { id } = request.params;
  const suiteindex = quarto.findIndex((suite) => suite.id == id);
  quarto.splice(suiteindex, 1);
  return response.status(204).send();
});

app.listen(3000, () => {
  console.log("o servidor foi iniciado");
});
