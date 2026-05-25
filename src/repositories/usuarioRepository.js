import { connection } from '../database/Database.js';

const usuarioRepository = {
    create: async (usuario) => {
        const sql = 'INSERT INTO usuario (username, password) VALUES (?, ?)';

        const values = [usuario.username, usuario.password];

        const {rows} = await connection.execute(sql, values);
        return rows;
    },
    findByUserName: async (username) => {
        const sql = 'SELECT * FROM usuario WHERE username = ?';

        const values = [username];

        const [rows] = await connection.execute(sql, values);
        return rows[0];
    },
    getAllUsers: async () => {
        const sql = 'SELECT id, username FROM usuario';
        const [rows] = await connection.execute(sql);
        return rows;
    }
}

export default usuarioRepository;