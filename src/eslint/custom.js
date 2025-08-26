const plugin = {
  meta: {
    name: "eslint-plugin-example",
    version: "1.2.3",
    namespace: "example",
  },
  configs: {},
  rules: {
    "no-bad-imports": {
      create: function (context) {
        return {
          ImportDeclaration(node) {
            if (node.source.value.contains("file/bad-import")) {
              context.report({
                node,
                message: "Do not use bad imports",
              });
            }
          },
        };
      },
    },
  },
  processors: {},
};

export default plugin;
