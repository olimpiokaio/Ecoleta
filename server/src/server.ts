// primeiro instalamos o typescript com 'npm install typescript -D',
// temos que instalar o pacote 'npm install ts-node -D'
// para o node interpretar o arquivo typescript, pois ele
// só compriende arquivo javascript(exemplo.js) por padrão, ts-node -D vai 
// fazer o node ter intendimento de arquivos typescript(exemplo.ts).
// Temos que criar um arquivo de configuração do typescript com o comando 'npx tsc --init'
// para que o typescript possa ser configurado e utilizado e logo em seguida
// iremos execultar o 'npx ts-node src/server.ts' para execultar a nosso aquivo server.ts 
import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// 'npm install ts-node-dev -D' para o servidor ficar obiservando
// alterações no codigo e reiniciar automaticamente  
app.listen(3333);