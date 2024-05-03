import getAccessToken from './createToken';

async function getVault(vaultName: string): Promise<any> {
    const baseUrl = 'https://api.utila.io/v1alpha1';
    // const endpoint = `${baseUrl}/${vaultName}`;
    const endpoint = `${baseUrl}/vaults/591916251577`;
    console.log('Endpoint:', endpoint);

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: buildHeaders(),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch vault details:', error);
        throw error;
    }
}

function buildHeaders(): Record<string, string> {
    const accessToken = getAccessToken();
    console.log('Access Token:', accessToken);

    return {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
    };
}

const vaultName = 'vaults/sepoliaETH';

getVault(vaultName)
    .then(data => console.log('Vault Details:', data))
    .catch(error => console.error('Error fetching data:', error));

