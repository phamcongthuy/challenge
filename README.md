
# LA2050 Activation Challenge

* [How to make changes](#how-to-make-changes)
* [How to develop locally](#how-to-develop-locally)
* [Generating responsive images](#generating-responsive-images)
* [Handy guides](#handy-guides)

This is website for the LA2050 Activation Challenge

https://activation.la2050.org

## How to make changes

The website is published with [GitHub Pages](https://pages.github.com), and the files are generated with [Jekyll](http://jekyllrb.com).

As you make changes and commit/push them to GitHub, the [website](https://activation.la2050.org) will automatically update.

## How to develop locally

If you want to see a preview of your changes while you work, you can [run a Jekyll server](https://jekyllrb.com) on your local machine. [Installing Ruby and Jekyll](https://jekyllrb.com/docs/installation/) is a good place to start.

After you have Jekyll installed, you can clone this project with [Git](https://git-scm.com) or [GitHub Desktop](https://desktop.github.com)…

```
git clone https://github.com/la2050/activation.git
```

And then start running the Jekyll application like this...

```
jekyll serve
```
## Generating responsive images

Some of the images on the website are available in multiple sizes, to save bandwidth. You can regenerate the “goals” images by following these steps…

1) Install [Node.js and NPM](https://nodejs.org/en/download/)

2) Run this command to install the dependencies for this project

```
npm install
```

3) Place your images in the [assets/images/goals/original](https://github.com/la2050/activation/tree/master/assets/images/goals/original) folder

```
/assets/images/goals/original/connect.jpg
/assets/images/goals/original/create.jpg
/assets/images/goals/original/learn.jpg
/assets/images/goals/original/live.jpg
/assets/images/goals/original/play.jpg
```

4) Run this command to generate the images

```
npm start
```

If you want to generate a different set of images, you can edit the [gulpfile](https://github.com/la2050/activation/blob/master/gulpfile.js) and then repeat the steps above.

## Handy guides

* [Markdown](https://guides.github.com/features/mastering-markdown/)
* [Liquid](https://shopify.github.io/liquid/)
* [Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
* [Jekyll](https://jekyllrb.com/docs/home/)

