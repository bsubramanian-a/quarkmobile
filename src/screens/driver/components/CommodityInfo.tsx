import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CommodityInfo = () => {
  return (
    <View style={[styles.commodityInfoView]}>
      <View style={styles.frameView}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../../../assets/vector.png")}
        />
        <Text style={[styles.commodityInformationText, styles.ml6]}>
          Commodity Information
        </Text>
      </View>
      <View style={[styles.frameView5, styles.mt8]}>
        <View style={styles.frameView2}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../../../assets/vector8.png")}
          />
          <View style={styles.frameView1}>
            <Text style={styles.commodityNameText}>Commodity Name</Text>
            <Text style={[styles.casticSodaText, styles.mt4]}>Castic Soda</Text>
          </View>
        </View>
        <View style={styles.frameView4}>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../../../assets/vector9.png")}
          />
          <View style={styles.frameView3}>
            <Text style={styles.pakagingText1}>
              <Text style={styles.pakagingText}>{`Pakaging `}</Text>
            </Text>
            <Text style={[styles.bag25Kg, styles.mt4]}>Bag, 25 kg</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  mt4: {
    marginTop: 4,
  },
  mt8: {
    marginTop: 8,
  },
  vectorIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  commodityInformationText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  vectorIcon1: {
    height: 14,
    width: 18,
    marginEnd: 7
  },
  commodityNameText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  casticSodaText: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    flexDirection: "row",
    width: "50%",
    flexShrink: 0,
  },
  pakagingText: {
    marginStart: 0,
    marginEnd: 0,
  },
  pakagingText1: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#e7e9f4",
    textAlign: "left",
  },
  bag25Kg: {
    fontSize: 11,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  frameView3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon2: {
    height: 14,
    width: 20,
    marginEnd: 7,
  },
  frameView4: {
    width: "50%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexDirection: "row",
    flexShrink: 0,
  },
  frameView5: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#8493c7",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 22,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  commodityInfoView: {
    alignSelf: "stretch",
    height: 105,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 21
  },
});

export default CommodityInfo;
