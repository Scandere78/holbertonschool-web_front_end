# Flexbox Project

## Resources

To successfully complete this project, consult the following resources:

- [A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy - A game for learning CSS flexbox](https://flexboxfroggy.com/)
- [Flexbox Defense](http://www.flexboxdefense.com/)
- [Flexbox Cheatsheet](https://flexbox.malven.co/)
- [CSS Flexible Box Layout - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [afonsopacifer/awesome-flexbox](https://github.com/afonsopacifer/awesome-flexbox)
- [Build with Flexbox](https://buildwithflexbox.com/)
- [Flexplorer](https://flexplorer.net/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
- [FLEX: A simple visual cheatsheet for flexbox](https://flexbox.help/)

## Learning Objectives

By the end of this project, you should be able to:

1. Define what Flexbox is and its purpose.
2. Convert layouts using float positioning to Flexbox.
3. Horizontally and vertically align elements with Flexbox.
4. Differentiate between the main axis and cross axis.
5. Explain the properties that apply to flex containers versus flex items.
6. Use shorthand properties for Flexbox.
7. Design and create a new webpage with Flexbox in mind.

## Requirements

- All files must end with a new line.
- A `README.md` file at the root of the project folder is mandatory.
- You are not allowed to install, import, or use external libraries (e.g., NodeJS, React, VueJS, Bootstrap, etc.).
- The project must be built using only HTML and CSS.

## Files

### Images

- Download the required images linked in the [CSS Advanced section](https://example.com) and place them in an `images` directory at the root of the project.
- If the primary link does not work, use the [alternate link](https://example.com).

### HTML Starter File

- Use the provided starter HTML file as the foundation for your project.

## Project Structure

```
project-folder/
├── images/       # Directory for project images
├── 0-index.html    # Main HTML file
├── 0-styles.css    # CSS file for styling
└── README.md     # Project README file
```

## Flexbox Key Points

### Main and Cross Axes
- **Main Axis**: Defined by `flex-direction` (e.g., `row` or `column`).
- **Cross Axis**: Perpendicular to the main axis.

### Flex Container Properties
- `display: flex;`
- `flex-direction`
- `justify-content`
- `align-items`
- `align-content`

### Flex Item Properties
- `order`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `align-self`
- `flex` (shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`)

### Shorthands
- Use `flex: <grow> <shrink> <basis>` for concise item configuration.

## Tips

- Use [Flexbox Froggy](https://flexboxfroggy.com/) and [Flexbox Defense](http://www.flexboxdefense.com/) for interactive learning.
- Refer to the [Flexbox Cheatsheet](https://flexbox.malven.co/) for quick property references.