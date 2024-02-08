// vercel-build.js
const { execSync } = require('child_process');

try {
  // Execute as migrações antes de iniciar o servidor
  execSync('knex migrate:latest');
  console.log('Migrations executed successfully.');

  // Inicie o servidor usando pm2 ou outro método desejado
  execSync('pm2 start index.js --name knowledge-backend');
  console.log('Server started successfully.');
} catch (error) {
  console.error('Error during build:', error.message);
  process.exit(1);
}

