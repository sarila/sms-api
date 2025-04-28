require('dotenv').config();            // if you’re using a .env for DB creds
const { sequelize, Province, Municipality } = require('./models');

(async () => {
  try {
    // 1. Test the DB connection
    await sequelize.authenticate();
    console.log('✅ Database connection OK');

    // 2. Optionally sync models (only if you want to skip migrations for quick tests)
    await sequelize.sync({ force: true });

    // 3. Create a Province
    const prov = await Province.create({
      englishName: 'TestProvince',
      nepaliName:  'परीक्षण प्रदेश',
      field:       'Demo'
    });
    console.log('🗺️  Created Province:', prov.toJSON());

    // 4. Create a Municipality linked to it
    const muni = await Municipality.create({
      englishName: 'TestCity',
      nepaliName:  'परीक्षण नगरपालिका',
      provinceId:  prov.id
    });
    console.log('🏙️  Created Municipality:', muni.toJSON());

    // 5. Fetch it back with the association
    const loaded = await Municipality.findOne({
      where: { id: muni.id },
      include: Province
    });
    console.log('🔗 Loaded with Province:', loaded.toJSON());

    process.exit(0);
  } catch (err) {
    console.error('❌ Test failed:', err);
    process.exit(1);
  }
})();
