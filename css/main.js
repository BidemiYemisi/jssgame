import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#F3D8D2"
    },
    "player-background": {
        "backgroundColor": "#FFFFFF"
    },
    "score-background": {
        "background": "#FC7379"
    },
    "extra-lg-font": {
        "fontSize": 90
    },
    "player-bottom-margin": {
        "marginBottom": 50
    },
    "player-top-margin": {
        "marginTop": 50
    },
    "text-bottom-margin": {
        "marginBottom": 20
    },
    "text-top-margin": {
        "marginTop": 20
    },
    "active-player": {
        "backgroundColor": "#AADA58"
    }
});