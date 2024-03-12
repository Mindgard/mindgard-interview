import { Router } from 'express';
import Services from '../../services/Services';
import { Multer } from 'multer';

export default function image(services: Services, upload: Multer) {
  const router = Router();

  router.post('/', upload.single('image_file'), async (req, res) => {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    return res.status(200).json(await services.image.classify(file));
    
  });

  return router;
}
