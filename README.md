# Materials Cloud timeline

Basic timeline of [Materials Cloud](materialscloud.org) development

# Prerequisites

 * nodeJS

# Installation
```
CC=/usr/bin/gcc CXX=/usr/bin/c++ npm install .
bower install .
grunt server
```

# Usage

Edit `source/index.haml` and `source/javascripts/main.js`.

Use `grunt` to build all JavaScript and StyleSheet files located inside `dist/`. 

Use `grunt server` to start a local web server on [localhost:8080](http://localhost:8080) to customize Timesheet.js, afterwards run `grunt` to compile all needed files.

Use `grunt gh` to generate the site and files available at [sbstjn.github.io/timesheet.js](http://sbstjn.github.io/timesheet.js) into the `gh-pages` folder.

# Acknowledgements

Based on [Timesheet.js](https://sbstjn.github.io/timesheet.js) by @sbstjn.

## License

Timesheet.js is licensed under MIT License.
