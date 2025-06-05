import Cliente from '../models/Cliente.js';

export const obtenerClientes = async (req, res) => {
  const clientes = await Cliente.find();
  res.json(clientes);
};

export const crearCliente = async (req, res) => {
  const cliente = new Cliente(req.body);
  const nuevoCliente = await cliente.save();
  res.status(201).json(nuevoCliente);
};

export const obtenerCliente = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  if (!cliente) return res.status(404).json({ msg: 'Cliente no encontrado' });
  res.json(cliente);
};

export const actualizarCliente = async (req, res) => {
  const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(cliente);
};

export const eliminarCliente = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
