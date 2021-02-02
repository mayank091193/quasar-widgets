<p align="center">
  <a href="https://github.com/mayank091193/quasar-widgets">
    <img src="https://raw.githubusercontent.com/mayank091193/quasar-widgets/master/demo/assets/quasar-widgets-logo.png" alt="Logo" width="225" height="80">
  </a>

  <h3 align="center">Quasar Widgets</h3>

  <p align="center">
    An awesome set of beautiful Widgets made with love using Quasar Framework and Vue.js!
    <br />
    <a href="https://quasar-widgets.netlify.app/#/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://quasar-widgets.netlify.app/#/examples">View Demo</a>
    ·
    <a href="https://github.com/mayank091193/quasar-widgets/issues">Report Bug</a>
    ·
    <a href="https://github.com/mayank091193/quasar-widgets/issues">Request Feature</a>
  </p>
</p>

### NPM Package: https://www.npmjs.com/package/quasar-app-extension-q-widgets

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Uninstall](#uninstall)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Support](#support)
* [License](#license)
* [Contact Me](#contact)

## About The Project

Free library of great widgets to handle specific requirements in an effective manner. Instant integration, fully responsive and supports all major browsers!

Here's why:
* Just install, integrate by giving the type and few other required attributes and that's it.
* Fully responsive on all resolutions
* Supports all major browsers
* Fully customizable

Of course, it may not contain the widget you are looking for, but it will be there eventually. Just request feature and I'll try my best to have it integrated in future version.

### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Quasar Framework](https://quasar.dev/)
* [Vue.js](https://vuejs.org/)

## Getting Started
### Installation

To add this App Extension to your Quasar application, run the following (in your Quasar app folder):

```
quasar ext add q-widgets
```


* Clone the repo (For Demo Project)
```
git clone https://github.com/mayank091193/quasar-widgets.git
```
* Install NPM packages
```
cd quasar-widgets/demo
npm install
```

### Uninstall
To remove this App Extension from your Quasar application, run the following (in your Quasar app folder):

```
quasar ext remove q-widgets
```

## Usage
### Countdown

<p float="left">
	<kbd>
        <img src="https://raw.githubusercontent.com/mayank091193/quasar-widgets/master/demo/assets/countdown.png" border="1" alt="Countdown"  />
    </kbd>
</p>

* You can simply render the Countdown widget on your website using the following code snippet.
```
<q-widgets name="countdown" fontColor="white" labelColor="black" date="2020-09-25 15:17:00"></q-widgets>
```

### Stopwatch

<p float="left">
	<kbd>
        <img src="https://raw.githubusercontent.com/mayank091193/quasar-widgets/master/demo/assets/stopwatch.png" border="1" alt="Stopwatch"  />
    </kbd>
</p>

* Render the stopwatch on your website
```
<q-widgets name="stopwatch" fontColor="#c8c8c8"></q-widgets>
```

### Weather

<p float="left">
	<kbd>
        <img src="https://raw.githubusercontent.com/mayank091193/quasar-widgets/master/demo/assets/weather.png" border="1" alt="Weather"  />
    </kbd>
</p>


* Render the Weather widget on your website. It will ask users to enter the "city, state" e.g. "Pune, Maharashtra". Please note, this package utilizes "OpenWeatherMap" API. Please replace ```api_key``` with your own "OpenWeatherMap" API key. However, the package will use the default API if you do not pass it. 
```
<q-widgets name="weather" api_key=""></q-widgets>
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/mayank091193/quasar-widgets/issues) for a list of proposed features (and known issues).



## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

If this helps you, you can contribute to this project by supporting me:

### [💜Support my open-source work on GitHub](https://github.com/sponsors/mayank091193)

Please check out my sponsor page.

Thank you very much!!

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Mayank Patel - [@mayank091193](https://twitter.com/mayank91193) - mayank091193@gmail.com

Project Link: [https://github.com/mayank091193/quasar-widgets](https://github.com/mayank091193/quasar-widgets)

Website: https://mayank-patel.netlify.app/#/