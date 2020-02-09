function PluginBootstrapNavtabs_v1(){
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
      $('#'+data.content+' .plugin_bootstrap_navtabs_content').hide();
      /**
       * Show current content div.
       */
      $('#'+div_element).show();
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
    });
    /**
     * Make a click on a tab.
     */
    document.getElementById(data.ul).getElementsByTagName('a')[data.click].click();
  }
  this.onclick_example = function(){
    alert('PluginBootstrapNavtabs_v1 says: Replace method PluginBootstrapNavtabs_v1.onclick_example() or remove param data-onclick.');
  }
}
var PluginBootstrapNavtabs_v1 = new PluginBootstrapNavtabs_v1();

