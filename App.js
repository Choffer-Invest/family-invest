
import { View } from 'react-native';
import InvestmentSimulator from './src/components/InvestmentSimulator';

export default function App() {
  return (
    <View className="flex-1 justify-center p-4 bg-white">
      <InvestmentSimulator />
    </View>
  );
}
