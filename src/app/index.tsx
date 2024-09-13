import { decrement, increment } from "@src/store/Reducer/Counter";
import type { RootState } from "@src/store/store";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
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
