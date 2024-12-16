export const getLocationData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`,
        );

        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e.message);
    }
};

export const getLocationLatLongList = async () => {
    try {
        const response = await fetch(`http://${process.env.API_URL}/api/location`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e.message);
    }
};

export const getLocationLatLong = async (locationName) => {
    try {
        const response = await fetch(`http://${process.env.API_URL}/api/location/${locationName}`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e.message);
    }
};
