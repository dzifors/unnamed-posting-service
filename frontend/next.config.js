// import { join } from "path";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     sassOptions: {
//         includePaths: [join(__dirname, "styles")]
//     }
// };

// export default nextConfig;

// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    }
};
module.exports = nextConfig;
