
const app = require('./app');

const PORT = 3434;
app.listen(PORT, () => {
    console.log("my app is listening in port no : " + PORT);
});