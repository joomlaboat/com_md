<?php
/**
 * @MD Joomla! Native Component
 * @author Ivan Komlev <ivankomlev@gmail.com>
 * @link http://joomlaboat.com
 * @GNU General Public License
 **/

// No direct access to this file
defined('_JEXEC') or die('Restricted access');

use \Joomla\CMS\Factory;
/*
$js=[];
$js[]="app.e063464e.js" as="script">
$js[]="11.a796f0f2.js" as="script">
$js[]="2.ab7e58a8.js" as="script">
$js[]="52.4bddf629.js" as="script">
$js[]="12.0e5a9705.js" as="script">
$js[]="4.e7f9695a.js" as="script">
$js[]="3.a2603ad3.js" as="script">
$js[]="5.660de45d.js" as="script">
$js[]="7.0c625009.js" as="script">
$js[]="8.67bbaa32.js" as="script">
$js[]="10.e7c90544.js" as="script">
$js[]="6.194d1707.js" as="script">
$js[]="9.ae4c7156.js" as="script">
$js[]="13.d4e39b59.js">
$js[]="14.f08686ac.js">
$js[]="15.9c05e2c7.js">
$js[]="16.daf75076.js">
$js[]="17.ee9da897.js">
$js[]="18.c6be0cb4.js">
$js[]="19.8fb57ba9.js">
$js[]="20.149a3d89.js">
$js[]="21.dbf0ce96.js">
$js[]="22.1bb4a0a2.js">
$js[]="23.c6ec416e.js">
$js[]="24.ccefb81f.js">
$js[]="25.982bd071.js">
$js[]="26.a7ae0e25.js">
$js[]="27.4019886c.js">
$js[]="28.05809b90.js">
$js[]="29.deedc235.js">
$js[]="30.cc0d137c.js">
$js[]="31.27e6dbc9.js">
$js[]="32.1f1d8612.js">
$js[]="33.658edbc8.js">
$js[]="34.00b3b4f2.js">
$js[]="35.8959b98b.js">
$js[]="36.2efc42d4.js">
$js[]="37.2973c7b5.js">
$js[]="38.dfbcc367.js">
$js[]="39.5bbe2ed6.js">$js[]="40.4f40f630.js">$js[]="41.ed6163b2.js">$js[]="42.d70322fe.js">$js[]="43.0d8dd6f3.js">$js[]="44.c9f6b4b9.js">$js[]="45.e0d83147.js">$js[]="46.6d2e42b3.js">$js[]="47.3400bba6.js">$js[]="48.d33af67e.js">$js[]="49.0be0bb9c.js">$js[]="50.b4b09145.js">$js[]="51.8c33c33d.js">$js[]="53.97429567.js">$js[]="54.4ba56817.js">$js[]="55.50f97bfa.js">$js[]="56.890de7c5.js">$js[]="57.ebbe2db3.js">$js[]="58.c3d24329.js">$js[]="59.662fba42.js">$js[]="60.9a9edae4.js">$js[]="61.e845468a.js">$js[]="62.3e54113d.js">$js[]="63.9de7fb7b.js">$js[]="64.493ebc04.js">
$js[]="65.18c6f429.js">
$js[]="66.a76e209e.js">

*/    

$document = Factory::getDocument();
$document->addCustomTag('<link href="'.JURI::root(true).'/components/com_md/assets/css/0.styles.1858edcc.css" type="text/css" rel="stylesheet" >');

$Parsedown = new Parsedown();


if($this->show_sidebar)
	echo $this->sidebar;

$file_content = file_get_contents($this->currentFile);



$anchorsParsed = MDSidebar::addAnchors2MD($file_content);

$mdParsed = $Parsedown->text($anchorsParsed);
echo '<div class="theme-default-content content__default">';
echo $mdParsed;

echo '</div>';

$link = $this->githublink . $this->homeFileLabel . '/_edit';
echo '
<footer class="page-edit">
	<div class="edit-link">
		<a href="'.$link.'" target="_blank" rel="noopener noreferrer">Edit this page on GitHub</a> 
			<span>
				<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound">
					<path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
					<polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
				</svg>
				<span class="sr-only">(opens new window)</span>
			</span>
	</div>
</footer>
';