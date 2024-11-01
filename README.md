# kanva.js

## Overview

kanva.js is a lightweight JavaScript library designed to simplify the process of loading and rendering HTML partials within your web applications. It provides an easy way to manage and include reusable components, improving maintainability and modularity.

## Features
- Dynamic loading of HTML partials based on URL or custom attributes.
- Easy integration with existing projects.
- Lightweight and fast, without dependencies.

## Installation

You can include `kanva.js` in your project by downloading the file or linking to it via a CDN.
```
<script src="path/to/kanva.js"></script>
```
Ensure that your HTML structure includes a <template-hook> element where the content will be dynamically loaded.

## HTML Structure
Your HTML should contain a <code><template-hook></code> element, which can be configured to load different partials based on attributes.

### Example
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>kanva.js Example</title>
    <script src="path/to/kanva.js" defer></script>
</head>
<body>
    <template-hook name="child1"></template-hook>
    <template-hook route></template-hook>
</body>
</html>    
```

## Usage

You can use kanva.js in two ways depending on your needs:

By Name: Load a specific partial by setting the name attribute on the <template-hook>.
```
    <template-hook name="child1"></template-hook>
```

This will load the child1.tpl partial.

By Route: Load a partial based on the current URL. Set the route attribute on the <template-hook>.

```
    <template-hook route></template-hook>
```

This will load the child1.tpl or child2.tpl partial based on the last segment of the URL.

## Contributing

We welcome contributions! If you'd like to contribute to kanva.js, please fork the repository and submit a pull request. For larger changes, consider opening an issue to discuss your ideas first.

## License

This project is licensed under the MIT License. See the LICENSE file for details.


