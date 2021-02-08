const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/newsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(()=>{
    console.log(`connection success`);
}).catch((e)=>{
    console.log(`no connecion `,e);
})

const dbSchema = mongoose.Schema({
    email: String,
    password: String
});

const dbMessage = mongoose.model('dbUser',dbSchema);

module.exports = dbMessage;