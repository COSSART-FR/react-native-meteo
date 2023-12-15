import { ImageBackground } from "react-native";
import { s } from "./App.style";
import Home from "./pages/Home/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import backgroundImg from "./assets/background.png";

export default function App() {
  return (
    <ImageBackground source={backgroundImg} style={s.background_img} imageStyle={s.img}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
