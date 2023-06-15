<?php

namespace app\admin\controller\analysis;

use app\common\controller\Backend;

/**
 * desc: 数据分析->用户分析
 *
*/
class UserAnalysis extends Backend
{

    public function index(){
//        dump(222);die;
        //设置过滤方法
        $this->request->filter(['strip_tags', 'trim']);
        return $this->view->fetch();
    }
}