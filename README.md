# Hardy Orchid Society

The Hardy Orchid Society website shares information about the study, conservation, and cultivation of hardy orchids. It brings together growers, field botanists, conservation volunteers, and anyone interested in native orchids.

**Website:** [https://eshemak.github.io/Hardy-Orchid-Society/](https://eshemak.github.io/Hardy-Orchid-Society/)

## What you'll find

- **About the Society:** its mission, committee, constitution, and contact details.
- **Membership:** joining and renewal information, member benefits, the Society journal, and competitions.
- **Events and field trips:** meetings, regional groups, shows, booking information, and event reports.
- **Conservation and research:** projects, field surveys, research, partner organisations, and conservation grants.
- **Growing hardy orchids:** cultivation guidance, seed-bank information, seed-sowing resources, and propagator information.
- **Orchid identification:** a guide to British and Irish orchids, with profiles for many native species.
- **Member resources:** a members area and discussion forum.

## How the site is built

This is a static website built with HTML, CSS, and JavaScript. Shared header and footer components are in `shared/`; page content is organised into folders such as `about/`, `events/`, `conservation/`, `cultivation/`, and `orchids/`. Images and supporting documents are stored in `assets/` and `images/`.

## Publishing

The site is hosted on GitHub Pages. The workflow in `.github/workflows/static.yml` deploys the repository contents when changes are pushed to `main`, and can also be run manually from the Actions tab. No separate build step is required.
