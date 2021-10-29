<?php
/**
 * @MD Joomla! Native Component
 * @author Ivan Komlev <ivankomlev@gmail.com>
 * @link http://joomlaboat.com
 * @GNU General Public License
 **/

// No direct access to this file
defined('_JEXEC') or die('Restricted access');

echo '<div class="dashboardblock">'.$this->getMenuAdvanced('dashboard','-32.png,.svg').'</div>';

echo '<div class="dashboardmenusimple">';
echo $this->getMenu('side-menu');
echo '</div>';
