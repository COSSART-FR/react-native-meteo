import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  weather_label: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  image: {
    width: 90,
    height: 90,
    backgroundColor: "white",
  },
  temperature_box: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  temperature: {
    fontSize: 150,
  },
});

export { s };
