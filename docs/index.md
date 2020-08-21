## Modules

<dl>
<dt><a href="#module_app">app</a></dt>
<dd></dd>
<dt><a href="#module_content">content</a></dt>
<dd></dd>
<dt><a href="#module_content">content</a></dt>
<dd></dd>
<dt><a href="#module_content">content</a></dt>
<dd></dd>
<dt><a href="#module_data">data</a></dt>
<dd></dd>
<dt><a href="#module_image">image</a></dt>
<dd></dd>
<dt><a href="#module_object">object</a></dt>
<dd></dd>
<dt><a href="#module_region">region</a></dt>
<dd></dd>
<dt><a href="#module_value">value</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#toStr">toStr</a> ⇒ <code>String</code></dt>
<dd><p>Syntactic sugar for JSON.stringify</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#getParent">getParent(Content, key, branch)</a> ⇒ <code>object</code></dt>
<dd><p>Returns parent content or null if there is no parent content.</p></dd>
<dt><a href="#getTree">getTree([key], [content], [levels], [count], [map], [sort], [branch])</a> ⇒ <code>Object</code> | <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Returns a tree of contents.</p></dd>
<dt><a href="#isFunction">isFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if the value is a function. Otherwise false.</p></dd>
<dt><a href="#getParent">getParent(Content, key, branch)</a> ⇒ <code>object</code></dt>
<dd><p>Returns parent content or null if there is no parent content.</p></dd>
<dt><a href="#getTree">getTree([key], [content], [levels], [count], [map], [sort], [branch])</a> ⇒ <code>Object</code> | <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Returns a tree of contents.</p></dd>
<dt><a href="#log">log(data)</a></dt>
<dd><p>Log data</p></dd>
</dl>

<a name="module_app"></a>

## app

