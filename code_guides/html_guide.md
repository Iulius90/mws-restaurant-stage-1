# Udacity HTML Style Guide
---


## General Formatting Rules


#### Capitalization - Use only lowercase for HTML element names, attributes, attribute values

``` <a href="/">Home</a>```

#### No Trailing Whitespace (removed automatically by sublime in my case).

#### Indentation - **Consistent indentation** throughout the entire file

## General Meta Rules

#### Encoding

Make sure your editor uses UTF-8 as character encoding. Specify the encoding in HTML templates and documents with ```<meta charset="utf-8">```.

#### Comments - Explain code as needed, where possible.

#### Action Items - Mark todos and action items with TODO:.

Append action items after a colon like this: **TODO: action item.**

ex:
```
<!-- TODO: add other fruits -->
<ul>
    <li>Apples</li>
    <li>Oranges</li>
</ul>
```


## HTML Style Rules

####  Document Type

Use HTML5 (HTML syntax) for all HTML documents: ```<!DOCTYPE html>```.

Do not close self-closing elements, ie. write ```<br>```, not ```<br />```.

####  HTML Validity - Use valid HTML.

#### Semantics - Use HTML according to its purpose.

Use heading elements for headings, p elements for paragraphs, a elements for anchor, etc.

#### Multimedia Fallback

For multimedia, such as images, video, or animated objects via canvas, make sure to offer alternative access. For images that means use of meaningful alternative text and for video and audio transcripts and captions, if available.

For images whose alt attributes would introduce redundancy and for images whose purpose is purely decorative which you cannot immediately use CSS for, use no alternative text, as in alt="".


#### Separation of Concerns

markup in HTML, styling in CSS, behaviour in JS

#### Entity References - Don't use!

**BAD**:  ```symbol for the Euro is &ldquo;&eur;&rdquo;```

**GOOD**: ```symbol for the Euro is “€”.```

#### type Attributes - Don't use **type="text/css"** or **type="text/javascript"**

## HTML Formatting Rules

#### General Formatting

new line for every block, list or table element and indent every such child element.

#### HTML Quotation Marks - use double quotation marks for attribute values

```<a href="login/" class="btn btn-secondary">Login</a>```