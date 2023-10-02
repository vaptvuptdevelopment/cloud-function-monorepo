import { HttpFunction } from '@google-cloud/functions-framework';

export const helloFunction: HttpFunction = async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello World!');
}