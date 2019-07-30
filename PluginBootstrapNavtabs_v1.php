<?php
class PluginBootstrapNavtabs_v1{
  public function widget_include($data){
    $widget = wfDocument::createWidget('wf/embed', 'embed', array('type' => 'script', 'file' => '/plugin/bootstrap/navtabs_v1/js/PluginBootstrapNavtabs_v1.js'));
    wfDocument::renderElement(array($widget));
  }
}
