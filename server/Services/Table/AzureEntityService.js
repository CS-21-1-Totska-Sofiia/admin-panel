import AzureTables from '@azure/data-tables';

export const createEntity = async (connectionString, tableName, partitionKey, rowKey, data) => {
    const tableClient = AzureTables.TableClient.fromConnectionString(connectionString, tableName, {allowInsecureConnection: true});
    await tableClient.createEntity({
        partitionKey,
        rowKey,
        ...data
    });
}

export const getAll = (connectionString, tableName) => {
    const tableClient = AzureTables.TableClient.fromConnectionString(connectionString, tableName, {allowInsecureConnection: true});
    return tableClient.listEntities();
}

export const getOne = async (connectionString, tableName, partitionKey, rowKey) => {
    const tableClient = AzureTables.TableClient.fromConnectionString(connectionString, tableName, {allowInsecureConnection: true});
    return await tableClient.getEntity(partitionKey, rowKey);
}

export const update = async (connectionString, tableName, partitionKey, rowKey, newData, mergeMode=true) => {
    const tableClient = AzureTables.TableClient.fromConnectionString(connectionString, tableName, {allowInsecureConnection: true});
    const entity = {
        partitionKey,
        rowKey,
        ...newData
    };
    await tableClient.updateEntity(entity, mergeMode ? "Merge" : "Replace");
}

export const deleteEntity = async (connectionString, tableName, partitionKey, rowKey) => {
    const tableClient = AzureTables.TableClient.fromConnectionString(connectionString, tableName, {allowInsecureConnection: true});
    await tableClient.deleteEntity(partitionKey, rowKey);
}