
export async function getFetch(resource) {
    try {
        const resp = await fetch(`${process.env.REACT_APP_MY_CODE}/${resource}`);
        const usersFromApi = await resp.json();
        return usersFromApi;
        } catch (error) {
            console.log('getData error', error);
            return false;
        }
}
