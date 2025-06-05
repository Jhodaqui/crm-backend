import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  empresa: String,
  email: String,
  telefono: String,
  notas: String
}, {
  timestamps: true
});

export default mongoose.model('Cliente', clienteSchema);
