import mysql from 'mysql';
import { hostname } from 'os';
import database from 'src/database';

export class InmobiliariaDB {
    private connection: mysql.Connection;

    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
            database: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT
        });
    }

    public connect(): void {
        this.connection.connect((err) => {
            if (err) {
                console.error('Error al conectar a la base de datos:', err);
                throw err;
            }
            console.log('Conexión exitosa a la base de datos MySQL');
        });
    }

    public disconnect(): void {
        this.connection.end((err) => {
            if (err) {
                console.error('Error al desconectar de la base de datos:', err);
                throw err;
            }
            console.log('Desconexión exitosa de la base de datos MySQL');
        });
    }

    public async consultarPropiedades(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            console.log('Pre Select');
            this.connection.query('SELECT * FROM `wph8_posts` ', (error, results, fields) => {
                if (error) {
                    console.error('Error al realizar la consulta:', error);
                    reject(error);
                }
                console.log(results);
                resolve(results);
            });
        });
    }
}

// Ejemplo de uso:
/*
const inmobiliariaDB = new InmobiliariaDB();
inmobiliariaDB.connect();

inmobiliariaDB.consultarPropiedades()
    .then((propiedades) => {
        console.log('Propiedades encontradas:', propiedades);
    })
    .catch((error) => {
        console.error('Error al consultar propiedades:', error);
    })
    .finally(() => {
        inmobiliariaDB.disconnect();
    });
*/