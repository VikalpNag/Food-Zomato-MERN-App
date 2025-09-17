// start server

const app = require('./src/app.js')
const connectDB = require('./src/db/db.js')


connectDB();

app.listen(2002, () => {
    console.log("Server running on port : 2002")
});