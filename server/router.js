import express from 'express';
import multer from 'multer';

import * as EntityController from './controllers/Table/EntityController.js';
import * as BlobController from './controllers/Blob/BlobController.js';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post('/:tableName/create/', EntityController.createEntity);
router.patch('/:tableName/edit/', EntityController.editEntity);
router.delete('/:tableName/delete/', EntityController.deleteEntity);


router.post('/upload', upload.any(), BlobController.create);


export default router;