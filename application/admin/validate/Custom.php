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
        ['shape_id','require','形状必须选择'],
        ['color','require','颜色必须选择'],
        ['neatness','require','净度必须选择'],
        ['cut','require','切工必须选择'],
        ['polishing','require','抛光必须选择'],
        ['symmetry','require','对称必须选择'],
        ['weight','require','重量必须填写'],
        ['price','require','价格必须填写'],
    ];
}