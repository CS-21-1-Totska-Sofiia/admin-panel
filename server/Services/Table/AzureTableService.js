import AzureTables from '@azure/data-tables';

export const createTable = async (connectionString, tableName) => {
    const serviceClient = AzureTables.TableServiceClient.fromConnectionString(connectionString, {allowInsecureConnection: true});
    await serviceClient.createTable(tableName);
}

export const deleteTable = async (connectionString, tableName) => {
    const serviceClient = AzureTables.TableServiceClient.fromConnectionString(connectionString, {allowInsecureConnection: true});
    await serviceClient.deleteTable(tableName);
}