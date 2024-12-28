import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { Image } from "expo-image";

const icon = require("./assets/pollito.gif");

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={{
              fontSize: pressed ? 32 : 16,
            }}
          >
            {pressed ? "Presionado!" : "Presioname"}
          </Text>
        )}
      </Pressable>

      <Text style={{ color: "white" }}>
        Mi primera aplicación con react native
      </Text>
      <Image
        source={icon}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <Button title="Presioname" onPress={() => alert("Presionaste")} />

      <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert("Presionaste TouchableHighlight")}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
        }}
      >
        <Text style={{ color: "white" }}>Presioname</Text>
      </TouchableHighlight>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
