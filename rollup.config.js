import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");
const rollupPlugin = require("./rollupPlugin");

export default {
    input: "src/index.ts",
    output: [{
            file: packageJson.main,
            format: "cjs",
        },
        {
            file: packageJson.module,
            format: "esm",
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss(),
        rollupPlugin()
    ]
};