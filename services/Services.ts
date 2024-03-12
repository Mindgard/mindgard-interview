import InferApiImageClassificationService from './image';
import ImageClassificationService from './image';

interface ServicesType {
  image: ImageClassificationService;
}

export default class Services implements ServicesType {
  image: ImageClassificationService;
  constructor(classificationService : ImageClassificationService = new InferApiImageClassificationService()) {
    this.image = classificationService;
  }

}

