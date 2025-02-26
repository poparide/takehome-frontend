import { IUser } from "@/types";
import { useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";

async function fetchMe(): Promise<IUser> {
  const response = await fetch("http://localhost:8081/api/users/me");
  return response.json();
}

export default function Profile() {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    fetchMe().then((data) => setUser(data));
  }, []);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <Text>Hello {user.name}</Text>
    </ScrollView>
  );
}
