<?php
/**
 * @MD Joomla! Native Component
 * @author Ivan Komlev <ivankomlev@gmail.com>
 * @link http://joomlaboat.com
 * @GNU General Public License
 **/

// No direct access to this file
defined('_JEXEC') or die('Restricted access');
 
// import Joomla view library
jimport('joomla.application.component.view');

use \Joomla\CMS\Factory;

class MDViewDocument extends JViewLegacy
{
	function display($tpl = null) 
    {
		$path=JPATH_SITE . DIRECTORY_SEPARATOR . 'components' . DIRECTORY_SEPARATOR . 'com_md' . DIRECTORY_SEPARATOR . 'includes' . DIRECTORY_SEPARATOR;
		require_once($path.'Parsedown.php');
		
		$path=JPATH_SITE . DIRECTORY_SEPARATOR . 'components' . DIRECTORY_SEPARATOR . 'com_md' . DIRECTORY_SEPARATOR . 'includes' . DIRECTORY_SEPARATOR;
		require_once($path.'sidebar.php');

		$app = Factory::getApplication();
		$params = $app->getParams();
		$folder = $params->get('folder');
		
		$this->sidebar = MDSidebar::buildSidebar($folder);
		
		$jinput=Factory::getApplication()->input;
		$this->homeFileLabel = $jinput->getString('document','');
		if($this->homeFileLabel == '')
		{
			$this->homeFileLabel = $params->get('home');
			if($this->homeFileLabel == null or $home_file_label == '')
			{
				$this->homeFileLabel = MDSidebar::firstMDFileLabel($folder);
			}
		}
		
		$home_file = $this->homeFileLabel.'.md';
	
		$path = JPATH_SITE . DIRECTORY_SEPARATOR . $folder;
		
		
		$this->currentFile = $path . DIRECTORY_SEPARATOR . $home_file;
		
		$this->githublink = $params->get('githublink');
		
		$this->show_sidebar = (bool)(int)$params->get('sidebar');
		
		$parts = explode('.',$this->homeFileLabel);
		if(isset($parts[1]))
			$this->Label=str_replace('-',' ',$parts[1]);
		else
			$this->Label=str_replace('-',' ',$parts[0]);
	
		parent::display($tpl);
	}
}
