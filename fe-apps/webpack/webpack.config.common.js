const glob = require("glob");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tailwindcss = require("tailwindcss");

const getEntryObject = () => {
  const entries = {};
  glob
    .sync(path.join(__dirname, "../src/apps/**/index.js"))
    .forEach((entryPath) => {
      const name = path.basename(path.dirname(entryPath), ".js");
      entries[name] = entryPath;
    });
  return entries;
};

module.exports = {
  context: path.resolve(__dirname),
  entry: getEntryObject(),
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../build"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [
                  tailwindcss({
                    content: [
                      path.join(__dirname, "../src/**/*.{js,jsx,ts,tsx}"),
                    ],
                  }),
                  require("autoprefixer"),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: "vendors",
      chunks: "all",
      cacheGroups: {
        tailwindcss: {
          name: "tailwind",
          test: /tailwind.css$/,
          chunks: "all",
        },
      },
    },
  },
};
