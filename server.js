const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
app.use(bodyParser.json());

const dbConfig = {
    user: 'root',
    password: 'Toor',
    server: 'localhost',
    database: 'user'
};

sql.connect(dbConfig, err => {
    if (err) console.log(err);
    console.log('Database connected');
});

app.post('/submit-comment', (req, res) => {
    const { name, email, comment } = req.body;

    const request = new sql.Request();
    request.query(`INSERT INTO comments (name, email, comment) VALUES ('${name}', '${email}', '${comment}')`, (err, result) => {
        if (err) {
            console.log(err);
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
