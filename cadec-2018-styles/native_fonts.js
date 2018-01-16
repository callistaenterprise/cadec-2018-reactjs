import React from "react";
import { Font } from "expo";
import { Text } from "react-native";
import InterstateRegularCondensed_ttf from "./fonts/Interstate-RegularCondensed.ttf";
import InterstateLight_ttf from "./fonts/Interstate-Light.ttf";
import InterstateBold_ttf from "./fonts/Interstate-Bold.ttf";
import InterstateLightCondensed_ttf from "./fonts/Interstate-LightCondensed.ttf";
import InterstateLightItalic_ttf from "./fonts/Interstate-LightItalic.ttf";
import ACaslonProItalic_ttf from "./fonts/ACaslonPro-Italic.ttf";
import ACaslonProBold_ttf from "./fonts/ACaslonPro-Bold.ttf";
import ACaslonProRegular_ttf from "./fonts/ACaslonPro-Regular.ttf";
import SparTakus_ttf from "./fonts/SparTakus.ttf";

export default C =>
  class extends React.Component {
    state = {
      fontLoaded: false
    };
    async componentWillMount() {
      await Font.loadAsync({
        "Interstate-RegularCondensed": InterstateRegularCondensed_ttf,
        Interstate: InterstateLight_ttf,
        "Interstate Bold": InterstateBold_ttf,
        "Interstate LightCondensed": InterstateLightCondensed_ttf,
        "Interstate LightItalic": InterstateLightItalic_ttf,
        "Adobe Caslon Pro": ACaslonProItalic_ttf,
        "Adobe Caslon Pro": ACaslonProBold_ttf,
        "Adobe Caslon Pro": ACaslonProRegular_ttf,
        SparTakus: SparTakus_ttf
      });
      this.setState({ fontLoaded: true });
    }
    render() {
      return this.state.fontLoaded ? (
        <C {...this.props} fontLoaded={this.state.fontLoaded} />
      ) : (
        <Text>Loading</Text>
      );
    }
  };
