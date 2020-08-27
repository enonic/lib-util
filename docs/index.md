## Modules

<dl>
<dt><a href="#module_app">app</a></dt>
<dd></dd>
<dt><a href="#module_portal">portal</a></dt>
<dd></dd>
<dt><a href="#module_query">query</a></dt>
<dd></dd>
<dt><a href="#module_content">content</a></dt>
<dd></dd>
<dt><a href="#module_data">data</a></dt>
<dd></dd>
<dt><a href="#module_object">object</a></dt>
<dd></dd>
<dt><a href="#module_region">region</a></dt>
<dd></dd>
<dt><a href="#module_value">value</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
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
<a name="module_portal"></a>

## portal
<a name="module_portal.getLocale"></a>

### portal.getLocale(param)
**Kind**: static method of [<code>portal</code>](#module_portal)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| param | <code>Object</code> |  | <p>JSON with the parameters</p> |
| param.key | <code>String</code> |  | <p>content key</p> |
| [param.content] | <code>Object</code> | <code>content.get(key) \|\| portal.currentContent()</code> | <p>defaults to content with given key</p> |

<a name="module_query"></a>

## query

* [query](#module_query)
    * [.addFilter(param)](#module_query.addFilter) ⇒ <code>Object</code>
    * [.hasValue(field, values)](#module_query.hasValue) ⇒ <code>Object</code>
    * [.ids(values)](#module_query.ids) ⇒ <code>Object</code>

<a name="module_query.addFilter"></a>

### query.addFilter(param) ⇒ <code>Object</code>
**Kind**: static method of [<code>query</code>](#module_query)  
**Returns**: <code>Object</code> - <p>Returns the updated filters object</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| param | <code>Object</code> |  | <p>Object with the parameters</p> |
| [param.clause] | <code>String</code> | <code>&#x27;must&#x27;</code> | <p>Filter clause</p> |
| param.filter | <code>Object</code> |  |  |

<a name="module_query.hasValue"></a>

### query.hasValue(field, values) ⇒ <code>Object</code>
**Kind**: static method of [<code>query</code>](#module_query)  
**Returns**: <code>Object</code> - <p>object containing the hasValues with field and values</p>  

| Param | Type |
| --- | --- |
| field | <code>Object</code> | 
| values | <code>Object</code> | 

<a name="module_query.ids"></a>

### query.ids(values) ⇒ <code>Object</code>
<p>Adds values to an id object</p>

**Kind**: static method of [<code>query</code>](#module_query)  
**Returns**: <code>Object</code> - <p>returns a object with id containing the values</p>  

| Param | Type |
| --- | --- |
| values | <code>\*</code> | 

<a name="module_content"></a>

## content

* [content](#module_content)
    * [.get](#module_content.get) ⇒ <code>Object</code>
    * [.exists](#module_content.exists) ⇒ <code>Boolean</code>
    * [.getAncestors(params)](#module_content.getAncestors) ⇒ <code>Object</code>
    * [.getChildren(params)](#module_content.getChildren) ⇒ <code>Object</code>
    * [.getParent([content], key, [branch])](#module_content.getParent) ⇒ <code>object</code>
    * [.getSites(params)](#module_content.getSites) ⇒ <code>Object</code>
    * [.getTree([key], [content], [levels], [count], [map], [sort], [branch])](#module_content.getTree) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>
    * [.getPath([key])](#module_content.getPath) ⇒ <code>String</code>
    * [.getProperty(key, property)](#module_content.getProperty) ⇒ <code>\*</code>

<a name="module_content.get"></a>

### content.get ⇒ <code>Object</code>
<p>Get content by key</p>

**Kind**: static constant of [<code>content</code>](#module_content)  
**Returns**: <code>Object</code> - <p>Returns the content object</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [key] | <code>String</code> | <code>portal.getContent()</code> | <p>path or id of content</p> |

<a name="module_content.exists"></a>

### content.exists ⇒ <code>Boolean</code>
<p>Check if content exists</p>

**Kind**: static constant of [<code>content</code>](#module_content)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>path or id</p> |

<a name="module_content.getAncestors"></a>

### content.getAncestors(params) ⇒ <code>Object</code>
<p>Returns a list of ancestors.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>Object</code> - <p>Returns a query result with a list of ancestor content (result.hits)</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | <p>JSON with the parameters.</p> |
| [params.content] | <code>object</code> | <code>getContent()</code> | <p>Content (as JSON) to find ancestors of.</p> |
| [params.contentTypes] | <code>Array</code> | <code>[&#x60;${app.name}:page&#x60;,&#x27;portal:site&#x27;]</code> | <p>Content types to filter on.</p> |
| [params.count] | <code>Number</code> | <code>-1</code> | <p>Number of contents to fetch.</p> |
| [params.sort] | <code>string</code> | <code>&quot;&#x27;_path ASC&#x27;&quot;</code> | <p>Sorting expression.</p> |

<a name="module_content.getChildren"></a>

### content.getChildren(params) ⇒ <code>Object</code>
<p>Returns a list of all child content.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>Object</code> - <ul>
<li>Object with hits propertie being the content children</li>
</ul>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | <p>JSON with the parameters.</p> |
| [params.id] | <code>String</code> |  | <p>Content id to find children of</p> |
| [params.path] | <code>String</code> |  | <p>Content path to find children of</p> |
| [param.key] | <code>String</code> | <code>id || path</code> |  |
| [params.branch] | <code>String</code> |  | <p>What branch to search</p> |
| [params.content] | <code>object</code> | <code>getContent()</code> | <p>Content (as JSON) to find children of.</p> |
| [params.contentTypes] | <code>Array</code> | <code>[]</code> | <p>Content types to filter on.</p> |
| [params.count] | <code>Number</code> | <code>-1</code> | <p>Number of contents to fetch.</p> |
| [params.filters] | <code>Object</code> | <code>{}</code> |  |
| [params.query] | <code>String</code> |  |  |
| [params.sort] | <code>string</code> | <code>&quot;&#x27;_manualordervalue DESC&#x27;&quot;</code> | <p>Sorting expression.</p> |
| [params.start] | <code>Number</code> | <code>0</code> |  |

<a name="module_content.getParent"></a>

### content.getParent([content], key, [branch]) ⇒ <code>object</code>
<p>Returns parent content or null if there is no parent content.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>object</code> - <p>Returns the parent content or null</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [content] | <code>object</code> | <code>content.get(key) \|\| portal.getContent()</code> | <p>May be overridden. Default is content by key or current content</p> |
| key | <code>String</code> |  | <p>Path or id to the content.</p> |
| [branch] | <code>String</code> |  | <p>May be overridden, but this is not recommended. Defaults to the current branch set in portal if not overriden.</p> |

<a name="module_content.getSites"></a>

### content.getSites(params) ⇒ <code>Object</code>
<p>Gets all content of type portal:sites</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>Object</code> - <p>Returns a query result with hits of all sites (result.hits)</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>Object</code> |  | <p>JSON with the parameters</p> |
| [params.aggregations] | <code>Object</code> |  |  |
| [params.branch] | <code>Object</code> |  | <p>what branch to use in the context</p> |
| [params.context] | <code>object</code> | <code>lib.context.get()</code> | <p>Context object used to find sites.</p> |
| [params.count] | <code>Number</code> | <code>-1</code> | <p>Number of elements to search for</p> |
| [params.filters] | <code>Object</code> |  |  |
| [params.query] | <code>String</code> |  |  |
| [params.sort] | <code>String</code> |  |  |
| [params.start] | <code>Number</code> |  |  |

<a name="module_content.getTree"></a>

### content.getTree([key], [content], [levels], [count], [map], [sort], [branch]) ⇒ <code>Object</code> \| <code>Array.&lt;Object&gt;</code>
<p>Returns a tree of contents.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>Object</code> \| <code>Array.&lt;Object&gt;</code> - <p>hierarchy of passed in content</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [key] | <code>String</code> \| <code>Array.&lt;String&gt;</code> | <code>currentContent._id</code> | <p>Path or id or an array of the same.</p> |
| [content] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | <code>currentContent</code> | <p>If you already have fetched a content, use this. Content or an array content.</p> |
| [levels] | <code>number</code> | <code>0</code> | <p>Number of levels to fetch. 0 means infinite.</p> |
| [count] | <code>number</code> | <code>0</code> | <p>Number of contents to fetch. 0 means infinite.</p> |
| [map] | <code>function</code> | <code>({displayName, data}) &#x3D;&gt; ({displayName, data})</code> | <p>Function to map content through</p> |
| [sort] | <code>function</code> | <code>_manualordervalue DESC</code> | <p>Sorting expression.</p> |
| [branch] | <code>String</code> |  | <p>Set by portal, depending on context, to either draft or master. May be overridden, but this is not recommended. Default is the current branch set in portal.</p> |

<a name="module_content.getPath"></a>

### content.getPath([key]) ⇒ <code>String</code>
<p>Returns the path to the content location. If the key to a content is passed, it will be used.
If contenKey is null or undefined, the path to the page that the part is on will be returned.</p>

**Kind**: static method of [<code>content</code>](#module_content)  
**Returns**: <code>String</code> - <p>Returns the path</p>  

| Param | Type | Description |
| --- | --- | --- |
| [key] | <code>Content</code> | <p>content key. Example: config['saveFolder']</p> |

<a name="module_content.getProperty"></a>

### content.getProperty(key, property) ⇒ <code>\*</code>
<p>Get content property</p>

**Kind**: static method of [<code>content</code>](#module_content)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>Content key</p> |
| property | <code>String</code> | <p>Property name</p> |

<a name="module_data"></a>

## data

* [data](#module_data)
    * [.forceArray](#module_data.forceArray) ⇒ <code>Array</code>
    * [.trimArray](#module_data.trimArray) ⇒ <code>Array</code>
    * [.deleteEmptyProperties(obj, [recursive])](#module_data.deleteEmptyProperties)

<a name="module_data.forceArray"></a>

### data.forceArray ⇒ <code>Array</code>
<p>Force data to array
Note that current UTIL.log function won't reflect the changes due to a bug in JSON.stringify</p>

**Kind**: static constant of [<code>data</code>](#module_data)  

| Param |
| --- |
| data | 

<a name="module_data.trimArray"></a>

### data.trimArray ⇒ <code>Array</code>
<p>Trim empty array elements
Note that current UTIL.log function won't reflect the changes due to a bug in JSON.stringify</p>

**Kind**: static constant of [<code>data</code>](#module_data)  
**Returns**: <code>Array</code> - <p>Trimmed array</p>  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | <p>Array to trim</p> |

<a name="module_data.deleteEmptyProperties"></a>

### data.deleteEmptyProperties(obj, [recursive])
<p>Delete all properties with an empty string from an object
Set 'recursive' to true if you also want to delete properties in nested objects</p>

**Kind**: static method of [<code>data</code>](#module_data)  

| Param | Type | Default |
| --- | --- | --- |
| obj | <code>Object</code> |  | 
| [recursive] | <code>boolean</code> | <code>false</code> | 

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
    * [.toStr](#module_value.toStr) ⇒ <code>String</code>
    * [.isObject](#module_value.isObject) ⇒ <code>boolean</code>
    * [.isString](#module_value.isString) ⇒ <code>boolean</code>
    * [.isNotSet](#module_value.isNotSet) ⇒ <code>boolean</code>
    * [.valueOrEmptyString](#module_value.valueOrEmptyString) ⇒ <code>\*</code>
    * [.isFunction(value)](#module_value.isFunction) ⇒ <code>boolean</code>
    * [.isSet(value)](#module_value.isSet) ⇒ <code>boolean</code>
    * [.isInt(value)](#module_value.isInt) ⇒ <code>boolean</code>
    * [.valueOr(value1, value2)](#module_value.valueOr) ⇒ <code>\*</code>
    * [.ifSetPassToFunction(value, fn)](#module_value.ifSetPassToFunction) ⇒ <code>\*</code>

<a name="module_value.toStr"></a>

### value.toStr ⇒ <code>String</code>
<p>Syntactic sugar for JSON.stringify</p>

**Kind**: static constant of [<code>value</code>](#module_value)  
**Returns**: <code>String</code> - <p>A JSON string representing the given value.</p>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> |  |
| replacer | <code>function</code> | <p>default: null</p> |
| space | <code>String</code> \| <code>Number</code> | <p>default: 4</p> |

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

<a name="module_value.isFunction"></a>

### value.isFunction(value) ⇒ <code>boolean</code>
<p>Returns true if the value is a function. Otherwise false.</p>

**Kind**: static method of [<code>value</code>](#module_value)  

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

<a name="log"></a>

## log(data)
<p>Log data</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| data | <code>\*</code> | 

