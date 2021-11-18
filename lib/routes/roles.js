import express from 'express';

import { index, show, create, update } from '../controllers/rol_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(create));
router.put('/:id', withErrorHandling(update));
//aca va create lo tengo q poner
export default router;