<?php
/**
 * @MD Joomla! Native Component
 * @author Ivan Komlev <ivankomlev@gmail.com>
 * @link https://joomlaboat.com
 * @GNU General Public License
 **/

// No direct access to this file
defined('_JEXEC') or die('Restricted access');
 
// import joomla controller library
jimport('joomla.application.component.controller');
 
$controller = JControllerLegacy::getInstance('MD');

// Perform the Request task
$jinput=JFactory::getApplication()->input;
$task = $jinput->get('task','','CMD');

//if($task!='')
$controller->execute($task);
 
// Redirect if set by the controller
$controller->redirect();
