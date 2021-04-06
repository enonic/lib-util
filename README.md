# lib-util

A toolkit for JavaScript developers working with Enonic XP. Handy functions for your daily tasks.

Please contribute!

## Documentation

The documentation can be found in [docs](/docs/index.md)

## Usage

1. Install the library in build.gradle file.
2. Build your app source using Gradle.
3. Require it in any controller you need it in.
4. Use any function from this lib's `/lib/util/` folder (see examples).

### Gradle build script (1)

    repositories {
        maven {
            url 'http://repo.enonic.com/public'
        }
    }

    dependencies {

        // Depending on version (3.0.0+), lib-context and lib-admin may also be needed.
        // If problems, and they are not already in your build, add these:
        // include "com.enonic.xp:lib-context:${xpVersion}"
        // include "com.enonic.xp:lib-admin:${xpVersion}"

        // Lib-util:
        include 'com.enonic.lib:lib-util:3.0.0'
    }

### Controllers (3 & 4)
    // (3) Require the library in any controller
    var libs = {
        util: require('/lib/util')
    }

    // (4) Use any of the functions like so (not working examples, just showing the format):
    libs.util.log(x);
    libs.util.app.getJsonName(x);
    libs.util.data.forceArray(x);
    libs.util.data.trimArray(x);

Refer to each js-file in `/lib/util/` on GitHub for documentation on each function.

## Compatibility

| Lib version | XP version |
| ----------- | ---------- |
| 3.0.0 | 7.1.0 |
| 2.3.x | 7.1.0 |
| 2.2.x | 7.0.0 |
| 2.1.0 | 7.0.0 |
| 2.0.0 | 7.0.0 |
| 1.4.x | 6.14.0 |
| 1.[1-3].x | 6.3.1 |
| 1.0.0 | 6.0.0 |

## Changelog

### 3.1.0-SNAPSHOT

* Buildsystem upgrades:
  * Node 14.16.0
  * Babel modules 7.13.14
  * All node modules up to date

### 3.0.0

* Lib dependencies changed from `compile` to `compileOnly` to avoid conflict between libraries from different versions of XP

```
dependencies {
  compileOnly "com.enonic.xp:lib-admin:${xpVersion}"
  compileOnly "com.enonic.xp:lib-content:${xpVersion}"
  compileOnly "com.enonic.xp:lib-context:${xpVersion}"
  compileOnly "com.enonic.xp:lib-portal:${xpVersion}"
}
```

These 4 libraries were available in an application using `lib-util`
via transitive dependency. From now on you will have to explicitly
include them in the app if you are using `lib-util`:

```
dependencies {
  include 'com.enonic.lib:lib-util:3.0.0'
  include "com.enonic.xp:lib-admin:${xpVersion}"
  include "com.enonic.xp:lib-content:${xpVersion}"
  include "com.enonic.xp:lib-context:${xpVersion}"
  include "com.enonic.xp:lib-portal:${xpVersion}"
}
```
### 2.3.1

* Buildsystem upgrades:
  * Node 12.20.1
  * Upgrade node modules

### 2.3.0

* Documentation added
* content.exists uses the 7.1 exists method

### 2.2.1

* Compile lib-context since getSites requires it.

### 2.2.0

* Added getSites

### 2.1.0

* Added getAncestors
* Added getChildren

### 2.0.0

* Compatibility with XP7
* Restructuring (`/lib/enonic/util/` -> `/lib/util/`)

### 1.4.0

* Added content.getParent
* Added content.getTree
* Added portal.getLocale
* Added value.isFunction
* Source rewritten in ES.next
* Added many tests with global.app, global.log and libXpContent and libXpPortal fakes
* Upgraded required version of Enonic XP to 6.14.0, since there is no lib-admin-6.3.1

### 1.3.0

* Added value.isObject, value.isString, object.hasProperty and object.dlv

### 1.2.2

* Fixed library build.

### 1.2.1

* Fixed library dependencies.

### 1.2.0

* Introducing the new "value.js" function library that adds handy functions like `isSet`, `isNotSet`, `valueOr`, `valueOrEmptyString` and `ifSetPassToFunction`.

### 1.1.3

* Add dependencies for lib-content and lib-portal as they are used.
