import { ReactElement } from "react";
import tw from "tailwind-styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import SectionTitle from "../SectionTitle/SectionTitle";

const TWMapWrapper = tw.div<any>`
  relative
  py-24
  bg-primary/10
  border-t
border-primary
`;

const TWMap = tw.div<any>`
    bg-red-500
`;

const Map = (): ReactElement => {
  return (
    <TWMapWrapper>
      <div className="container">
        <SectionTitle title="Znajdziesz nas tutaj" />
      </div>
      <div className="container" style={{ height: "500px" }}>
        <MapContainer
          center={[51.0023285, 16.90689599]}
          zoom={15}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.0023285, 16.90689599]} />
        </MapContainer>
      </div>
    </TWMapWrapper>
  );
};

export default Map;
