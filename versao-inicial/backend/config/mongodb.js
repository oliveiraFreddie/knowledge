const mongoose = require("mongoose");
const uri = "mongodb+srv://mongodb:1995@knowledge.cud38nd.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((e) => {
        const msg = "ERRO! Não foi possível conectar com o MongoDB no projeto Inicial!";
        console.log("\x1b[41m%s\x1b[37m", msg, "\x1b[0m");
    });

