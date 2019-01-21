module.exports = {
    server: {
      port: 3000,
      maxBytes: 104857600,
    },
    MongoDB: {
        uri: process.env.DB_URI || "mongodb://localhost/db_schedula"
    }
  };
  