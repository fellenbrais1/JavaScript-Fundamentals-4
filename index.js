"use strict";

let personName = "Michael";

console.log(personName);

// Classes and IDs are essential for styling HTML content, but also for calling on specific objects during JavaScript DOM manipulation, therefore, it is worth adding classes and IDs to anything that we think might need to be interacted with by the code.

// To add a stylesheet to a website we use a <link> element with rel='stylesheet' specified and the href being the path to the css file.

// IDs must be unique and can only apply to one element on the page, classes can be applied to multiple instances on the same page.

// Do not confuse <link> with <a>

// We can use classes and class selectors to style only specific elements, we could apply a standard set of properties to the type of html tag, and then use the class to style on top of that. Class selectors use the . and then the name of the class.

// IDs use the # and then the name of the ID. Prettier will stop you if you try to use an ID for more than one element.

// We can check which CSS rules are being applied to an element by inspecting things in the browser.

// Some properties are inherited by child elements and some are not, we can again check in the browser's developer tools to see which properties are being applied to an element.

// Remember the principles of the box model and it is recommended by the course to define the whole page or the body as 'box-sizing: border-box;' to make it easier to work with. This means that if we specify a width of say 100px it will always be 100px, not larger than that which can happen with the normal model with paddings and margins.

// The instructor also recommends performing a universal reset of the margins and paddings by using the * (all) selector before starting to work on our styling, as the default stylings can get in the way of what we want to do.

// We will be using the same selectors when programming the JavaScript that goes with a website so it is good to know how they work.
