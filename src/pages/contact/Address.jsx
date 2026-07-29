import { useState, useEffect } from 'react';
import './contact.css';

export default function Address() {
  // states
  const [mapImgUrl, setMapImgUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // effects
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setMapImgUrl(getGoogleMapsStaticMapUrl(googleMapsStaticMapUrlParams));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // build the google maps static map
  const googleMapsStaticMapUrlParams = {
    center: 'Architectural+Woodworking+St+Petersburg+FL',
    markers: 'size:mid%7Ccolor:red%7C3291+40th+ave+n', // %7C encodes to a pipe char
    size: '600x300',
    zoom: '15',
    style: 'feature:poi|visibility:off',
    key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  };

  function getGoogleMapsStaticMapUrl(urlParams) {
    const googleMapsStaticMapBaseUrl = 'http://maps.googleapis.com/maps/api/staticmap';
    const urlParamsArr = [];
    for (const [key, value] of Object.entries(urlParams)) {
      urlParamsArr.push(`${key}=${value}`);
    };
    const urlParamsStr = urlParamsArr.join('&');
    return `${googleMapsStaticMapBaseUrl}?${urlParamsStr}`;
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  };

  return (
    <div className='address-container'>
      <img src={mapImgUrl} />
      <ul className='address'>
        <li>Architectural Woodworking</li>
        <li>3291 40th Ave N</li>
        <li>St. Petersburg, FL 33714</li>
        <li>(727) 527-7400</li>
      </ul>
    </div>
  );
};