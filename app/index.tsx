import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://vetmarlborough.co.nz/wp-content/uploads/cat-facts.jpg",
        }}
      />
      <Link href="/(authenticated)/(tabs)/home" asChild>
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>Login</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/regisiter" asChild >
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>Register</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/privacy" asChild>
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>Privacy</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
});

export default Page;
