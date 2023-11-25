import express from "express";
import router from './router.js';




const PORT = 3000;

const app = express();
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.status(200).json({msg: "Root route"});
});

app.listen(process.env.PORT | PORT, () => {
    console.log("Server listens on port", PORT);
});