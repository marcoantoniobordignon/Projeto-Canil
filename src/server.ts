import dotenv from 'dotenv'
import express from 'express'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// recria __filename e __dirname
const __filename = fileURLToPath(import.meta.url);
const _dirname = dirname(__filename);

dotenv.config();

const server = express()

server.set('view engine', 'mustache')
server.set('views', express.static(path.join(_dirname, '../public')))
server.engine('mustache', mustache())

server.listen(process.env.PORT, () => {
    console.log(`O servidor está rodando na porta http://localhost:${process.env.PORT}`)
})

server.use(mainRoutes)

server.use((req, res) => {
    res.send('Página não encontrada.')
})