import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//https://airbnb.io/enzyme/docs/guides/react-native.html

// import 'react-native';
// import 'jest-enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import Enzyme from 'enzyme';
//
// const { JSDOM } = require('jsdom');
//
// const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
// const { window } = jsdom;
//
// function copyProps(src, target) {
//     Object.defineProperties(target, {
//         ...Object.getOwnPropertyDescriptors(src),
//         ...Object.getOwnPropertyDescriptors(target),
//     });
// }
//
// global.window = window;
// global.document = window.document;
// global.navigator = {
//     userAgent: 'node.js',
// };
// copyProps(window, global);
//
// Enzyme.configure({ adapter: new Adapter() });