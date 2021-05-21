import React from "react"
import GoogleMapReact from "google-map-react"
// import { Icon } from "@iconify/react"
// import locationIcon from "@iconify/icons-mdi/map-marker"
import "./map.css"

// const LocationPin = ({ text }) => (
//   <div className="pin">
//     <Icon icon={locationIcon} className="pin-icon" />
//     <p className="pin-text">{text}</p>
//   </div>
// )

const Map = ({ location, zoomLevel }) => {
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us </h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBRs1uPgtVGU4-wcTWdFBl8iDF8HoW9J9M" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          {
            //<LocationPin
            //     lat={location.lat}
            //     lng={location.lng}
            //     text={location.address}
            //   />
          }
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map