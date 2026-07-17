import { WebView } from "react-native-webview";
import Constants from "expo-constants";
export default function Home() {
  const url = Constants.expoConfig?.extra?.SITE_URL ?? "https://google.com";
  return <WebView source={{ uri: url }} style={{ flex: 1, marginTop: 40 }} />;
}
