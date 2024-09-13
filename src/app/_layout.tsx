import { store } from "@src/redux/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="inde x" />
      </Stack>
    </Provider>
  );
}
