export const generateKeys = (category, parentCategory) => {
    const partitionKey = parentCategory.replace(' ', '-');
    const rowKey = category.replace(' ', '-');
    return {partitionKey, rowKey};
}