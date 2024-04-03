<?php

$dotenv = parse_ini_file(".env");

foreach ($dotenv as $key => $value) {
    putenv("$key=$value");
}

define("DB_HOST", getenv('DB_HOST'));
define("DB", getenv('DB_NAME'));
define("DB_USER", getenv('DB_USER'));
define("DB_PASS", getenv('DB_PASS'));

/* Default options */
define("DEFAULT_CONTROLLER", "home");
define("DEFAULT_ACTION", "index");
