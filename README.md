# Server Explorer

A GatsbyJS React app written in TypeScript that retrieves a sortable list of servers via token based user authentication and cookie management.

## Installation

- Install dependencies: `yarn`
- Run the project: `yarn dev`

## Features

- Token based user authentication with `fetch`.
- Token stored as a cookie so that users don't have to re-authenticate when they re-visit the site. This expires after 1 day.
- Form authentication error handling.
- API requests handled with `fetch` based promises.
- Accessibility with Aria attributes and semantic markup.
- State management with React `context`, `useState`, and `useReducer`.
- Login modal built with React Portal.
- Built with React, TypeScript, and SASS.
- Cross browser/device tested including IE11.
- Styling based off GitHub's dark theme.
- Deployed to Vercel.
- Minimal packages.

## Features that Could be Added

- __Add animations with GSAP__: This would give the site more life, and given the sites limitation of needing to support IE 11, GSAP would work perfectly.
- __Improve tab indexing__: This currently works as expected because the correct HTML was used, but there needs to be a nicer focus outline, and when the login is open, the user can still navigate the site with tab index while the portal is open.
- __Custom Select element__: Currently the sort function works with an HTML5 `<select>` element, which works fine. Building something custom would bring it in line with the rest of the sites look. I could also add other sort features to this.
- __Add SEO with Helmet__: Build a component to make the generation of SEO features, such as, structured data, OG tags, and relative meta data easier and almost effortless for content editors. I have done this here __[here](https://github.com/lucasjohnson/my-gatsby-starter/tree/master/src/components/Head)__.

## Work Projects

- [HP OMEN](https://www.omen.com/us/en.html)
- [HP Possibility City](https://digitalprinting.hp.com/us/en/large-format-printers.html)
- [Universal Studios Sherlock Gnomes](https://vimeo.com/268886553)

## Personal Project Examples

- [Gatsby Markdown Blog](https://github.com/lucasjohnson/gatsby-markdown-blog): Gatsby JS, Helmet SEO, Markdown generated content, and advanced tooling to create a great developer experience.
- [Upsplash Search](https://github.com/lucasjohnson/upsplash-search). A Create React App that queries the Upsplash API and displays the results as a grid for viewing.
- [Price App](https://github.com/lucasjohnson/price-app): An app built with Fauna DB, graphQL, TypeScript, and React/Gatsby JS.
