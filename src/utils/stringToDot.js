function stringToDot (string, object) {
  return string.split(".").reduce((o, i) => o[i], object)
}

export default stringToDot;