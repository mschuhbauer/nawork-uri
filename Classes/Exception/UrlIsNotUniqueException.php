<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Tx_NaworkUri_Exception_UrlIsNotUniqueException
 *
 * @author thorben
 */
class Tx_NaworkUri_Exception_UrlIsNotUniqueException extends Exception {
	private $path;
	private $domain;
	private $parameters;
	private $language;

	function __construct($path, $domain, $parameters, $language) {
		$this->path = $path;
		$this->domain = $domain;
		$this->parameters = $parameters;
		$this->language = $language;
	}

	public function getPath() {
		return $this->path;
	}

	public function getDomain() {
		return $this->domain;
	}

	public function getParameters() {
		return $this->parameters;
	}

	public function getLanguage() {
		return $this->language;
	}



}

?>
