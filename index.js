const express = require('express');

const app = express();

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
})