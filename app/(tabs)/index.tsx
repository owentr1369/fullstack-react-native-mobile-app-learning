import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white text-blue-500">
      <Text className="text-blue-500">Welcome to Nativewind!</Text>
      <Link href="/movie/avengers">Avengers</Link>
    </View>
  );
}
