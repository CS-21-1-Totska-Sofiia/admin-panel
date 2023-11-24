import express from "express";
import router from './router.js';



import * as AzureTableService from "./Services/Table/AzureTableService.js";
import * as AzureEntityService from "./Services/Table/AzureEntityService.js";


//const credential = new AzureTables.AzureNamedKeyCredential(account, accountKey);



// let tablesIter = serviceClient.listTables();
// let i = 1;
// for await (const table of tablesIter) {
//     console.log(`Table${i}: ${table.name}`);
//     i++;
// }

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