import { injectGlobal } from "styled-components";
import InterstateRegularCondensed_woff from "./fonts/Interstate-RegularCondensed.woff";
import InterstateLight_woff from "./fonts/Interstate-Light.woff";
import InterstateBold_woff from "./fonts/Interstate-Bold.woff";
import InterstateLightCondensed_woff from "./fonts/Interstate-LightCondensed.woff";
import InterstateLightCondensed_ttf from "./fonts/Interstate-LightCondensed.ttf";
import InterstateLightItalic_woff from "./fonts/Interstate-LightItalic.woff";
import ACaslonProItalic_woff from "./fonts/ACaslonPro-Italic.woff";
import ACaslonProBold_woff from "./fonts/ACaslonPro-Bold.woff";
import ACaslonProRegular_woff from "./fonts/ACaslonPro-Regular.woff";
import SparTakus_ttf from "./fonts/SparTakus.ttf";

export const globalStyle = injectGlobal`
@font-face {
	font-family: 'Interstate-RegularCondensed';
	src: url('${InterstateRegularCondensed_woff}') format('woff');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Interstate';
	src: url('${InterstateLight_woff}') format('woff');
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: 'Interstate Bold';
	src: url('${InterstateBold_woff}') format('woff');
	font-weight: bold;
	font-style: normal;
}

@font-face {
	font-family: 'Interstate LightCondensed';
	src: url('${InterstateLightCondensed_woff}') format('woff'), url('${InterstateLightCondensed_ttf}') format('truetype');
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: 'Interstate LightItalic';
	src: url('${InterstateLightItalic_woff}') format('woff');
	font-weight: 300;
	font-style: italic;
}

@font-face {
	font-family: 'Adobe Caslon Pro';
	src: url('${ACaslonProItalic_woff}') format('woff');
	font-weight: normal;
	font-style: italic;
}

@font-face {
	font-family: 'Adobe Caslon Pro';
	src: url('${ACaslonProBold_woff}') format('woff');
	font-weight: bold;
	font-style: normal;
}

@font-face {
	font-family: 'Adobe Caslon Pro';
	src: url('${ACaslonProRegular_woff}') format('woff');
	font-weight: normal;
	font-style: normal;
}


@font-face {
	font-family: 'SparTakus';
	src: url('${SparTakus_ttf}') format('ttf');
	font-weight: normal;
	font-style: normal;
}
body {
  margin: 0;
}
a:link, a:visited, a.active, a.hover {
  text-decoration: none;
  color: #000;
  cursor: pointer;
}
`;
