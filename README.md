# lib-util

## Usage

### Gradle build script

    repositories {
        maven {
            url 'http://repo.enonic.com/public'
        }
    }

    dependencies {
        include 'com.enonic.lib:util:1.1.1'
    }

### Controllers
    var libs = {
        util: require('/lib/enonic/util');
    }

## Compatibility

| Lib version        | XP version |
| ------------- | ------------- |
| 1.1.1 | 6.3.1 |
| 1.1.0 | 6.3.1 |
| 1.0.0 | 6.0.0 |
