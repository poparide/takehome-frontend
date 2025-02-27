import { Text, ScrollView, TextInput, Button } from "react-native";

export default function SearchScreen() {
  return (
    <ScrollView>
      <Text>Search</Text>
      <TextInput placeholder="Origin" />
      <TextInput placeholder="Destination" />
      <Button title="Search" />
    </ScrollView>
  );
}
