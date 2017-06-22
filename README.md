# lib-util

## Usage

### Gradle build script

    repositories {
        maven {
            url 'http://repo.enonic.com/public'
        }
    }

    dependencies {
        include 'com.enonic.lib:util:1.1.2'
    }

### Controllers
    // Include the library in any controller
	 var libs = {
        util: require('/lib/enonic/util')
    }

	 // Use any of the functions like so (not working examples):
	 libs.util.log(x);
	 libs.util.app.getJsonName(x);
	 // Refer to each js-file in /lib/enonic/util/ on GitHub for documentation on each function.

## Compatibility

| Lib version        | XP version |
| ------------- | ------------- |
| 1.1.2 | 6.3.1 |
| 1.1.1 | 6.3.1 |
| 1.1.0 | 6.3.1 |
| 1.0.0 | 6.0.0 |
