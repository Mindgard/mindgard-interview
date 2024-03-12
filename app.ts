import multer from 'multer';
import routers from './routers';
import Services from './services/Services';
import InferApiImageClassificationService, { FakeImageClassificationService } from './services/image';

const express = require('express')
const app = express()

const classifier = 
  process.argv[2] === 'fake'
  ? new FakeImageClassificationService() 
  : new InferApiImageClassificationService();
  
const services = new Services(classifier);
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use('/image', routers.image(services, upload));

export default app;