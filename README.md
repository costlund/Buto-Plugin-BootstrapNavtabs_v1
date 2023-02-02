# Buto-Plugin-BootstrapNavtabs_v1

Bootstrap 4 navtabs.

## Include

Include in head.

```
type: widget
data:
  plugin: bootstrap/navtabs_v1
  method: include
```

## Usage

### Widget

```
type: widget
data:
  plugin: bootstrap/navtabs_v1
  method: embed
  data:
    id: my_navtabs (mandatory)
    item: (mandatory)
      -
        text: Home (mandatory)
        id: (optional, set this (to be able to update div) or a random will be set)
        data-url: (optinal, set this to make an ajax request on tab click)
        data-onclick: (optional, call a method on tab click)
        content: (optional, elements)
```


### Elements with javascript

Change id of my_navtabs and my_content. In my_content DIV set any id and a proper data-url.

```
-
  type: ul
  attribute:
    class: 'nav nav-tabs'
    id: my_navtabs
    role: tablist
  innerHTML:
    -
      type: li
      attribute:
        class: nav-item
        role: presentation
      innerHTML:
        -
          type: a
          attribute:
            class: nav-link
            href: '#'
          innerHTML: Home
    -
      type: li
      attribute:
        class: nav-item
        role: presentation
      innerHTML:
        -
          type: a
          attribute:
            class: nav-link
            href: '#'
          innerHTML: Products
    -
      type: li
      attribute:
        class: nav-item
        role: presentation
      innerHTML:
        -
          type: a
          attribute:
            class: nav-link
            href: '#'
          innerHTML: Settings
-
  type: div
  attribute:
    style: 'margin-top:20px;min-height:300px'
    id: my_content
  innerHTML:
    -
      type: div
      attribute:
        id: tab_home
        data-url: /page/home
        class: plugin_bootstrap_navtabs_content
        style: 'display:none'
      innerHTML:
    -
      type: div
      attribute:
        id: tab_products
        data-url: /page/products
        class: plugin_bootstrap_navtabs_content
        style: 'display:none'
      innerHTML:
    -
      type: div
      attribute:
        id: tab_settings
        class: plugin_bootstrap_navtabs_content
        style: 'display:none'
        data-onclick: PluginBootstrapNavtabs_v1.onclick_example()
      innerHTML: This content is static.
-
  type: script
  innerHTML: "PluginBootstrapNavtabs_v1.nav_init({ul: 'my_navtabs', content: 'my_content', click: 0});"
```


## Tab click
Script to click on a tab.
```
PluginBootstrapNavtabs_v1.tab_click('_id_of_nav_tabs_', _tab_number_);
```
