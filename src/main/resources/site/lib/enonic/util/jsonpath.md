    Doc from http://goessner.net/articles/JsonPath/

    # JSONPath expressions
    JSONPath expressions always refer to a JSON structure in the same way as XPath expression are used in combination with an XML document. Since a JSON structure is usually anonymous and doesn't necessarily have a "root member object" JSONPath assumes the abstract name $ assigned to the outer level object.
    
    JSONPath expressions can use the dot–notation
    
    $.store.book[0].title
    
    or the bracket–notation
    
    $['store']['book'][0]['title']
    
    for input pathes. Internal or output pathes will always be converted to the more general bracket–notation.
    
    JSONPath allows the wildcard symbol * for member names and array indices. It borrows the descendant operator '..' from E4X and the array slice syntax proposal [start:end:step] from ECMASCRIPT 4.
    
    Expressions of the underlying scripting language (<expr>) can be used as an alternative to explicit names or indices as in
    
    $.store.book[(@.length-1)].title
    
    using the symbol '@' for the current object. Filter expressions are supported via the syntax ?(<boolean expr>) as in
    
    $.store.book[?(@.price < 10)].title
    
    Here is a complete overview and a side by side comparison of the JSONPath syntax elements with its XPath counterparts.
    
    Here is a complete overview and a side by side comparison of the JSONPath syntax elements with its XPath counterparts.
    
    XPath	JSONPath	        Description
    /	    $	                the root object/element
    .	    @	                the current object/element
    /	    . or []             child operator
    ..	    n/a	                parent operator
    //	    ..	r               recursive descent. JSONPath borrows this syntax from E4X.
    *	    *	                wildcard. All objects/elements regardless their names.
    @	    n/a	                attribute access. JSON structures don't have attributes.
    []	    []	                subscript operator. XPath uses it to iterate over element collections and for predicates. In Javascript and JSON it is the native array operator.
    |	    [,]	                Union operator in XPath results in a combination of node sets. JSONPath allows alternate names or array indices as a set.
    n/a	    [start:end:step]	array slice operator borrowed from ES4.
    []	    ?()	                applies a filter (script) expression.
    n/a	    ()	                script expression, using the underlying script engine.
    ()	    n/a	                grouping in Xpath 
    
    Example use:

    Having json:
    
    "selectedMetadata": {
        "customerSegment": [
            "48274b8e-5312-4084-9852-9503fdf04015",
            "5dc35fe5-49d8-4bf5-bb30-90345095b3ff",
            "d9b3ebf6-9872-4a74-8546-cf01756bc856"
        ],
        "businessArea": [
            "6def9fd9-08f3-4997-a2b5-6802ace80d53",
            "867332fd-9b3f-49dc-a52f-9c4d4ff37f6c"
        ]
    }
    
    Code in your controller (json shows log of shown commands)
    
    1. UTIL.jsonpath.process(model,'$..selectedMetadata'));
    {
            "customerSegment": [
                "48274b8e-5312-4084-9852-9503fdf04015",
                "5dc35fe5-49d8-4bf5-bb30-90345095b3ff",
                "d9b3ebf6-9872-4a74-8546-cf01756bc856"
            ],
            "businessArea": [
                "6def9fd9-08f3-4997-a2b5-6802ace80d53",
                "867332fd-9b3f-49dc-a52f-9c4d4ff37f6c"
            ]
        }

    2. UTIL.jsonpath.process(model,'$..customerSegment'));
    [
        "48274b8e-5312-4084-9852-9503fdf04015",
        "5dc35fe5-49d8-4bf5-bb30-90345095b3ff",
        "d9b3ebf6-9872-4a74-8546-cf01756bc856"
    ]
    
    3.UTIL.jsonpath.process(model,'$..selectedMetadata.*.*'));
    [
        "48274b8e-5312-4084-9852-9503fdf04015",
        "5dc35fe5-49d8-4bf5-bb30-90345095b3ff",
        "d9b3ebf6-9872-4a74-8546-cf01756bc856",
        "6def9fd9-08f3-4997-a2b5-6802ace80d53",
        "867332fd-9b3f-49dc-a52f-9c4d4ff37f6c"
    ]
    