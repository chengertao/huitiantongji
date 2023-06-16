<?php

namespace app\admin\controller\analysis;

use app\common\controller\Backend;

/**
 * desc: 消费分析
 *
*/
class ConsumAnalysis  extends Backend
{

    public function index()
    {
        $this->request->filter(['strip_tags', 'trim']);
        return $this->view->fetch();
    }

}