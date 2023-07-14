
export const countries = [{
    id: 0,
    name: 'US',
    continent: 'North America',
}, {
    id: 1,
    name: 'Canada',
    continent: 'North America',
}, {
    id: 2,
    name: 'Japan',
    continent: 'Asia',
}, {
    id: 3,
    name: 'UK',
    continent: 'Europe',
}, {
    id: 8,
    name: 'France',
    continent: 'Europe',
}, {
    id: 4,
    name: 'Argentina',
    continent: 'South America',
}, {
    id: 5,
    name: 'Australia',
    continent: 'Ocenia',
}, {
    id: 6,
    name: 'South Africa',
    continent: 'Africa',
}, {
    id: 7,
    name: 'Penguins',
    continent: 'Antarctica',
}] as const;

export const North_America = countries.filter(country =>
    country.continent === 'North America'
);
export const South_America = countries.filter(country =>
    country.continent === 'South America'
);
export const Asia = countries.filter(country =>
    country.continent === 'Asia'
);

export const Europe = countries.filter(country =>
    country.continent === 'Europe'
);
export const Africa = countries.filter(country =>
    country.continent === 'Africa'
);

