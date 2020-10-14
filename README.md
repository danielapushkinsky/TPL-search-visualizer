[Live demo](https://danielapushkinsky.github.io/TPL-search-visualizer/)

## Toronto Public Library Search Visualizer

Inspired by Google's [Search Trend Visualizer](https://trends.google.com/trends/hottrends/visualize) I decided to create something similar for the TPL (Toronto Public Library) using just good old JavaScript and CSS.

Open Data Toronto has published information about the Realtime Feed of Searches Conducted on torontopubliclibrary.ca and how to access it [here](https://open.toronto.ca/dataset/realtime-feed-of-searches-conducted-on-torontopubliclibrary-ca/).

However, the information given there seems to be outdated; they recommend connecting to a WebSocket that is no longer running. Although I reached out to Open Data Toronto about this, they didn’t seem to be too keen on getting back to me.

Instead I found that the only way to get this data now is by fetching it from tpllabs where it gets updated every 20 seconds. Unfortunately, if you try to do this from an HTML/JS page you get a ‘No Access-Control-Allow-Origin header’ error. To fix this error I set up a CORS-Anywhere server on Heroku dedicated just to this specific git repo.

If you wish to test this code yourself make sure you change `proxyurl` in `TPLVisualizer.js` to `"https://cors-anywhere.herokuapp.com/"`, or setup your own CORS-Anywhere Server. [More information on CORS-Anywhere can be found here.](https://github.com/Rob--W/cors-anywhere)

## License

This project contains information licensed under the [Open Government Licence](https://open.toronto.ca/open-data-license/)

This project is distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

* [CORS-Anywhere](https://github.com/Rob--W/cors-anywhere)
* [Controlling CSS Animations and Transitions with JavaScript](https://css-tricks.com/controlling-css-animations-transitions-javascript/)
* [TPL Dashboard](https://dashboard.tpllabs.ca/)
* [Open Data Toronto](https://open.toronto.ca/dataset/realtime-feed-of-searches-conducted-on-torontopubliclibrary-ca/)
