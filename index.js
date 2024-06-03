import express from 'express'
const app = express();
const port = 3001;

app.use(express.json());

app.get('/alunos', (req, res) => {
    const alunos = [
        { ra: 1050292321010, nome: 'João Vitor Muniz', email: 'jokatesla@gmail.com' },
        { ra: 1050292321011, nome: 'Verônia Chaves', email: 'veronica.chaves@gmail.com' },
        { ra: 1050292321012, nome: 'Gabriel Takahara', email: 'gabriel.takahara@gmail.com' }
    ];
    res.json(alunos);
});

app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
});
