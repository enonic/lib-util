# lib-util

A toolkit for JavaScript developers working with Enonic XP. Handy functions for your daily tasks.

Please contribute!

## Usage

1. Install the library in build.gradle file.
2. Build your app source using Gradle.
3. Require it in any controller you need it in.
4. Use any function from this lib's `/lib/enonic/util/` folder (see examples).

### Gradle build script (1)

    repositories {
        maven {
            url 'http://repo.enonic.com/public'
        }
    }

    dependencies {
        include 'com.enonic.lib:util:1.3.0'
    }

### Controllers (3 & 4)
    // (3) Require the library in any controller
    var libs = {
        util: require('/lib/enonic/util')
    }

    // (4) Use any of the functions like so (not working examples, just showing the format):
    libs.util.log(x);
    libs.util.app.getJsonName(x);
    libs.util.data.forceArray(x);
    libs.util.data.trimArray(x);

Refer to each js-file in /lib/enonic/util/ on GitHub for documentation on each function.

## Compatibility

| Lib version | XP version |
| ----------- | ---------- |
| 1.[1-4].x | 6.3.1 |
| 1.0.0 | 6.0.0 |

## Changelog

### 1.4.0

* Added content.getParent
* Source rewritten in ES.next
* Added many tests with global.app, global.log and libXpContent and libXpPortal fakes.

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
