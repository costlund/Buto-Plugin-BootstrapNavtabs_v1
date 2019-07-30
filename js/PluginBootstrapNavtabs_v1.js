function PluginBootstrapNavtabs_v1(){
  this.nav_init = function(data){
    $('#'+data.ul+' a').click(function (e) {  
      /**
       * LI index.
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
       * 
       */
      var data_show = null;
      var data_url = null;
      nodes = document.getElementById(data.content).childNodes;
      var div_index = -1;
      for (i = 0; i < nodes.length; i++) {
        if(nodes[i].tagName=='DIV'){
          div_index++;
          if(div_index==li_index){
            data_show = nodes[i].id;
            data_url = nodes[i].getAttribute('data-url');
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
       * Show a content div.
       */
      $('#'+data_show).show();
      /**
       * Load data.
       */
      PluginWfAjax.load(data_show, data_url);
    });
    /**
     * Click on a tab.
     */
    document.getElementById(data.ul).getElementsByTagName('a')[data.click].click();
  }
}
var PluginBootstrapNavtabs_v1 = new PluginBootstrapNavtabs_v1();

