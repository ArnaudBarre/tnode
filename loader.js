import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { transform } from "esbuild";

export function resolve(specifier, context, nextResolve) {
  if (!specifier.endsWith(".ts")) return nextResolve(specifier);
  return {
    shortCircuit: true,
    url: context.parentURL
      ? new URL(specifier, context.parentURL).href
      : new URL(specifier).href,
  };
}

export async function load(url, context, nextLoad) {
  if (url.endsWith(".json")) {
    const code = `export default ${readFileSync(fileURLToPath(url), "utf-8")}`;
    return { format: "module", shortCircuit: true, source: code };
  }
  if (!url.endsWith(".ts")) return nextLoad(url);
  const path = fileURLToPath(url);
  const { code, warnings } = await transform(readFileSync(path), {
    loader: "ts",
    target: "node18",
    format: "esm",
    sourcemap: "inline",
    sourcefile: path,
  });
  for (const warning of warnings) console.log(warning.location, warning.text);
  return { format: "module", shortCircuit: true, source: code };
}
