# Buto-Plugin-BootstrapNavtabs_v1

<p>Bootstrap 4 navtabs.</p>

<a name="key_0"></a>

## Widgets



<a name="key_0_0"></a>

### include

<p>Include in head.</p>
<pre><code>type: widget
data:
  plugin: bootstrap/navtabs_v1
  method: include</code></pre>

<a name="key_0_1"></a>

### embed

<pre><code>type: widget
data:
  plugin: bootstrap/navtabs_v1
  method: embed
  data:
    id: my_navtabs (mandatory)
    click: The init tab, default 0 (optional)
    item: (mandatory)
      -
        text: Home (mandatory)
        id: (optional, set this (to be able to update div) or a random will be set)
        data-url: (optinal, set this to make an ajax request on tab click)
        data-onclick: (optional, call a method on tab click)
        content: (optional, elements)
        settings: (optional)
          enabled: true</code></pre>
<p>data-url
Replace in string from request params.</p>
<pre><code>        data-url: '/my/page?id=[id]'</code></pre>

<a name="key_1"></a>

## Javascript

<p>Elements with javascript</p>
<p>Change id of my_navtabs and my_content. In my_content DIV set any id and a proper data-url.</p>
<pre><code>-
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
      innerHTML: This content is static.</code></pre>
<p>Tab init
Init method.</p>
<pre><code>-
  type: script
  innerHTML: |
    $( document ).ready(function() {
      PluginBootstrapNavtabs_v1.nav_init({ul: 'my_navtabs', content: 'my_content', click: 0});
    });</code></pre>
<p>Tab click
Script to click on a tab initially.</p>
<pre><code>PluginBootstrapNavtabs_v1.tab_click('_id_of_nav_tabs_', _tab_number_);</code></pre>
<p>If used multiple times one must add force param.</p>
<pre><code>var force = true;
PluginBootstrapNavtabs_v1.tab_click('_id_of_nav_tabs_', _tab_number_, force);</code></pre>

