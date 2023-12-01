export const generateKeys = (partitionKeyInit, rowKeyInit) => {
    const partitionKey = partitionKeyInit.replace(' ', '-');
    const rowKey = rowKeyInit.replace(' ', '-');
    return {partitionKey, rowKey};
}