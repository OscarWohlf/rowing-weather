const locationMapping = {
    'Årungen':'Vestby',
    'Bagsværd':'Copenhagen',
    'Harlem River':'New York',
    'Frognerkilen':'Oslo'
};

const reverseLocationMapping = Object.fromEntries(
    Object.entries(locationMapping).map(([lake, city]) => [city, lake])
);

export {locationMapping, reverseLocationMapping};