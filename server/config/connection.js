const mongoose = require("mongoose");

// configure the slay-the-market db
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/critique-code-react",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;