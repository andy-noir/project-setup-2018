```
folder/
├── project-name/
│   ├── build/
│   │   ├──js/
│   │   │  ├──main.js
│   │   │  └──main.min.js
│   │   └──css/
│   │   │  ├──normalize.css
│   │   │  ├──styles.css
│   │   │  └──styles.min.css
│   └── src/
│   │   ├──js/
│   │   │  ├──file1.js
│   │   │  └──file2.js
│   │   └──scss/
│   │   │  ├──file1.scss
│   │   │  ├──file2.scss
│   │   │  └──styles.scss
│   └── index.html
└── node_modules/
└── .gitignore 
└── .eslintrc.js
└── readme.md
└── gulpfile.js
└── package.json
└── package-lock.json
```

```
git init
npm init
```

```  npm i --save-dev gulp gulp-plumber gulp-rename gulp-autoprefixer gulp-concat gulp-uglify gulp-imagemin gulp-cache gulp-csso gulp-sass browser-sync gulp-babel babel-core babel-preset-env eslint
```

```
.\node_modules\.bin\eslint --init under Windows
./node_modules/.bin/eslint --init under Linux and Mac
```