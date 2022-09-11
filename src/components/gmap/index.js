import React, { useEffect,useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getLocationByUser } from '../../actions/users'
import {getUserData,setCallResponse, updateVisibleOnMap, } from '../../actions/auth'




const GMap = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const location_user = useSelector((state) => state.users.location_user)

  // console.log('location_user=======',location_user)
  useEffect(() => {
    let token = localStorage.getItem("check_token")
    let data = {
        token: token
    }
    dispatch(getUserData(data))
}, [])

useEffect(() => {
  let userlat = localStorage.getItem("userlat")
  let userlng = localStorage.getItem("userlng")
  let interested_in = localStorage.getItem("interested_in")
  let connection_id = localStorage.getItem("connection_id")
  let token = localStorage.getItem("check_token")

  let data = {
    lat:userlat,
    lng:userlng,
    distance:'10',
    interested_in:interested_in,
    connection_type:connection_id,
    min_age:'26',
    max_age:'28',
    profile_verification:0,
    background_check_verification:0,
    driving_license_verification:0,
    token: token
  }
  // console.log('data========',data)
  dispatch(getLocationByUser(data))
},[])



  const googleMapRef = useRef(null);
  let googleMap = null;

  // list of icons
  const iconList = {
    icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
    icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
    icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
    icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
  }

  // list of the marker object along with icon
  const markerList = [
    { lat: 30.7166249, lng: 76.6946029, icon: iconList.icon2 },
    { lat: 33.86463488447904, lng: 33.86463488447904, icon: iconList.icon2 },
    { lat: 33.67592416795166, lng: -112.07778054962013, icon: iconList.icon2 },
    { lat: 28.02965103184301, lng: 76.4732393157449, icon: iconList.icon2 },
  ]

  let location = []

  useEffect(() => {
   if(location_user){
    location = location_user?.map((key) => {
      let a =  {lat : Number(key.lat), lng : Number(key.lng), icon : 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png' }
      // console.log(a)
      return a
    })
   }
}, [location_user])


useEffect(() => {
  // console.log(location,"+++=====")
  googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    location?.map(x => {
      const marker = createMarker(x);
      bounds.extend(marker.position);
    });
    googleMap.fitBounds(bounds); // the map to contain all markers
  }, [location]);


  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
        center: { lat: 40.76, lng: -73.983 },
        zoom: 15,
        mapTypeId: "satellite",
        // heading: 90,
        // tilt: 45,
    });
  }

  // create marker on google map
  const createMarker = (markerObj) => new window.google.maps.Marker({
    position: { lat: markerObj.lat, lng: markerObj.lng },
    map: googleMap,
    icon: {
      // url: markerObj.icon,
      // set marker width and height
      scaledSize: new window.google.maps.Size(50, 50)
    }
  });

  return <div
    ref={googleMapRef}
    style={{ width: 600, height: 500 }}
  />
}

export default GMap;