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

class MDViewAPI extends JViewLegacy
{
	function display($tpl = null) 
    {
		$db = JFactory::getDBO();
		
		$w='o.published=1 AND o.es_shopid = s.id AND o.es_active=1';
		$from = '#__customtables_table_originalproducts AS o';
		
		$selects = [];
		
		$selects[]='s.id AS id';
		$selects[]='s.es_name AS es_name';
		$selects[]='s.es_updatedat AS es_updatedat';
		$selects[]='(SELECT COUNT(id) FROM '.$from.' WHERE '.$w.') AS total_products';
		$selects[]='(SELECT COUNT(id) FROM '.$from.' WHERE '.$w.' AND o.es_createdat IS NOT NULL AND DATEDIFF(NOW(), es_createdat)>0) AS left_to_load';
		$selects[]='(SELECT COUNT(id) FROM '.$from.' WHERE '.$w.' AND o.es_createdat IS NULL) AS deleted';
		$selects[]='(SELECT COUNT(id) FROM '.$from.' WHERE '.$w.' AND o.es_updatedat IS NOT NULL) AS uploaded';
		$selects[]='(SELECT COUNT(id) FROM '.$from.' WHERE '.$w.' AND o.es_updatedat IS NOT NULL AND o.es_updatedat<o.es_createdat) AS left_to_upload';
		$selects[]='(SELECT COUNT(id) FROM '.$from.' WHERE '.$w.' AND o.es_updatedat IS NOT NULL AND o.es_updatedat>=o.es_createdat AND o.es_exportstatus=9) AS added';
		$selects[]='(SELECT COUNT(id) FROM '.$from.' WHERE '.$w.' AND o.es_updatedat IS NOT NULL AND o.es_updatedat>=o.es_createdat AND o.es_exportstatus=99) AS updated';
		$selects[]='(SELECT COUNT(id) FROM '.$from.' WHERE '.$w.' AND o.es_updatedat IS NOT NULL AND o.es_updatedat>=o.es_createdat AND o.es_exportstatus<0) AS skipped';
		$selects[]='(SELECT COUNT(id) FROM '.$from.' WHERE '.$w.' AND o.es_updatedat IS NOT NULL AND o.es_updatedat>=o.es_createdat AND o.es_exportstatus!=9 AND o.es_exportstatus!=99 AND o.es_exportstatus>0) AS failed';
		
		$query = 'SELECT '.implode(',',$selects).' FROM #__customtables_table_shops AS s WHERE published=1 ORDER BY s.es_name';
		
		$db->setQuery( $query );
		$rows = $db->loadObjectList();
		
		$records = [];
		foreach($rows as $shopInfo)
		{
			$data = [
				'id'=>$shopInfo->id,
				'name'=>$shopInfo->es_name,
				'loaddate'=>date ('Y-m-d H:i:s', strtotime($shopInfo->es_updatedat)),
				'total_products'=>$shopInfo->total_products,
				'left_to_load'=>$shopInfo->left_to_load,
				'deleted'=>$shopInfo->deleted,
				'uploaded'=>$shopInfo->uploaded,
				'left_to_upload'=>$shopInfo->left_to_upload,
				'added'=>$shopInfo->added,
				'updated'=>$shopInfo->updated,
				'skipped'=>$shopInfo->skipped,
				'failed'=>$shopInfo->failed
			];
			
			$records[]=$data;
		}

		$result = json_encode($records);
		echo $result;
		die;
		
	}
}
