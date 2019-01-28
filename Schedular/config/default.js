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
    apiKey: process.env.TOKBOX_API_KEY || "apiKey_is_here",
    apiSecret: process.env.TOKBOX_API_SECRET || "apiSecret_is_here"
  }
};
  