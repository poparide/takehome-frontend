import { Text, ScrollView } from "react-native";
import { ITrip, IResponse } from "../../../types";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

async function fetchTrips({
  originId,
  destinationId,
  departureDate,
}: {
  originId?: string;
  destinationId?: string;
  departureDate?: string;
}): Promise<IResponse<ITrip>> {
  const params = new URLSearchParams();
  if (originId) {
    params.append("origin_id", originId);
  }
  if (destinationId) {
    params.append("destination_id", destinationId);
  }
  if (departureDate) {
    params.append("departure_date", departureDate);
  }

  const response = await fetch(`/api/trips/?${params.toString()}`);
  return response.json();
}

export default function TripList() {
  const { originId, destinationId, departureDate } = useLocalSearchParams<{
    originId?: string;
    destinationId?: string;
    departureDate?: string;
  }>();

  const [trips, setTrips] = useState<ITrip[]>();
  useEffect(() => {
    fetchTrips({ originId, destinationId, departureDate }).then((data) => {
      setTrips(data.results);
    });
  }, [originId, destinationId, departureDate]);

  if (!trips) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      {trips.map((trip) => (
        <Text key={trip.id}>
          {trip.origin.name} to {trip.destination.name} departing at{" "}
          {trip.departure_time}
        </Text>
      ))}
    </ScrollView>
  );
}
