function plugin({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        const specifiers = path.node.specifiers;
        const source = path.node.source;
        const library = state.opts.libraries[source.value];

        if (library) {
          path.node.source.value = library;
        }
      },
    },
  };
}

module.exports = plugin;
