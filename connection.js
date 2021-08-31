const mongoose = require("mongoose");
const username = ''
const passowrd = ''
const server = 'cluster0.lunhk.mongodb.net'
const dbname = 'User_data'

mongoose.connect(`mongodb+srv://${username}:${passowrd}@${server}/${dbname}`, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})
