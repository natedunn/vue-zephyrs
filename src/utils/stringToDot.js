export default function stringToDot (object, string) {
  return string.split(".").reduce((o, i) => o[i], object)
}