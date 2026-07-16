# Storybook Assignment Summary

## Project Overview
This project is a React portfolio app named `MyPortpolio`. Storybook is integrated to showcase reusable UI components separately from the main application.

## Storybook Files
- `.storybook/main.js`
  - Configures Storybook to load stories from `src/**/*.stories.@(js|jsx|ts|tsx)`.
  - Uses the `@storybook/react-vite` framework and the `@storybook/addon-essentials` and `@storybook/addon-interactions` addons.

- `.storybook/preview.js`
  - Loads the project styles from `src/index.css` so Storybook stories render with the same Tailwind/Vite design styles.
  - Sets common Storybook parameters for actions and controls.

- `src/stories/MyPortpolio.stories.jsx`
  - Contains Storybook stories for the common reusable components.
  - Defines two stories: `SectionTitleStory` and `InfoCardStory`.

## Reusable Common Components
The portfolio app now includes two reusable UI components placed under `src/MyPortpolio/components/common`.

### `SectionTitle.jsx`
Location: `src/MyPortpolio/components/common/SectionTitle.jsx`

#### Logic
- Accepts props: `eyebrow`, `title`, `description`, and `align`.
- Uses `align` to choose either left or center text alignment.
- Renders:
  - an optional eyebrow label for small section headings
  - a main title
  - an optional description
- This component is useful for repeated section headers such as About, Skills, Experience, or Projects.

#### Usage in app
- Used in `src/MyPortpolio/components/About.jsx` to render the About section heading and description.

### `InfoCard.jsx`
Location: `src/MyPortpolio/components/common/InfoCard.jsx`

#### Logic
- Accepts props: `title`, `value`, `subtitle`, and `accent`.
- Uses `accent` to apply different color styles from a small preset map:
  - `blue`
  - `emerald`
  - `purple`
- Renders a rounded card with a border and subtle background effect.
- Displays a title, a main value, and an optional subtitle.

#### Usage in app
- Used in `src/MyPortpolio/components/Hero.jsx` to show experience and project stats as reusable cards.

## Storybook Stories
### `SectionTitleStory`
- Renders the `SectionTitle` component with sample props for an About section header.
- Demonstrates how the component can be reused in different portfolio sections.

### `InfoCardStory`
- Renders the `InfoCard` component with sample props for a stats card.
- Shows the reusable card style and accent color behavior.

## How to run Storybook
From the project root, run:

```bash
npm install
npm run storybook
```

Then open:

```text
http://localhost:6006/
```

## What to submit
Include the following in your ZIP:
- `src/MyPortpolio` and the `components/common` folder
- `.storybook/main.js`
- `.storybook/preview.js`
- `src/stories/MyPortpolio.stories.jsx`
- `package.json`
- `README.md` or this `STORYBOOK-ASSIGNMENT.md`

This file explains where Storybook was used and how the common reusable components are built and used in the project.
