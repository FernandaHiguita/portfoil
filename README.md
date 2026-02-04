# Personal Portfolio Website

This project is a responsive personal portfolio website built as a final module assessment.
It showcases my profile, projects, and skills using modern CSS layout techniques such as Flexbox and CSS Grid.

The main goal of this project is to demonstrate a solid understanding of responsive web design, layout composition, and clean structure using HTML and CSS only.

## Features

-Fully responsive design (Desktop, Tablet, and Mobile)
-Built with HTML5 and CSS3
-Layout created using CSS Grid and Flexbox
-Clean and semantic HTML structure
-Modern UI with gradients and visual layers
-No frameworks or external libraries
-Optimized for readability and maintainability

## Layout Structure

The website is divided into the following main sections:

-Navigation Bar
-Hero Section
-About Me
-Projects

(Additional sections can be added later)
Each section has a clear responsibility and uses the most appropriate layout technique depending on its purpose.

Layout Techniques Used

CSS Grid

-CSS Grid is used for main layout structures, where two-dimensional control is required:
-Hero section (text + image)
-About section (image + text)
-Projects section (responsive cards layout)

## Example use cases:

-Creating responsive columns
-Automatically adapting the number of columns based on screen size
-Structuring sections without fixed widths

## Flexbox

Flexbox is used for one-dimensional layouts and internal alignment:

-Navigation bar alignment
-Vertical alignment inside cards
-Button positioning
-Content spacing inside sections
-Flexbox helps keep elements aligned and spaced correctly without relying on margins or fixed positioning.

## Responsive Design

The website is fully responsive and adapts to different screen sizes using media queries.

Breakpoints used:
    @media (max-width: 1024px) { /* Tablet */ }
    @media (max-width: 768px) { /* Mobile */ }


Responsive adjustments include:

-Changing grid layouts from multiple columns to a single column
-Centering content for better mobile readability
-Resizing images and typography for smaller screens
-Adjusting spacing and padding for mobile devices

No duplicate HTML elements are used for responsiveness.

Design Decisions

-A blue-based color palette is used to create a clean and professional look.
-Gradients and layered backgrounds are applied to add visual depth.
-Images are constrained using max-width and max-height to prevent overflow.
-Buttons and interactive elements use subtle hover effects for better UX.

Project Structure

portfoil/
│
├── index.html
├── README.md
├── css/
│   └── styles.css
└── assets/
    └── images/
    └── svg/

All styles are contained in a single CSS file for simplicity and clarity.

How to Run the Project

1. Clone or download the repository
2. Open index.html in your browser
3. No additional setup is required

Learning Outcomes

Through this project, I practiced and reinforced:

-Semantic HTML structure
-Responsive layouts with CSS Grid and Flexbox
-Mobile-first and adaptive design principles
-Visual composition and spacing
-Clean and maintainable CSS organization

Future Improvements

-Add Skills and Contact sections
-Improve accessibility (ARIA labels, contrast)
-Add animations and micro-interactions
-Modularize CSS for larger scale projects
-Add JavaScript for interactivity

Author

    Fernanda
    Web Development Student
    Building modern and responsive web interfaces.