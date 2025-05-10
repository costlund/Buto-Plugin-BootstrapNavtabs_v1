function PluginBootstrapNavtabs_v1(){
  this.data = {nav: []};
  this.nav_init = function(data){
    /**
     * Tab click
     */
    $('#'+data.ul+' a').click(function (e) {  
      /**
       * Find out which order the LI element has for the button to later handle corresponding DIV element.
       */
      var li_index = -1;
      var nodes = Array.prototype.slice.call( this.parentNode.parentNode.childNodes );
      for (i = 0; i < nodes.length; i++) {
        if(nodes[i].tagName=='LI'){
          li_index++;
          if(nodes[i]==this.parentNode){
            break;
          }
        }
      }
      /**
       * Grab corresponding DIV element.
       */
      var div_element = null;
      var data_url = null;
      var data_onclick = null;
      nodes = document.getElementById(data.content).childNodes;
      var div_index = -1;
      for (i = 0; i < nodes.length; i++) {
        if(nodes[i].tagName=='DIV'){
          div_index++;
          if(div_index==li_index){
            div_element = nodes[i].id;
            data_url = nodes[i].getAttribute('data-url');
            data_onclick = nodes[i].getAttribute('data-onclick');
          }
        }
      }
      /**
       * 
       */
      e.preventDefault();
      /**
       * Show tab.
       */
      $(this).tab('show');
      /**
       * Hide all content divs.
       */
      var subNodes = document.querySelectorAll("#"+data.content+" > *");
      $(subNodes).hide();
      /**
       * Show current content div.
       */
      $('#'+data.content+' > #'+div_element).show();
      /**
       * data_url
       */
      if(data_url){
        PluginWfAjax.load(div_element, data_url);
      }
      /**
       * data_onclick
       */
      if(data_onclick){
        eval(data_onclick);
      }
      /**
       * Set data.nav.
       */
      PluginBootstrapNavtabs_v1.data.nav[data.ul] = li_index;
    });
    /**
     * Make a click on a tab.
     */
    this.tab_click(data.ul, data.click);
  }
  this.onclick_example = function(){
    alert('PluginBootstrapNavtabs_v1 says: Replace method PluginBootstrapNavtabs_v1.onclick_example() or remove param data-onclick.');
  }
  this.tab_click = function(ul_id, tab_number, force){
    /**
     * If data.nav is set.
     */
    if(!force && PluginBootstrapNavtabs_v1.data.nav[ul_id]){
      tab_number = PluginBootstrapNavtabs_v1.data.nav[ul_id];
    }
    /**
     * 
     */
    if(document.getElementById(ul_id).getElementsByClassName('nav-link')[tab_number]){
      document.getElementById(ul_id).getElementsByClassName('nav-link')[tab_number].click();
    }
  }
  this.tab_update = function(data){
    this.tab_click(data.ul, this.data.nav[data.ul], true);
  }
}
var PluginBootstrapNavtabs_v1 = new PluginBootstrapNavtabs_v1();
