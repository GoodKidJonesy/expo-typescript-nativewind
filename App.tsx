import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      className="w-full h-full"
    >
      <View className="flex justify-center items-center w-full h-full">
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
}
