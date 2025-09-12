// start server

const app = require('./src/app.js')

app.listen(2002, () => {
    console.log("Server running on port : 2002")
});