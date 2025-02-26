import { Text, ScrollView } from "react-native";
import { IResponse, ITrip } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "expo-router";

async function fetchTrips(): Promise<IResponse<ITrip>> {
  const response = await fetch("/api/trips");
  return response.json();
}

export default function Index() {
  const [trips, setTrips] = useState<ITrip[]>([]);
  useEffect(() => {
    fetchTrips().then((data) => setTrips(data.results));
  }, []);

  return (
    <ScrollView>
      {trips.map((trip) => (
        <Link key={trip.id} href={`/trip?tripId=${trip.id}`}>
          <Text>
            From: {trip.origin.name} To: {trip.destination.name} Departing at:{" "}
            {trip.departure_time}
          </Text>
        </Link>
      ))}
    </ScrollView>
  );
}
