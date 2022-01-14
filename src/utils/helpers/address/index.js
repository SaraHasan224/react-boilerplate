function formatExistingAddressDropdown(data, selected) {
    let cityId = selected?.city_id;
    let provinceId = selected?.province_id;

    const countries = data?.countries;
    var countryObject = [];
    var countryData = {};
    var provinces, provinceObject, provinceData;
    var cities, cityObject, cityData;
    var areas, areaObject, areaData;
    var defaultAreaObject = [];
    var defaultCityObject = [];

    // Country
    countries &&
        countries.map((country) => {
            countryData.value = country?.value;
            countryData.label = country?.label;
            // Provinces
            provinces = country?.provinces;
            provinceObject = [];
            provinces &&
                provinces.map((province) => {
                    provinceData = {};
                    provinceData.value = province?.value;
                    provinceData.label = province?.label;
                    // Cities
                    cities = province?.cities;
                    cityObject = [];
                    cities &&
                        cities.map((city) => {
                            cityData = {};
                            cityData.value = city?.value;
                            cityData.label = city?.label;
                            //Area
                            areas = city?.areas;
                            areaObject = [];
                            areas &&
                                areas.map((area) => {
                                    areaData = {};
                                    areaData.value = area?.value;
                                    areaData.label = area?.label;
                                    areaObject.push(areaData);
                                    if (city?.value === cityId) {
                                        defaultAreaObject.push(areaData);
                                    }
                                    return null;
                                });
                                
                            if (province?.value === provinceId) {
                                defaultCityObject.push(cityData);
                            }
                            cityData.areas = areaObject;
                            cityObject.push(cityData);
                            return null;
                        });
                    provinceData.cities = cityObject;
                    provinceObject.push(provinceData);
                    return null;
                });
            countryData.provinces = provinceObject;
            //Save country data with province, city, area and telecom networks
            countryObject.push(countryData);
            return null;
        });
    const dropdown = {
        countryData: countryObject,
        provinceData: provinceObject,
        citiesData: defaultCityObject,
        // citiesData: cityObject,
        areasData: defaultAreaObject,
    };
    return dropdown;
}

function formatSelectedAddressDropdown(data, selected) {
    let cityId = selected?.city_id;

    const countries = data?.countries;
    var countryObject = [];
    var countryData = {};
    var provinces, provinceObject, provinceData;
    var cities, cityObject, cityData;
    var areas, areaObject, areaData;
    var defaultAreaObject = [];

    // Country
    countries &&
        countries.map((country) => {
            countryData.value = country?.country_id;
            countryData.label = country?.name;
            // Provinces
            provinces = country?.provinces;
            provinceObject = [];
            provinces &&
                provinces.map((province) => {
                    provinceData = {};
                    provinceData.value = province?.id;
                    provinceData.label = province?.name;
                    // Cities
                    cities = province?.cities;
                    cityObject = [];
                    cities &&
                        cities.map((city) => {
                            cityData = {};
                            cityData.value = city?.id;
                            cityData.label = city?.name;
                            //Area
                            areas = city?.areas;
                            areaObject = [];
                            areas &&
                                areas.map((area) => {
                                    areaData = {};
                                    areaData.value = area?.id;
                                    areaData.label = area?.name;
                                    areaObject.push(areaData);
                                    if (city?.id === cityId) {
                                        defaultAreaObject.push(areaData);
                                    }
                                    return null;
                                });
                            cityData.areas = areaObject;
                            cityObject.push(cityData);
                            return null;
                        });
                    provinceData.cities = cityObject;
                    provinceObject.push(provinceData);
                    return null;
                });
            countryData.provinces = provinceObject;
            //Save country data with province, city, area and telecom networks
            countryObject.push(countryData);
            return null;
        });
    const dropdown = {
        countryData: countryObject,
        provinceData: provinceObject,
        citiesData: cityObject,
        areasData: defaultAreaObject,
    };
    return dropdown;
}

const ADDRESS_HELPER = {
    formatExistingAddressDropdown,
    formatSelectedAddressDropdown,
}

export default ADDRESS_HELPER;
