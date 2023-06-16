<?php

namespace app\admin\controller\analysis;

use app\common\controller\Backend;

/**
 * desc:会员分析
 *
 */
class MemberAnalysis extends Backend
{
    /**
     *
     * @return  会员总人数  储值总金额 储值余额    会员消费总金额   会员优惠金额   会员人均消费金额    会员人均消费频次
     */
    public function index()
    {
        return $this->view->fetch();

        $m_s = input('param.m_s','');
        $m_e = input('param.m_e','');
        $m_status = 0; // 这个是啥状态?
        if(empty($m_s)){
            $m_s = '2020-01-01';
            $m_e = '2029-12-31';
        }else{
            $m_status = 1;
        }
        // 查询会员总数
        $memberTotal = Db::name('user')->where('createtime','>=',strtotime($m_s))->where('createtime','<=',strtotime($m_e))->count();
        // 储值总金额
        $orderLogModel    = new OrderLog();
        $storedValue = $orderLogModel->where(['pay_type'=>['in',[1,5]]])->where('createtime','>=',strtotime($m_s))->where('createtime','<=',strtotime($m_e))->sum('pay_money');
        // 储值余额
        $balance = User::where('createtime','>=',strtotime($m_s))->where('createtime','<=',strtotime($m_e))->sum('money');

        //会员消费总金额
        $orderLog     = OrderLog::where(['pay_type'=>['in',[1,5]]])->select();
        $orderMoney   = array_sum(array_column($orderLog,'pay_money'));
        $refundMoney  = array_sum(array_column($orderLog,'refund_money'));
        $cardMoney    = $orderMoney-$refundMoney; //会员卡消费金额 = 会员卡总额 - 余额
        // 活动
        $eventLog     = Order::where(['status'=>'paid','paytype'=>'wechat'])->sum('payamount');
        // 麦座     @todo 这是啥？？
        $mzLog        = MzOrder::where(['type'=>'mz','status'=>['in',[1,2]],'pay_type'=>'wechat'])->sum('pay_fee');
        // 商城
        $shopLog      = \app\admin\model\shopro\order\Order::where(['type'=>'goods','pay_type'=>'wechat','status'=>['in',[1,2]]])->sum('pay_fee');
        $wxTotalMoney = $cardMoney+$eventLog+$mzLog+$shopLog;
        $walletTotalMoney = Db::name('shopro_user_wallet_log')->where(['wallet_type'=>'money','action'=>['in',[2,3,5,6,7,8]]])->sum('wallet');
        $walletTotalMoney = trim($walletTotalMoney,'-');
        $totalConsumeValue      = $wxTotalMoney+$walletTotalMoney;

        //会员优惠金额  @todo  这个怎么计算

        //会员人均消费金额
        $avgConsumeValue =  sprintf('%01.2f',$totalConsumeValue / $memberTotal);
        //获取总消费次数
        $cardConsumeNum =   OrderLog::where(['pay_type'=>['in',[1,5]]])->count();
        $eventConsumeNum =  Order::where(['status'=>'paid','paytype'=>'wechat'])->count();
        $mzConsumeNum =   MzOrder::where(['type'=>'mz','status'=>['in',[1,2]],'pay_type'=>'wechat'])->count(); //麦座
        $shopConsumeNum     = \app\admin\model\shopro\order\Order::where(['type'=>'goods','pay_type'=>'wechat','status'=>['in',[1,2]]])->count();
        $walletTotalnNum = Db::name('shopro_user_wallet_log')->where(['wallet_type'=>'money','action'=>['in',[2,3,5,6,7,8]]])->count();
        $totalConsumeNum  = $cardConsumeNum + $eventConsumeNum + $mzConsumeNum +$shopConsumeNum + $walletTotalnNum;

        //会员人均消费频次
        $avgCusumeFrequency = $totalConsumeNum /$memberTotal;




        $returnData = [
            'member_total'=>$memberTotal ?? 0, //会员总人数
            'stored_value'=>$storedValue ??0, //储值总金额
            'balance'=>$balance??0, //储值余额
            'total_consume_value'=>$totalConsumeValue??0, //会员消费总金额
            'discounts_value'=>$discountsValue??0, //会员优惠金额
            'avg_consume_value'=>$avgConsumeValue??0, //会员人均消费金额
            'avg_Cusume_frequency'=>$avgCusumeFrequency??0, //会员人均消费频次

        ];
        //需要返回的数据  会员总人数
        $this->view->assign('data',$returnData);
        return $this->view->fetch();
    }





}