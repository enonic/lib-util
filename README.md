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
        include 'com.enonic.lib:util:1.1.3'
    }

### Controllers (3 & 4)
    // Include the library in any controller
    var libs = {
        util: require('/lib/enonic/util')
    }

    // Use any of the functions like so (not working examples):
    libs.util.log(x);
    libs.util.app.getJsonName(x);
    libs.util.data.forceArray(x);
    libs.util.data.trimArray(x);
    // Refer to each js-file in /lib/enonic/util/ on GitHub for documentation on each function.

## Compatibility

| Lib version | XP version |
| ----------- | ---------- |
| 1.1.x | 6.3.1 |
| 1.0.0 | 6.0.0 |

## Changelog

### 1.1.3

* Add dependencies for lib-content and lib-portal as they are used.
