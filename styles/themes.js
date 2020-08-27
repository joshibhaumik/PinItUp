import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    backgroundColor: "green",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  themeContainer: {
    marginTop: 5,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row"
  },
  themeColor: { flex: 1, fontSize: 25 }
});

export default styles;
