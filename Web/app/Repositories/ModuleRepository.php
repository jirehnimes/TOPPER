<?php

namespace App\Repositories;

use App\Repositories\Contracts\ModuleRepositoryInterface;

// Model
use App\Module;

class ModuleRepository implements ModuleRepositoryInterface
{
	public function __construct(Module $oModule)
	{
		$this->_oModule = $oModule;
	}

	public function all()
	{
		return Module::all();
	}
}