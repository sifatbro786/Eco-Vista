import data from "@/lib/location.json";

const getLocations = () => {
    return data;
};

const getLocationByName = (location) => {
    if (!location) return null;

    const found = data.find((item) => item?.location.toLowerCase() === location.toLowerCase());

    return found || {};
};

export { getLocations, getLocationByName };
