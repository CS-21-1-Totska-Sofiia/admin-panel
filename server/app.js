import express from "express";
import router from './router.js';



import * as AzureTableService from "./Services/Table/AzureTableService.js";


const account = "devstoreaccount1";
const accountKey = "Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==";
const connectionString = "AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;DefaultEndpointsProtocol=http;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;QueueEndpoint=http://127.0.0.1:10001/devstoreaccount1;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;";

//const credential = new AzureTables.AzureNamedKeyCredential(account, accountKey);



await AzureTableService.deleteTable(connectionString, "MyTable");

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