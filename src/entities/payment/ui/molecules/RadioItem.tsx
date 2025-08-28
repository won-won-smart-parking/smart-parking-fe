import { Pressable, View } from "react-native";
import { Icon, Radio, Text } from "@shared/ui/atoms";

export default function RadioItem() {
  return (
    <Pressable>
      {() => (
        <>
          <Radio />
          <View>
            <Icon />
            <Text></Text>
          </View>
        </>
      )}
    </Pressable>
  );
}
