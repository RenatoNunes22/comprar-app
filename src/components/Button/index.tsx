import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.touchable} activeOpacity={0.6} {...rest}>
      <LinearGradient
        colors={["#1978E5", "#8A2BE2"]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
