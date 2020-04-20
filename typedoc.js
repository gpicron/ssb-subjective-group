module.exports = {
    src: [
        './src/ssb-subjective-group.ts',
    ],
    exclude: [
        './node_modules/**/*',
        './dist/**/*'
    ],
    mode: 'file',
    includeDeclarations: true,
    tsconfig: 'tsconfig.json',
    out: './doc',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    excludeNotExported: true,
    readme: 'none',
    name: 'ssb-subjective-group',
    ignoreCompilerErrors: true,
    plugin: 'typedoc-plugin-markdown',
    listInvalidSymbolLinks: true,
    theme: 'markdown'
};
