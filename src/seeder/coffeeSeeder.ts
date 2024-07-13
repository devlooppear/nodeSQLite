import { sequelize } from '../database/database'; 
import { Coffee } from '../database/models/Coffee'; 
const seed = async () => {
  try {
    await sequelize.sync({ force: true });

    await Coffee.bulkCreate([
      { name: 'Arabica', intensity: 3, region: 'Latin America', type: 'Single Origin' },
      { name: 'Robusta', intensity: 5, region: 'Africa', type: 'Blend' },
      { name: 'Espresso', intensity: 4, region: 'Global', type: 'Single Origin' },
    ]);

    console.log('Seed executado com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao executar o seed:', error);
    process.exit(1);
  }
};

seed();
