<?php
class PluginBootstrapNavtabs_v1{
  public function widget_include($data){
    wfPlugin::enable('wf/embed');
    $widget = wfDocument::createWidget('wf/embed', 'embed', array('type' => 'script', 'file' => '/plugin/bootstrap/navtabs_v1/js/PluginBootstrapNavtabs_v1.js'));
    wfDocument::renderElement(array($widget));
  }
  public function widget_embed($data){
    /**
     * 
     */
    $data = new PluginWfArray($data);
    /**
     * 
     */
    $rs = new PluginWfArray();
    /**
     * data/id (mandatory)
     */
    if($data->get('data/id')){
      $rs->set('tabs_id', $data->get('data/id').'_tabs');
      $rs->set('contents_id', $data->get('data/id').'_contents');
    }else{
      throw new Exception(__CLASS__.'::'. __FUNCTION__.' says: Param id is not set!');
    }
    /**
     * data/item (tabs, mandatory)
     */
    $tabs = array();
    foreach($data->get('data/item') as $k => $v){
      $tab = wfDocument::getElementFromFolder(__DIR__, __FUNCTION__.'_tab');
      $tab->setByTag($v, 'tab', true);
      $tabs[] = $tab->get();
    }
    $rs->set('tabs', $tabs);
    /**
     * data/item (contents, mandatory)
     */
    $contents = array();
    foreach($data->get('data/item') as $k => $v){
      $i = new PluginWfArray($v);
      if(!$i->get('id')){
        $i->set('id', 'X'.wfCrypt::getUid());
      }
      $content = wfDocument::getElementFromFolder(__DIR__, __FUNCTION__.'_content');
      $content->setByTag($i->get(), 'content', true);
      $contents[] = $content->get();
    }
    $rs->set('contents', $contents);
    /**
     * script
     */
    $rs->set('script', "PluginBootstrapNavtabs_v1.nav_init({ul: '".$rs->get('tabs_id')."', content: '".$rs->get('contents_id')."', click: 0})");
    /**
     * 
     */
    $element = wfDocument::getElementFromFolder(__DIR__, __FUNCTION__);
    $element->setByTag($rs->get());
    wfDocument::renderElement($element);
  }
}
