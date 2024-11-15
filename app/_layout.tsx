import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import Colors from "@/constants/Colors";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function InitialLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={
          {
            headerStyle: {
              backgroundColor: Colors.background,
            },
          }
        }
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="privacy"
          options={{ title: "Privacy Policy", presentation: "modal" }}
        />
        <Stack.Screen
          name="regisiter"
          options={{
            title: "Create Account",
            headerBackTitle: "Login",
            headerBackTitleVisible: true,
          }}
        />
 
      </Stack>
    </>
  );
}

function RootLayout() {
  return <InitialLayout />;
}
