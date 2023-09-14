import { HttpFunction } from '@google-cloud/functions-framework';

export const helloFunction: HttpFunction = async (req, res) => {
  res.send('Hello World!');
}