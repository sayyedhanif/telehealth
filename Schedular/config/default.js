module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  server: {
    port: process.env.PORT || 3001,
    maxBytes: 104857600,
  },
  MongoDB: {
      uri: process.env.DB_URI || "mongodb://localhost/db_schedular"
  },
  tokbox: {
    apiKey: process.env.DB_URI || "apiKey_is_here",
    apiSecret: process.env.DB_URI || "apiSecret_is_here"
  }
};
  