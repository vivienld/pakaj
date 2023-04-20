import { PackageJson } from "./PackageJson";

/** The base package.json template. */
const DefaultPackageJson: PackageJson = {
    name: "",
    version: "1.0.0",
    description: "",
    main: "index.js",
    scripts: {
        test: 'echo "Error: no test specified" && exit 1',
    },
    keywords: [],
    author: "",
    license: "ISC",
};

export { DefaultPackageJson };
