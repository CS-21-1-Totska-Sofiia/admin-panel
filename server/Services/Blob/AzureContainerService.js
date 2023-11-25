import AzureStorageBlob from '@azure/storage-blob';

const connectionString = 'AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;DefaultEndpointsProtocol=http;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;QueueEndpoint=http://127.0.0.1:10001/devstoreaccount1;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;'

export const create = async (name) => {
    const blobClient = AzureStorageBlob.BlobServiceClient.fromConnectionString(connectionString);

    const containerName = name;
    const containerClient = blobClient.getContainerClient(containerName);
    const createContainerResponse = await containerClient.create();

    console.log(`Create container ${containerName} successfully`, createContainerResponse.requestId);
}

export const deleteContainer = async (name) => {
    const blobClient = AzureStorageBlob.BlobServiceClient.fromConnectionString(connectionString);

    const containerName = name;
    const containerClient = blobClient.getContainerClient(containerName);
    const createContainerResponse = await containerClient.delete();

    console.log(`Deleted container ${containerName} successfully`, createContainerResponse.requestId);

}