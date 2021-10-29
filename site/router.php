<?php
/**
 * @MD Joomla! Native Component
 * @author Ivan Komlev <ivankomlev@gmail.com>
 * @link http://joomlaboat.com
 * @GNU General Public License
 **/

// no direct access
defined('_JEXEC') or die('Restricted access');

function MDBuildRoute(&$query)
{
       $segments = array();

       if(isset($query['view']))
       {
			if (empty($query['Itemid']))
				$segments[] = $query['view'];

             unset( $query['view'] );
       }
       return $segments;
}

function MDParseRoute($segments)
{
       return array();
}
