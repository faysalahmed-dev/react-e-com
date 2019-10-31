// get all the img

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

export default images;
