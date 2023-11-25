import express from 'express';

import * as EntityController from './controllers/Table/EntityController.js';

const router = express.Router();


router.post('/:tableName/create/', EntityController.createEntity);
router.patch('/:tableName/edit/', EntityController.editEntity);
router.delete('/:tableName/delete/', EntityController.deleteEntity);


export default router;