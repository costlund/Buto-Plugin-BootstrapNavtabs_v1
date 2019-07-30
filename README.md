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
          innerHTML: Utstillinger
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
          innerHTML: Kanuts
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
        id: tab_utstillere_utstillinger
        data-url: /utstillere/utstillinger
        class: plugin_bootstrap_navtabs_content
        style: 'display:none'
      innerHTML:
    -
      type: div
      attribute:
        id: tab_utstillere_kanuts
        data-url: /utstillere/kanuts
        class: plugin_bootstrap_navtabs_content
        style: 'display:none'
    -
      type: div
      attribute:
        id: tab_utstillere_settings
        data-url: /utstillere/settings
        class: plugin_bootstrap_navtabs_content
        style: 'display:none'
-
  type: script
  innerHTML: "PluginBootstrapNavtabs_v1.nav_init({ul: 'my_navtabs', content: 'my_content', click: 0});"
```
