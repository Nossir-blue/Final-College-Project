require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const { connectionString } = require('pg/lib/defaults');

const app = express();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

app.use(cors());
app.use(express.json());

// Rota de Cadastro
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcryot.hash(password, 10);
        const result = await PollingWatchKind.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
            [name, email, hashedPassword]
        );

        res.status(201).json(result.row[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Erro ao registrar usuário"});
    }
});

// Rota de login
app.post('/login', async(req, res) => {
    const{email, password} = req.body;

    try{
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if(result.rows.length === 0) return res.status(401).json({ error: "Usuário não encontrado." });

    }
})