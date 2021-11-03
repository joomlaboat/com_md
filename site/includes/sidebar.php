<?php
/**
 * @MD Joomla! Native Component
 * @author Ivan Komlev <ivankomlev@gmail.com>
 * @link http://joomlaboat.com
 * @GNU General Public License
 **/

// No direct access to this file
defined('_JEXEC') or die('Restricted access');

class MDSidebar
{
	static public function buildSidebar($folder,$main_menu_link = null)
	{
		if($main_menu_link == null)
			$main_menu_link = MDSidebar::curPageURL();
			
		$main_menu_link = MDSidebar::deleteURLQueryOption($main_menu_link, 'document');
	
		$files = MDSidebar::getListOfFiles($folder);
		
		$li = [];
		
		foreach($files as $file)
		{
			$label = str_replace('.md','',$file);
			$label_no_dash = str_replace('-',' ',$label);
			
			$link = $main_menu_link.'?document='.$label;
			
			$anchors = MDSidebar::getAnchors($folder, $file);

			$anchors_li = [];
			foreach($anchors as $anchor)
			{
				$anchors_li[] = '<li><a href="'.$link.'#'.$anchor->anchor.'">'.$anchor->label.'</a></li>';
			}
			//print_r($anchors_li);
			
			if(count($anchors_li) == 0)
				$li[] = '<li><a href="'.$link.'">'.$label_no_dash.'</a></li>';
			else
				$li[] = '<li><a href="'.$link.'">'.$label_no_dash.'</a><ul>'.implode('',$anchors_li).'</ul></li>';
	
		}
		
		if(count($anchors_li) == 0)
			$li[] = '<li><a href="'.$link.'">'.$label_no_dash.'</a></li>';
		else
			$li[] = '<li><a href="'.$link.'">'.$label_no_dash.'</a><ul>'.implode('',$anchors_li).'</ul></li>';
		
		if(count($li) == 0)
			return '';
			
		return '<ul style="list-style:none;" class="list-unstyled">'.implode('',$li).'</ul>';
	}
	
	static public function getListOfFiles($folder)
	{
		$path=JPATH_SITE . DIRECTORY_SEPARATOR . $folder;

		$all_files = scandir($path);
		$md_files = [];
		
		foreach($all_files as $file)
		{
			if($file!='.' and $file!='..')
			{
				$parts = explode('.',$file);
				$file_extension = end($parts);
				if($file_extension == 'md')
				{
					$md_files[] = $file;
				}
			}
		}
		
		return $md_files;
	}
	
	static public function getAnchors($folder, $file)
	{
		$path = JPATH_SITE . DIRECTORY_SEPARATOR . $folder;
		$file = $path . DIRECTORY_SEPARATOR . $file;
		$file_content = file_get_contents($file);
		
		$anchors = [];
		$lines = explode("\n",$file_content);
		
		foreach($lines as $line)
		{
			if(strlen($line) != 0)
			{
				if($line[0] == '#')
				{
					$label = trim(str_replace('#','',$line));
					$label_alias = trim(str_replace(' ','-',trim($label)));
					
					$anchors[] = (object)['label' => $label, 'anchor' => $label_alias];
				}
			}
		}
	
		return $anchors;
	}
	
	static public function firstMDFileLabel($folder)
	{
		$path=JPATH_SITE . DIRECTORY_SEPARATOR . $folder;

		$all_files = scandir($path);
		$md_files = [];
		
		foreach($all_files as $file)
		{
			if($file!='.' and $file!='..')
			{
				$parts = explode('.',$file);
				$file_extension = end($parts);
				if($file_extension == 'md')
				{
					$md_files[] = $file;
					break;
				}
			}
		}
		
		$label = str_replace('.md','',$md_files[0]);
		return $label;
	}
	
	public static function addAnchors2MD($source)
	{
		$new_document = [];
		$lines = explode("\n",$source);
		
		foreach($lines as $line)
		{
			if(strlen($line) == 0)
			{
				$new_document[] = $line;
			}
			else
			{
				if($line[0] == '#')
				{
					$label = trim(str_replace('#','',$line));
					$label_alias = trim(str_replace(' ','-',trim($label)));
					$label_label = trim($label);
				
					$new_document[] = "\n" . '# <a name="'.$label_alias.'" class="header-anchor">#</a>' . $label_label;
				}
				else
				{
					$new_document[] = $line;
				}
			}
		}
		
		return implode("\n",$new_document);
	}
	
	public static function deleteURLQueryOption($urlstr, $opt_)
	{
		$link='';
		$newquery=array();
		$opt=$opt_.'=';
		
		$parts=explode('?',$urlstr);
		
		if(isset($parts[1]))
		{
			$link=$parts[0];
			$query=explode('&',$parts[1]);
		}
		else
			$query=explode('&',$parts[0]);

		foreach($query as $q)
		{
			if(strpos($q,$opt)===false)
				$newquery[]=$q;
		}
		
		if(count($newquery)==0)
			return $link;	
		
		if($link=='')
			return implode('&',$newquery);
		
		return $link.'?'.implode('&',$newquery);
	}
	
	public static function curPageURL()
	{
		$WebsiteRoot = str_replace(JURI::root(true),'',JURI::root(false));
		$RequestURL = $_SERVER["REQUEST_URI"];
		
		if($WebsiteRoot!='' and $WebsiteRoot[strlen($WebsiteRoot) - 1] == '/')
		{
			if($RequestURL!='' and $RequestURL[0] == '/')
			{
				//Delete $WebsiteRoot end /
				$WebsiteRoot = substr($WebsiteRoot,0,strlen($WebsiteRoot) -1 );
			}
		}
			
		return $WebsiteRoot.$RequestURL;
	}
	
}