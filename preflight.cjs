const { emit } = process;
process.emit = function (event, warning) {
  if (
    event === "warning" &&
    warning.message ===
      "Custom ESM Loaders is an experimental feature and might change at any time"
  ) {
    return;
  }
  if (event === "warning" && warning.message.startsWith("`--experimental-loader` may be removed in the future;")) {
    return;
  }
  return Reflect.apply(emit, this, arguments);
};
process.setSourceMapsEnabled(true);
