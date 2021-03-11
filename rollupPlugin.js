const { basename, join } = require("path");
const fs = require("fs/promises");

// const rollupPlugin = (options = {}) => {
//     const { targets = [], hook = 'buildEnd' } = options
//     return {
//         name: 'Rollup-plugin',
//         [hook]: () => {
//             targets.forEach(async target => {
//                 console.log(target);
//                 // await fs.mkdir(target.dest, { recursive: true })

//                 // const destPath = join(target.dest, basename(target.src))
//                 // await fs.rollupPlugin(target.src, destPath)
//             })
//         }
//     }
// }
const rollupPlugin = () => {
    return {
        name: "rollup-plugin",
        // async buildStart() {
        //     console.log("Start of building");
        // },
        // async generateBundle() {
        //     console.log("generating bundle");
        // }
        load() {
            console.log("loading...")
        },
        resolveId() {
            console.log("resolving Id...")
        },
        generateBundle() {
            console.log("generating Bundle...")
        },
    };
};

module.exports = rollupPlugin;