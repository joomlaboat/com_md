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

class MDViewMenu extends JViewLegacy
{
	function display($tpl = null) 
    {
		parent::display($tpl);
	}
	
	function getMenu($menutype,$addDiv=false,$recursive='false',$imagereplacer='')
    {

			$cssstyle='';
			$blockclass='1';//dashboardmenuitemsimple';

		return ListofMenus::LOAMenu($menutype,$imagereplacer,$blockclass);

    }
	
	public static function getMenuAdvanced($menutype,$imagereplacer)
    {
		$blockclass='dashboardmenuitembox';//dashboardmenuitemsimple';
		return ListofMenus::LOAMenu($menutype,$imagereplacer,$blockclass);

    }
}
