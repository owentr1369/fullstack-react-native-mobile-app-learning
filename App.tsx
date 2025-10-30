import { Container } from 'components/Container';
import './global.css';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <Container>
      <View className="flex flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-blue-500">Hello this is my new text</Text>
      </View>
    </Container>
  );
}
