import HotelDisplay from "./HotelDisplay";
import FlightDisplay from "./FlightDisplay";
import Weather from "./Weather";

const InformationView = () => {
  return (
    <div>
      <Weather />
      <FlightDisplay />
      <HotelDisplay />
    </div>
  );
};

export default InformationView;
