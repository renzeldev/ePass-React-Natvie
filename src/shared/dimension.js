import { Dimensions } from 'react-native';
export const fixedWidth = 750;
export const fixedHeight = 1624;
export const W = Dimensions.get('window').width;
export const H = Dimensions.get('window').height;
export const eh =H/fixedHeight;
export const ew =W/fixedWidth;;

export const fontSizes = {
	default: 30*ew,
	small: 25*ew,
	button: 32*ew,
}