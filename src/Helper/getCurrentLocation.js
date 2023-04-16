import { useGeolocated } from "react-geolocated";
export const useGetCurrentPosition = () => {
  console.log("iiiiii");
  const obj = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  console.log("iiiiii", obj);
  return obj;
};
