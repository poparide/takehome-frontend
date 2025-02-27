import { Text, ScrollView } from "react-native";
import { ITrip, IResponse } from "../..//types";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

async function fetchTrips({
  originId,
  destinationId,
}: {
  originId?: string;
  destinationId?: string;
}): Promise<IResponse<ITrip>> {
  const params = new URLSearchParams();
  if (originId) {
    params.append("originId", originId);
  } else if (destinationId) {
    params.append("destinationId", destinationId);
  }

  const response = await fetch(`/api/trips/?${params.toString()}`);
  return response.json();
}

export default function Trip() {
  const { originId, destinationId } = useLocalSearchParams<{
    originId: string;
    destinationId: string;
  }>();

  const [trips, setTrips] = useState<ITrip[]>();
  useEffect(() => {
    fetchTrips({ originId, destinationId }).then((data) => {
      setTrips(data.results);
    });
  }, [originId, destinationId]);

  if (!trips) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      {trips.map((trip) => (
        <Text key={trip.id}>
          {trip.origin.name} to {trip.destination.id}
        </Text>
      ))}
    </ScrollView>
  );
}
