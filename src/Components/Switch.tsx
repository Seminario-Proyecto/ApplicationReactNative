import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import MyColors from "../color/MyColors";

const Switch1 = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: MyColors.thirth, true: "#81b0ff" }} //colores cuando se apaga
        thumbColor={isEnabled ? MyColors.secondary : MyColors.thirth} //colores cuando se prende
        //ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  }
});

export default Switch1;