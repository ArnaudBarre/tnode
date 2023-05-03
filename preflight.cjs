const { emit } = process;
process.emit = function (event, warning) {
  if (
    event === "warning" &&
    warning.message ===
      "Custom ESM Loaders is an experimental feature and might change at any time"
  ) {
    return;
  }
  return Reflect.apply(emit, this, arguments);
};
process.setSourceMapsEnabled(true);
