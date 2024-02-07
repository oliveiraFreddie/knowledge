module.exports = {
	client: 'pg',
	connection: {
	  connectionString: 'postgresql://freddie.webknowledge:6j0uitsNrxXF@ep-gentle-mode-a5a1qbci.us-east-2.aws.neon.tech/knowledge',
	  ssl: { rejectUnauthorized: false } // Adicione esta linha para desativar a rejeição não autorizada
	},
	searchPath: ['knex', 'public'],
	migrations: {
	  tableName: 'knex_migrations'
	}
  };
  
