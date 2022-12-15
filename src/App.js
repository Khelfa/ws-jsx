import React from "react";
import "./styles.scss";
import ProfilePhoto from "./Profile/ProfilePhoto";
import FullName from "./Profile/FullName";
import Address from "./Profile/Address";

class App extends React.Component {
  render() {
    return (
      <div style={{ background: "linear-gradient(#e66465, #9198e5);" }}>
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    );
  }
}
export default App;
