import express from 'express';

import * as EntityController from './controllers/Table/EntityController.js';

const router = express.Router();


router.post('/category/create', EntityController.createCategory);
router.patch('/category/edit', EntityController.editCategory);
router.delete('/category/delete', EntityController.deleteCategory);


router.post('/good/create', EntityController.createGood);
router.patch('/good/edit', EntityController.editGood);
router.delete('/good/delete', EntityController.deleteGood);

export default router;