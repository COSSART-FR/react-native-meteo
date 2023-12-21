import { s } from "./SearchBar.style";
import { TextInput, View } from "react-native";

export default function SearchBar({ onSubmit }) {
  return (
    <TextInput
      onSubmitEditing={onSubmit}
      style={s.input}
      placeholder="Chercher une ville ... Ex: Paris"
    />
  );
}
