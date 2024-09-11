import { Button, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store/store";
import { decrement, increment } from "@/store/Reducer/Counter";

export default function Index() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Button
          onPress={() => dispatch(increment())}
          title="Increment"
          color="#841584"
          accessibilityLabel="Increase the counter value"
        />
        <Text>{count}</Text>
        <Button
          onPress={() => dispatch(decrement())}
          title="Decrement"
          color="#841584"
          accessibilityLabel="Decrease the counter value"
        />
      </View>
    </View>
  );
}
