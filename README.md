# kanva.js

## Overview

kanva.js is a lightweight JavaScript library designed to simplify the process of loading and rendering HTML partials within your web applications. It provides an easy way to manage and include reusable components, improving maintainability and modularity.
Features

    Dynamic loading of HTML partials based on URL or custom attributes.
    Easy integration with existing projects.
    Lightweight and fast, without dependencies.

## Getting Started
### Installation

You can include kanva.js in your project by downloading the file or linking to it via a CDN.

html

<script src="path/to/kanva.js"></script>

Folder Structure

Your project should have the following structure:

bash

/your-project
│
├── /docs
│   ├── index.html
│   └── /_partials
│       ├── child1.tpl
│       └── child2.tpl
│
└── kanva.js

HTML Setup

In your index.html, use the <template-hook> element to specify where partials should be loaded. You can use attributes to define how the partials will be loaded.

html

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
    <!-- or for URL-based loading -->
    <template-hook route></template-hook>
</body>
</html>

Usage
Loading Partials by Name

To load a specific partial, use the name attribute on the <template-hook>.

html

<template-hook name="child1"></template-hook>

Loading Partials by URL

To load a partial based on the current page URL, use the route attribute.

html

<template-hook route></template-hook>

API Reference
Methods
loadContent(file: string): Promise<string>

Loads the content of the specified HTML partial.

    Parameters
        file: The name of the partial file (e.g., child1.tpl).

    Returns: A Promise that resolves with the HTML content of the partial.

renderPartials(partialName: string): Promise<void>

Renders the specified partial into the template-hook.

    Parameters
        partialName: The name of the partial file to render.

    Returns: A Promise that resolves once the partial has been rendered.

loadPartialFromAttributes(): void

Determines which partial to load based on the attributes of the <template-hook>.

    Returns: Nothing. It triggers loading of the appropriate partial based on the attributes.

Examples
Example 1: Loading a Partial by Name

To load child1.tpl:

html

<template-hook name="child1"></template-hook>

Example 2: Loading a Partial Based on URL

To load a partial based on the current URL:

html

<template-hook route></template-hook>

If the URL is http://localhost:5500/docs/child1, it will load child1.tpl.
Contributing

Contributions are welcome! If you have suggestions or improvements, please feel free to submit a pull request or open an issue in the GitHub repository.
License

kanva.js is licensed under the MIT License. See the LICENSE file for details.
