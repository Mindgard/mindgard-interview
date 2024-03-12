import request from 'supertest';

jest.replaceProperty(process, 'argv', [process.argv[0],process.argv[1],'fake']);
import app from '../app';

describe('POST /image', () => {
  it('should match Cheese via fake classifier', async () => {
    const res = await request(app)
      .post('/image')
      .attach('image_file', './tests/dog.jpg');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result');
    expect(res.body.result).toBe('Cheese');
  });


  it('should match Petrol via fake classifier', async () => {
    const res = await request(app)
      .post('/image')
      .attach('image_file', './tests/dog2.jpg');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('result');
    expect(res.body.result).toBe('Petrol');
  });

  it('should inform when no file uploaded', async() => {
    const res = await request(app)
      .post('/image');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('No file uploaded');
  });
});
