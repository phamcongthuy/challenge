
# Configuration files

These files allow the site to be configured for different phases without
changing `_config.yml`

This is useful for the _preview_ sites hosted on Netlify since you can
ask Jekyll to load an addition configuration file, for example:

```
jekyll build --config _config.yml,_config/preview-1.yml
```
