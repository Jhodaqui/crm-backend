import express from 'express';
import {
  obtenerClientes,
  crearCliente,
  obtenerCliente,
  actualizarCliente,
  eliminarCliente
} from '../controllers/clienteController.js';

const router = express.Router();

router.route('/')
  .get(obtenerClientes)
  .post(crearCliente);

router.route('/:id')
  .get(obtenerCliente)
  .put(actualizarCliente)
  .delete(eliminarCliente);

export default router;
