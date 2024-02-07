require('dotenv').config();

module.exports = {
	client: 'pg',
	connection: {
	  connectionString: process.env.db,
	  ssl: { rejectUnauthorized: false } // Adicione esta linha para desativar a rejeição não autorizada
	},
	searchPath: ['knex', 'public'],
	migrations: {
	  tableName: 'knex_migrations'
	}
  };
  
