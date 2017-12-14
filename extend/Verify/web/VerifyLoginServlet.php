<?php 
/**
 * 输出二次验证结果,本文件示例只是简单的输出 Yes or No
 */
// error_reporting(0);
require_once dirname(dirname(__FILE__)) . '/lib/class.geetestlib.php';
require_once dirname(dirname(__FILE__)) . '/config/config.php';
class verfiy{
    public function index($post){
        $GtSdk = new GeetestLib(CAPTCHA_ID, PRIVATE_KEY);
        $user_id = session('user_id');
        if (session('gtserver')== 1) {
            $result = $GtSdk->success_validate($post['geetest_challenge'], $post['geetest_validate'], $post['geetest_seccode'], $user_id);
            if ($result) {
                return 'success';
            } else{
                return 'error';
            }
        }else{
            if ($GtSdk->fail_validate($post['geetest_challenge'],$post['geetest_validate'],$post['geetest_seccode'])) {
                return "success";
            }else{
                return "error";
            }
        }
        
    }
}

?>