* [app](#module_app)
    * [.getJsonName](#module_app.getJsonName) ⇒ <code>String</code>
    * [.getShortName](#module_app.getShortName) ⇒ <code>String</code>

<a name="module_app.getJsonName"></a>

### app.getJsonName ⇒ <code>String</code>
<p>Get app's name for use in JSON-nodes (com.enonic.app as com-enonic-app)</p>

**Kind**: static constant of [<code>app</code>](#module_app)  
<a name="module_app.getShortName"></a>

### app.getShortName ⇒ <code>String</code>
<p>Get short app name (last part)</p>

**Kind**: static constant of [<code>app</code>](#module_app)  
<a name="module_content"></a>

## content

* [content](#module_content)
    * [.get](#module_content.get) ⇒ <code>object</code>
    * [.exists](#module_content.exists) ⇒ <code>boolean</code>
    * [.getAncestors(params)](#module_content.getAncestors) ⇒ <code>Array</code>
    * [.getAncestors(params)](#module_content.getAncestors) ⇒ <code>Array</code>
    * [.getPath(key)](#module_content.getPath) ⇒ <code>String</code>
    * [.getProperty(key, property)](#module_content.getProperty) ⇒ <code>\*</code>

<a name="module_content.get"></a>

### content.get ⇒ <code>object</code>
<p>Get content by key (path or id)
Will return portal getContent if param is empty</p>

**Kind**: static constant of [<code>content</code>](#module_content)  
**Returns**: <code>object</code> - <p>Content object</p>  

| Param | Type | Description |
| --- | --- | --- |
| [key] | <code>string</code> | <p>Content key</p> |

<a name="module_content.exists"></a>

### content.exists ⇒ <code>boolean</code>
<p>Check if content exists</p>

**Kind**: static constant of [<code>content</code>](#module_content)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="module_content.getAncestors"></a>

### content.getAncestors(params) ⇒ <code>Array</code>
<p>Returns a list of ancestors.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>Array</code> - <p>Returns a list of ancestor content</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | <p>JSON with the parameters.</p> |
| [params.content] | <code>object</code> | <code>getContent()</code> | <p>Content (as JSON) to find ancestors of.</p> |
| [params.contentTypes] | <code>Array</code> | <code>[&#x60;${app.name}:page&#x60;,&#x27;portal:site&#x27;]</code> | <p>Content types to filter on.</p> |
| [params.count] | <code>Number</code> | <code>-1</code> | <p>Number of contents to fetch.</p> |
| [params.sort] | <code>string</code> | <code>&quot;&#x27;_path ASC&#x27;&quot;</code> | <p>Sorting expression.</p> |

<a name="module_content.getAncestors"></a>

### content.getAncestors(params) ⇒ <code>Array</code>
<p>Returns a list of ancestors.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>Array</code> - <p>Returns a list of ancestor content</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | <p>JSON with the parameters.</p> |
| [params.content] | <code>object</code> | <code>getContent()</code> | <p>Content (as JSON) to find ancestors of.</p> |
| [params.contentTypes] | <code>Array</code> | <code>[&#x60;${app.name}:page&#x60;,&#x27;portal:site&#x27;]</code> | <p>Content types to filter on.</p> |
| [params.count] | <code>Number</code> | <code>-1</code> | <p>Number of contents to fetch.</p> |
| [params.sort] | <code>string</code> | <code>&quot;&#x27;_path ASC&#x27;&quot;</code> | <p>Sorting expression.</p> |

<a name="module_content.getPath"></a>

### content.getPath(key) ⇒ <code>String</code>
<p>Returns the path to the content location. If the key to a content is passed, it will be used. If contenKey is null, the path
to the page that the part is on will be returned.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>String</code> - <p>Returns the path of the save location.</p>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>Content</code> | <p>content key. Example: config['saveFolder']</p> |

<a name="module_content.getProperty"></a>

### content.getProperty(key, property) ⇒ <code>\*</code>
<p>Get content property</p>

**Kind**: static method of [<code>content</code>](#module_content)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | <p>Content key</p> |
| property | <code>string</code> | <p>Property name</p> |

<a name="module_content"></a>

## content

* [content](#module_content)
    * [.get](#module_content.get) ⇒ <code>object</code>
    * [.exists](#module_content.exists) ⇒ <code>boolean</code>
    * [.getAncestors(params)](#module_content.getAncestors) ⇒ <code>Array</code>
    * [.getAncestors(params)](#module_content.getAncestors) ⇒ <code>Array</code>
    * [.getPath(key)](#module_content.getPath) ⇒ <code>String</code>
    * [.getProperty(key, property)](#module_content.getProperty) ⇒ <code>\*</code>

<a name="module_content.get"></a>

### content.get ⇒ <code>object</code>
<p>Get content by key (path or id)
Will return portal getContent if param is empty</p>

**Kind**: static constant of [<code>content</code>](#module_content)  
**Returns**: <code>object</code> - <p>Content object</p>  

| Param | Type | Description |
| --- | --- | --- |
| [key] | <code>string</code> | <p>Content key</p> |

<a name="module_content.exists"></a>

### content.exists ⇒ <code>boolean</code>
<p>Check if content exists</p>

**Kind**: static constant of [<code>content</code>](#module_content)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="module_content.getAncestors"></a>

### content.getAncestors(params) ⇒ <code>Array</code>
<p>Returns a list of ancestors.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>Array</code> - <p>Returns a list of ancestor content</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | <p>JSON with the parameters.</p> |
| [params.content] | <code>object</code> | <code>getContent()</code> | <p>Content (as JSON) to find ancestors of.</p> |
| [params.contentTypes] | <code>Array</code> | <code>[&#x60;${app.name}:page&#x60;,&#x27;portal:site&#x27;]</code> | <p>Content types to filter on.</p> |
| [params.count] | <code>Number</code> | <code>-1</code> | <p>Number of contents to fetch.</p> |
| [params.sort] | <code>string</code> | <code>&quot;&#x27;_path ASC&#x27;&quot;</code> | <p>Sorting expression.</p> |

<a name="module_content.getAncestors"></a>

### content.getAncestors(params) ⇒ <code>Array</code>
<p>Returns a list of ancestors.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>Array</code> - <p>Returns a list of ancestor content</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | <p>JSON with the parameters.</p> |
| [params.content] | <code>object</code> | <code>getContent()</code> | <p>Content (as JSON) to find ancestors of.</p> |
| [params.contentTypes] | <code>Array</code> | <code>[&#x60;${app.name}:page&#x60;,&#x27;portal:site&#x27;]</code> | <p>Content types to filter on.</p> |
| [params.count] | <code>Number</code> | <code>-1</code> | <p>Number of contents to fetch.</p> |
| [params.sort] | <code>string</code> | <code>&quot;&#x27;_path ASC&#x27;&quot;</code> | <p>Sorting expression.</p> |

<a name="module_content.getPath"></a>

### content.getPath(key) ⇒ <code>String</code>
<p>Returns the path to the content location. If the key to a content is passed, it will be used. If contenKey is null, the path
to the page that the part is on will be returned.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>String</code> - <p>Returns the path of the save location.</p>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>Content</code> | <p>content key. Example: config['saveFolder']</p> |

<a name="module_content.getProperty"></a>

### content.getProperty(key, property) ⇒ <code>\*</code>
<p>Get content property</p>

**Kind**: static method of [<code>content</code>](#module_content)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | <p>Content key</p> |
| property | <code>string</code> | <p>Property name</p> |

<a name="module_content"></a>

## content

* [content](#module_content)
    * [.get](#module_content.get) ⇒ <code>object</code>
    * [.exists](#module_content.exists) ⇒ <code>boolean</code>
    * [.getAncestors(params)](#module_content.getAncestors) ⇒ <code>Array</code>
    * [.getAncestors(params)](#module_content.getAncestors) ⇒ <code>Array</code>
    * [.getPath(key)](#module_content.getPath) ⇒ <code>String</code>
    * [.getProperty(key, property)](#module_content.getProperty) ⇒ <code>\*</code>

<a name="module_content.get"></a>

### content.get ⇒ <code>object</code>
<p>Get content by key (path or id)
Will return portal getContent if param is empty</p>

**Kind**: static constant of [<code>content</code>](#module_content)  
**Returns**: <code>object</code> - <p>Content object</p>  

| Param | Type | Description |
| --- | --- | --- |
| [key] | <code>string</code> | <p>Content key</p> |

<a name="module_content.exists"></a>

### content.exists ⇒ <code>boolean</code>
<p>Check if content exists</p>

**Kind**: static constant of [<code>content</code>](#module_content)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="module_content.getAncestors"></a>

### content.getAncestors(params) ⇒ <code>Array</code>
<p>Returns a list of ancestors.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>Array</code> - <p>Returns a list of ancestor content</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | <p>JSON with the parameters.</p> |
| [params.content] | <code>object</code> | <code>getContent()</code> | <p>Content (as JSON) to find ancestors of.</p> |
| [params.contentTypes] | <code>Array</code> | <code>[&#x60;${app.name}:page&#x60;,&#x27;portal:site&#x27;]</code> | <p>Content types to filter on.</p> |
| [params.count] | <code>Number</code> | <code>-1</code> | <p>Number of contents to fetch.</p> |
| [params.sort] | <code>string</code> | <code>&quot;&#x27;_path ASC&#x27;&quot;</code> | <p>Sorting expression.</p> |

<a name="module_content.getAncestors"></a>

### content.getAncestors(params) ⇒ <code>Array</code>
<p>Returns a list of ancestors.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>Array</code> - <p>Returns a list of ancestor content</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | <p>JSON with the parameters.</p> |
| [params.content] | <code>object</code> | <code>getContent()</code> | <p>Content (as JSON) to find ancestors of.</p> |
| [params.contentTypes] | <code>Array</code> | <code>[&#x60;${app.name}:page&#x60;,&#x27;portal:site&#x27;]</code> | <p>Content types to filter on.</p> |
| [params.count] | <code>Number</code> | <code>-1</code> | <p>Number of contents to fetch.</p> |
| [params.sort] | <code>string</code> | <code>&quot;&#x27;_path ASC&#x27;&quot;</code> | <p>Sorting expression.</p> |

<a name="module_content.getPath"></a>

### content.getPath(key) ⇒ <code>String</code>
<p>Returns the path to the content location. If the key to a content is passed, it will be used. If contenKey is null, the path
to the page that the part is on will be returned.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>String</code> - <p>Returns the path of the save location.</p>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>Content</code> | <p>content key. Example: config['saveFolder']</p> |

<a name="module_content.getProperty"></a>

### content.getProperty(key, property) ⇒ <code>\*</code>
<p>Get content property</p>

**Kind**: static method of [<code>content</code>](#module_content)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | <p>Content key</p> |
| property | <code>string</code> | <p>Property name</p> |

<a name="module_data"></a>

## data

* [data](#module_data)
    * [.forceArray](#module_data.forceArray) ⇒ <code>Array</code>
    * [.trimArray](#module_data.trimArray) ⇒ <code>Array</code>
    * [.deleteEmptyProperties(obj, [recursive], recursive)](#module_data.deleteEmptyProperties)

<a name="module_data.forceArray"></a>

### data.forceArray ⇒ <code>Array</code>
<p>Force data to array <br>
Will return an empty array if data is undefined</p>

**Kind**: static constant of [<code>data</code>](#module_data)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>\*</code> | <p>data to force into an array</p> |

<a name="module_data.trimArray"></a>

### data.trimArray ⇒ <code>Array</code>
<p>Trim empty array elements <br>
Like undefined, null or ''</p>

**Kind**: static constant of [<code>data</code>](#module_data)  
**Returns**: <code>Array</code> - <p>Trimmed array</p>  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | <p>Array to trim</p> |

<a name="module_data.deleteEmptyProperties"></a>

### data.deleteEmptyProperties(obj, [recursive], recursive)
<p>Delete all empty properties from an object (property is empty if its a empty string) <br>
Set 'recursive' to true if you also want to delete properties in nested objects</p>

**Kind**: static method of [<code>data</code>](#module_data)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>object</code> |  | <p>The object to delete properties from</p> |
| [recursive] | <code>boolean</code> | <code>false</code> | <p>Delete properties in nested objects</p> |
| recursive | <code>boolean</code> |  |  |

<a name="module_image"></a>

## image
<a name="module_image.getCaption"></a>

### image.getCaption ⇒ <code>String</code>
<p>Finds the caption of an image <br>
Note* Assums the image is uploaded to content studio</p>

**Kind**: static constant of [<code>image</code>](#module_image)  
**Returns**: <code>String</code> - <p>Caption string or empty string</p>  

| Param | Type | Description |
| --- | --- | --- |
| imageRef | <code>Object</code> \| <code>String</code> | <p>Content, id or path to an image</p> |

<a name="module_object"></a>

## object
<a name="module_object.dlv"></a>

### object.dlv(object, keyPath, [default]) ⇒
<p>Safely get a dot-notated path within a nested object, with ability to return
a default if the full key path does not exist or the value is undefined.</p>

**Kind**: static method of [<code>object</code>](#module_object)  
**Returns**: <p>value || default || undefined</p>  

| Param | Type |
| --- | --- |
| object | <code>object</code> | 
| keyPath | <code>string</code> | 
| [default] | <code>\*</code> | 

<a name="module_region"></a>

## region
<a name="module_region.get"></a>

### region.get ⇒ <code>Array</code>
<p>Get regions as array</p>

**Kind**: static constant of [<code>region</code>](#module_region)  
<a name="module_value"></a>

## value

* [value](#module_value)
    * [.isObject](#module_value.isObject) ⇒ <code>boolean</code>
    * [.isString](#module_value.isString) ⇒ <code>boolean</code>
    * [.isNotSet](#module_value.isNotSet) ⇒ <code>boolean</code>
    * [.valueOrEmptyString](#module_value.valueOrEmptyString) ⇒ <code>\*</code>
    * [.isSet(value)](#module_value.isSet) ⇒ <code>boolean</code>
    * [.isInt(value)](#module_value.isInt) ⇒ <code>boolean</code>
    * [.valueOr(value1, value2)](#module_value.valueOr) ⇒ <code>\*</code>
    * [.ifSetPassToFunction(value, fn)](#module_value.ifSetPassToFunction) ⇒ <code>\*</code>

<a name="module_value.isObject"></a>

### value.isObject ⇒ <code>boolean</code>
<p>Returns true if the value is an object. Otherwise false.
Note that array and function is an object.</p>

**Kind**: static constant of [<code>value</code>](#module_value)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="module_value.isString"></a>

### value.isString ⇒ <code>boolean</code>
<p>Returns true if the value is a string. Otherwise false.</p>

**Kind**: static constant of [<code>value</code>](#module_value)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="module_value.isNotSet"></a>

### value.isNotSet ⇒ <code>boolean</code>
<p>Returns true if a value is NOT set. Returns false if the value is set.</p>

**Kind**: static constant of [<code>value</code>](#module_value)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="module_value.valueOrEmptyString"></a>

### value.valueOrEmptyString ⇒ <code>\*</code>
<p>Returns the value if the value is set. Otherwise returns an empty string.</p>

**Kind**: static constant of [<code>value</code>](#module_value)  
**Returns**: <code>\*</code> - <p>value || ''</p>  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="module_value.isSet"></a>

### value.isSet(value) ⇒ <code>boolean</code>
<p>Returns true if a value is set. Returns false if the value is NOT set.</p>

**Kind**: static method of [<code>value</code>](#module_value)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="module_value.isInt"></a>

### value.isInt(value) ⇒ <code>boolean</code>
<p>Check if value is integer</p>

**Kind**: static method of [<code>value</code>](#module_value)  

| Param |
| --- |
| value | 

<a name="module_value.valueOr"></a>

### value.valueOr(value1, value2) ⇒ <code>\*</code>
<p>Returns the value1 if the value1 is set. Otherwise returns value2.</p>

**Kind**: static method of [<code>value</code>](#module_value)  
**Returns**: <code>\*</code> - <p>value || ''</p>  

| Param | Type |
| --- | --- |
| value1 | <code>\*</code> | 
| value2 | <code>\*</code> | 

<a name="module_value.ifSetPassToFunction"></a>

### value.ifSetPassToFunction(value, fn) ⇒ <code>\*</code>
<p>If the value is set: execute the function expression with value as the first
and only parameter and return the return value of the function.
Otherwise don't even execute the function expression and return undefined.</p>

**Kind**: static method of [<code>value</code>](#module_value)  
**Returns**: <code>\*</code> - <ul>
<li>|| undefined</li>
</ul>  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| fn | <code>function</code> | 

<a name="toStr"></a>

## toStr ⇒ <code>String</code>
<p>Syntactic sugar for JSON.stringify</p>

**Kind**: global constant  
**Returns**: <code>String</code> - <p>A JSON string representing the given value.</p>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> |  |
| replacer | <code>function</code> | <p>default: null</p> |
| space | <code>String</code> \| <code>Number</code> | <p>default: 4</p> |

<a name="getParent"></a>

## getParent(Content, key, branch) ⇒ <code>object</code>
<p>Returns parent content or null if there is no parent content.</p>

**Kind**: global function  
**Returns**: <code>object</code> - <p>Content object</p>  

| Param | Type | Description |
| --- | --- | --- |
| Content | <code>object</code> | <p>object</p> |
| key | <code>String</code> | <p>Path or id to the content.</p> |
| branch | <code>String</code> | <p>Set by portal, depending on context, to either draft or master. May be overridden, but this is not recommended. Default is the current branch set in portal.</p> |

<a name="getTree"></a>

## getTree([key], [content], [levels], [count], [map], [sort], [branch]) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>
<p>Returns a tree of contents.</p>

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>Array.&lt;Object&gt;</code> - <p>Content object</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [key] | <code>String</code> \| <code>Array.&lt;String&gt;</code> | <code>currentContent._id</code> | <p>Path or id or an array of the same.</p> |
| [content] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | <code>currentContent</code> | <p>If you already have fetched a content, use this. Content or an array content.</p> |
| [levels] | <code>number</code> | <code>0</code> | <p>Number of levels to fetch. 0 means infinite.</p> |
| [count] | <code>number</code> | <code>0</code> | <p>Number of contents to fetch. 0 means infinite.</p> |
| [map] | <code>function</code> | <code>({displayName, data}) &#x3D;&gt; ({displayName, data})</code> | <p>Function to map content through</p> |
| [sort] | <code>function</code> | <code>_manualordervalue DESC</code> | <p>Sorting expression.</p> |
| [branch] | <code>String</code> |  | <p>Set by portal, depending on context, to either draft or master. May be overridden, but this is not recommended. Default is the current branch set in portal.</p> |

<a name="isFunction"></a>

## isFunction(value) ⇒ <code>boolean</code>
<p>Returns true if the value is a function. Otherwise false.</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="getParent"></a>

## getParent(Content, key, branch) ⇒ <code>object</code>
<p>Returns parent content or null if there is no parent content.</p>

**Kind**: global function  
**Returns**: <code>object</code> - <p>Content object</p>  

| Param | Type | Description |
| --- | --- | --- |
| Content | <code>object</code> | <p>object</p> |
| key | <code>String</code> | <p>Path or id to the content.</p> |
| branch | <code>String</code> | <p>Set by portal, depending on context, to either draft or master. May be overridden, but this is not recommended. Default is the current branch set in portal.</p> |

<a name="getTree"></a>

## getTree([key], [content], [levels], [count], [map], [sort], [branch]) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>
<p>Returns a tree of contents.</p>

**Kind**: global function  
**Returns**: <code>Object</code> \| <code>Array.&lt;Object&gt;</code> - <p>Content object</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [key] | <code>String</code> \| <code>Array.&lt;String&gt;</code> | <code>currentContent._id</code> | <p>Path or id or an array of the same.</p> |
| [content] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | <code>currentContent</code> | <p>If you already have fetched a content, use this. Content or an array content.</p> |
| [levels] | <code>number</code> | <code>0</code> | <p>Number of levels to fetch. 0 means infinite.</p> |
| [count] | <code>number</code> | <code>0</code> | <p>Number of contents to fetch. 0 means infinite.</p> |
| [map] | <code>function</code> | <code>({displayName, data}) &#x3D;&gt; ({displayName, data})</code> | <p>Function to map content through</p> |
| [sort] | <code>function</code> | <code>_manualordervalue DESC</code> | <p>Sorting expression.</p> |
| [branch] | <code>String</code> |  | <p>Set by portal, depending on context, to either draft or master. May be overridden, but this is not recommended. Default is the current branch set in portal.</p> |

<a name="log"></a>

## log(data)
<p>Log data</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| data | <code>\*</code> | 

