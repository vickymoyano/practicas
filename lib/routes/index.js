import express from 'express';
import carreras from './carreras';
import rol from './roles';
import materia from './materias';
import usuario from './usuarios';

const router = express.Router();

router.use('/carreras', carreras);
router.use('/roles', rol);
router.use('/materias', materia);
router.use('/usuarios', usuario);

export default router;

