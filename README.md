# MGS Model United Nations

This is a web app made with React for MGS MUN 2021. It's really simple and can be easily reused for future years with little tech knowledge.

Except for a few bespoke components, most of the website's content is simply direct Markdown-to-React translation using `react-markdown`. The Markdown source files are found [here](https://github.com/palkerecsenyi/mgs-mun/tree/main/src/markdown) and are requested from the static backend using async imports on-demand, saving loads of bandwidth and making the frontend very fast and lightweight.

## Media
On top of the website and its components, this repository also contains reference branding material made with [Affinity Designer](https://affinity.serif.com/en-gb/designer/) (paid) that can be used with various software as it's exported in EPS and PNG formats.

- [EPS](https://github.com/palkerecsenyi/mgs-mun/tree/main/src/assets/eps_logos) and [PNG](https://github.com/palkerecsenyi/mgs-mun/tree/main/src/assets/png_logos) versions of the logo in 3 colours. 
- [Bespoke icons](https://github.com/palkerecsenyi/mgs-mun/tree/main/src/assets/committees) for the 9 committees used in 2021 (using CC material from FontAwesome).
- [Source `.afdesign` files](https://github.com/palkerecsenyi/mgs-mun/tree/main/src/assets)

## Hosting
mgsmun.co.uk is registered via Namecheap and can be transferred on request. Hosting is provided through Firebase Hosting using a static build of this React app (see `firebase.json`).

To deploy an update, run `yarn deploy` after logging in via `firebase login`.
