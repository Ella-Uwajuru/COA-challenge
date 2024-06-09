# COA-challenge
Repository for Code of Africa (COA) challenge solutions. Explore solutions to various coding challenges provided by Code of Africa, showcasing problem-solving skills and algorithmic thinking. Each challenge solution is carefully documented and implemented in a clear and concise manner.



# Project: Responsive Animal Gallery & Algorithm Challenges

This project consists of two main parts: a responsive animal gallery web page and a set of JavaScript algorithm challenges. Below is an explanation of each component and its approach.

## Table of Contents

1. [Algorithm Challenges](#algorithm-challenges)
    - [arrayMap](#hasSubarrayWithTargetSum)
    - [StringTransform](#StringTransform)
2. [Responsive Animal Gallery](#responsive-animal-gallery)
    - [index.html](#indexhtml)
    - [script.js](#scriptjs)
    - [style.css](#stylecss)

## Algorithm Challenges

### hasSubarrayWithTargetSum

**File:** `arrayMap.js`

#### Description:
This function checks if there exists a contiguous subarray within a given array that sums up to a specified target value.

#### Approach:
- Initialize `start` pointer and `currentSum` to 0.
- Traverse the array with an `end` pointer.
- Add the current element to `currentSum`.
- If `currentSum` exceeds the target, adjust the window by moving the `start` pointer and subtracting the corresponding values from `currentSum`.
- If `currentSum` equals the target, return `true`.
- If no such subarray is found by the end of the array, return `false`.

#### Example Usage:
```javascript
let arr = [4, 2, 7, 1, 9, 5];
let target = 17;
console.log(hasSubarrayWithTargetSum(arr, target)); // Output: true
```

### transformString

**File:** `StringTransform.js`

#### Description:
This function transforms a given string based on specific rules:
- If the length of the string is divisible by 3, it reverses the string.
- If the length of the string is divisible by 5, it converts each character to its ASCII value.

#### Approach:
- Store the original string in `result`.
- Check the length of the string:
  - If divisible by 3, reverse the string.
  - If divisible by 5, convert each character to its ASCII value and join them with spaces.
- Return the transformed string.

#### Example Usage:
```javascript
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
```

## Responsive Animal Gallery

### index.html

**File:** `index.html`

#### Description:
The main HTML file that structures the responsive animal gallery.

#### Approach:
- Includes links to external CSS for styling and Google Fonts for font loading.
- Structures the gallery using a series of `div` elements, each representing a gallery image with associated information.
- Links the external CSS file (`style.css`) for styling and the JavaScript file (`script.js`) for interactivity.

### script.js

**File:** `script.js`

#### Description:
The JavaScript file responsible for adding interactivity to the animal gallery.

#### Approach:
- Wait for the DOM to load completely.
- Select all gallery images and loop through each one to:
  - Create an overlay `div` and append it to the gallery image.
  - Apply filter effects when hovering over the image or the "know more" link.
  - Reset the filter effects when the hover ends.

### style.css

**File:** `style.css`

#### Description:
The CSS file that styles the animal gallery and ensures responsiveness.

#### Approach:
- Set global styles for the body and font.
- Use Flexbox to create a responsive gallery layout.
- Style each gallery image and its content:
  - Add transitions for smooth filter effects.
  - Use pseudo-elements for additional effects on hover.
- Include media queries to adjust the layout and visibility of elements based on screen size.

---


