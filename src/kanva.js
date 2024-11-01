// kanva.js
(function() {
    // Function to load content from the partials
    function loadContent(file) {
        return fetch(`_partials/${file}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                return ''; // Return an empty string on error
            });
    }

    // Function to render partials
    async function renderPartials(partialName) {
        const contentDiv = document.querySelector('template-hook'); // Select the template-hook element

        // Load the content of the specified partial
        const content = await loadContent(partialName);
        contentDiv.innerHTML = content; // Insert the loaded content into the template hook
    }

    // Function to determine the partial to load based on the attributes of the template-hook
    function loadPartialFromAttributes() {
        const contentDiv = document.querySelector('template-hook');

        if (contentDiv.hasAttribute('route')) {
            // Load based on the last part of the URL
            const urlPath = window.location.pathname;
            const pathSegments = urlPath.split('/'); // Split the path into segments
            const lastSegment = pathSegments[pathSegments.length - 1]; // Get the last segment
            const partialName = `${lastSegment}.tpl`;
            renderPartials(partialName); // Load the partial based on the URL
        } else if (contentDiv.hasAttribute('name')) {
            // Load based on the specified name in the template hook
            const partialName = `${contentDiv.getAttribute('name')}.tpl`; // Get the name attribute
            renderPartials(partialName); // Load the specified partial
        }
    }

    // When the DOM is fully loaded, check the attributes and load the appropriate partial
    window.onload = loadPartialFromAttributes;

})();
