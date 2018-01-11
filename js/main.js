import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "player-one-side": {
        "backgroundColor": "#F3D8D2"
    },
    "player-two-side": {
        "backgroundColor": "#D0F1D5"
    }
});