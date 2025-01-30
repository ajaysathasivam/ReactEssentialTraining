export async function apiData(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) { // 200 is a number, not a string
            const data = await response.json();
            return data;
        }
    } catch (e) {
        console.log(e.message);
    }
}
