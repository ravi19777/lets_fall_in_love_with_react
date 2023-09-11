const successCallback = (position) =>
{
    console.log(position);

    const {latitude,longitude} = position.coords;

    // Know the city name
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    fetch(url)
    .then(res => res.json())
    .then((data) =>
    {
        console.log(data.address);
    })
    .catch((error) =>
    {
        console.log(error);
    })
}

const errorCallback = (error) =>
{
    console.log("Error occured:" + error);
}

navigator.geolocation.getCurrentPosition(successCallback,errorCallback);