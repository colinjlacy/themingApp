# themingApp
A simple app to demonstrate user-selected themes in Ionic 2

This is a simple, straightforward Ionic 2 app that I built to demonstrate user-selected themes.  The goal of this was to demonstrate:
– A settings page
– A way for the user to choose a theme
– Proof that the changing theme works as you navigate across the app

It was meant to accompany [a blog post I wrote](https://webcake.co/theming-an-ionic-2-application/).

## Installation

Pull this repo, and then install NPM packages:
```
$ npm install
```

**Note that there are system configurations and installations you'll have to have completed in order to run Ionic in a simulator on your machine.  You can find instructions in the [Ionic documentation](http://ionicframework.com/docs/v2/).**

Make sure you're configured for whatever platforms on which you might want to run this app:
```
$ ionic add android
$ ionic add ios
```

Once that's done, you can start the app on either platform:
```
$ ionic run ios
$ ionic emulate android
```

## Functionality

This app starts with a default blue set of styles, and allows the user to select between said blue theme and an alternate red theme.  To toggle themes:
- open the app
- click on the hamburger menu and navigate to Settings
- choose from the `select` whichever theme you'd like to see activated

Once you shoose an option, the app should change colors to reflect the theme you've chosen.  Feel free to add themes and options.  If you're interested in the code, please feel free to [read through my blog post](https://webcake.co/theming-an-ionic-2-application/).
