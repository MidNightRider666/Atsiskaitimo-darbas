export async function postFecth(resource, dataToPost) {
    try {
        const resp = await fetch(`${process.env.REACT_APP_MY_CODE}/${resource}` , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(dataToPost)
          });
        const usersFromApi = await resp.json();
        return usersFromApi;
        } catch (error) {
            console.log('getData error', error);
            return false;
        }
}
