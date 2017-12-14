<?php
/**
 * Created by PhpStorm.
 * User: feng
 * Date: 2017/12/12
 * Time: 13:50
 */
namespace app\admin\validate;
use think\Validate;

class custom extends Validate
{
    protected $rule = [
        ['certificate','require','证书号必须填写'],
    ];
}