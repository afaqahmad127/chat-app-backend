const environment = {
  port: process.env.PORT || 2022,
  nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri:
    process.env.MONGO_DB_LIVE_URL || "mongodb://localhost:27017/chat-App",
};

export default environment;
