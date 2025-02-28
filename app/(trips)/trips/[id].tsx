import { Text } from "react-native";
import { ITrip } from "../../../types";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

async function fetchTrip(tripId: string): Promise<ITrip> {
  const response = await fetch(`/api/trips/${tripId}`);
  return response.json();
}

export default function TripDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [trip, setTrip] = useState<ITrip>();
  useEffect(() => {
    fetchTrip(id).then((data) => {
      setTrip(data);
    });
  }, [id]);

  if (!trip) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text>
      {trip.origin.name} to {trip.destination.name} departing at{" "}
      {trip.departure_time}
    </Text>
  );
}
