import { token } from "./auth.mjs";

/** @type {import("@graphql-codegen/cli").CodegenConfig} */
const config = {
  overwrite: true,
  schema: {
    "http://localhost/serviceprovider/graphql": {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
  documents: "*.graphql",
  generates: {
    "types.generated.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;
