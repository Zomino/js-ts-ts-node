import express from 'express';

import hello from './hello';

const app = express();

app.get('/', (_, res) => res.send(hello()));

app.listen(3000, () => console.log('Server up: http://localhost:3000'));