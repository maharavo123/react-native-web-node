import { AppRegistry } from "react-native";
import "./src/client/icomoon.js";
import App from "./src/client/index";

AppRegistry.registerComponent("TestMediaQueries", () => App);
AppRegistry.runApplication("TestMediaQueries", {
  rootTag: document.getElementById("root")
});

if (module.hot) {
  module.hot.accept();
}
