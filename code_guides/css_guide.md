# Udacity CSS Style Guide
---

## General Formatting Rules

#### Capitalization - Use only lowercase.(CSS selectors, properties and property values)

#### Trailing Whitespace - remove

#### Indentation - consistent

## General Meta Rules

#### Encoding - Make sure your editor uses UTF-8 as character encoding.

#### Comments - Explain code as needed, where possible.

#### Action Items - Mark todos and action items with TODO:.

Append action items after a colon like this: **TODO: action item.**

## CSS Style Rules

#### CSS Validity - use valid CSS

#### ID and Class Naming - Use meaningful or generic ID and class names.

#### Type Selectors - Avoid qualifying ID and class names with type selectors.

**BAD**: div.error { … }

**GOOD**: .error { … }

#### Shorthand Properties - Shorthand should be used.

#### 0 and Units - Omit unit specification after 0 values.

#### Leading 0s - Include leading 0s in decimal values for readability. ```font-size: 0.8em;```

#### Hexadecimal Notation - Use 3-character hexadecimal notation where possible. ```color: #fff;```

#### ID and Class Name Delimiters

Separate words in ID and class names by a hyphen (-).

One exception: underscores (_) are also acceptable separators when writing BEM style CSS selectors.


#### Hacks - Avoid user agent detection as well as CSS "hacks"—try a different approach first.


## CSS Formatting Rules

#### Block Content Indentation - Indent all block content,

#### Selector and Declaration Separation

use

```
h1,
h2,
h3 {
  ...
}
```

#### Rule Separations - Always put a blank line (two line breaks) between rules.

#### CSS Quotation Marks - Use double quotation marks

## CSS Meta Rules

#### Section Comments

If possible, group style sheet sections together by using comments. Separate sections with new lines.