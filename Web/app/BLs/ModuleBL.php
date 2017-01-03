<?php

namespace App\BLs;

class ModuleBL
{
	protected static $_oInstance;

	protected $_oModel;

	public function __construct($oModel)
	{
		$this->_oModel = $oModel;
	}

	public static function getInstance($oModel)
	{
		if (self::$_oInstance !== false) {
			self::$_oInstance = new ModuleBL($oModel);
		}

		return self::$_oInstance;
	}

	public function all()
	{
		return $this->_oModel->all();
	}
}