export default function createInt8TypedArray(length, postion, value) {
  if (postion >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(postion, value);
  return view;
}
