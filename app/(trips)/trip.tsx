import { Text, ScrollView } from "react-native";
import { ITrip } from "@/types";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

async function fetchTrip(tripId: string | number): Promise<ITrip> {
  const response = await fetch(`/api/trips/${tripId}`);
  return response.json();
}

export default function Trip() {
  const { tripId } = useLocalSearchParams<{ tripId: string }>();

  const [trip, setTrip] = useState<ITrip>();
  useEffect(() => {
    fetchTrip(tripId).then((data) => setTrip(data));
  }, [tripId]);

  if (!trip) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <Text>{trip.id}</Text>
    </ScrollView>
  );
}
