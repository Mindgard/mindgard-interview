import axios from 'axios';
import FormData from 'form-data';
import { FAST_API_URL } from '../../constants';

type ClassificationResult = {
  result: string;
};
interface ImageClassificationService {
  classify(
    file: Express.Multer.File
  ): Promise<ClassificationResult>;
}
export default class InferApiImageClassificationService implements ImageClassificationService {
  constructor() {}

  async classify(
    file: Express.Multer.File
  ): Promise<ClassificationResult> {
    let data = new FormData();

    data.append('image_file', Buffer.from(file.buffer), file.originalname);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: FAST_API_URL,
      headers: {
        ...data.getHeaders(),
      },
      data: data, 
    };

    const response = await axios.request(config);
    return response.data;
  }

}


export class FakeImageClassificationService implements ImageClassificationService {
  constructor() {}

  async classify(
    file: Express.Multer.File
  ): Promise<ClassificationResult> {
    // https://wiki.nottinghack.org.uk/wiki/Cheesoid
    const classification = file.originalname.length % 2 == 0 ? "Petrol" : 'Cheese';
    return { "result" : classification}
  }
}
