import { Router } from 'express';
import { getAllCoffees, addCoffee } from '../controller/controller';

const router = Router();

router.get('/coffees', getAllCoffees);
router.post('/coffees', addCoffee);

export default router;
