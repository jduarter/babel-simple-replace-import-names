# babel-simple-replace-import-names

Simple Babel plugin to replace import names.

## Install

```
npm install --save-dev babel-simple-replace-import-names
```

## Usage

Add the following to the `plugins` section of Babel config:

```
[
  'babel-simple-replace-import-names',
  {
    libraries: {
      'react-native-gesture-handler': '/just/a/test/with/absolutePaths/rngh.js',
      'react-native-reanimated': '/just/a/test/with/absolutePaths/rna.js'
    }
  }
]
```

Then Babel will replace all the code importing from the provided module names to the given path...
