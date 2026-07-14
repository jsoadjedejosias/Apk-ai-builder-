import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const url = (Constants.expoConfig?.extra as any)?.siteUrl ?? "https://example.com";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
