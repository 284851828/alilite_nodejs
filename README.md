"# alilite_nodejs" 


const GatewaySdk = require('./gateway-sdk');

const appId = 'your_app_id'; // 向客服申请 App ID

const sdk = new GatewaySdk(appId);  

const payload = {
  timestamp: 1711347382,
  content: {
    extTradeNo: '1711347382',
    redirectUrl: 'https://host/you_success_webpage',
    company: {
      id: 'cnogda7i2',   //收款公司信息
      name: '浙江某科技有限公司',
    },
    customer: {
      extId: 'user_002',   //付款人信息
      name: '张某',  //付款人信息
      addr: '杭州市西湖区', //付款人信息
      phone: '13958040000', //付款人信息
      idCard: '33100210000000', //付款人信息， 支付宝根据此信息发起扣款
    },
    product: {
      extId: 'product_002',  //产品信息
      name: '恰恰香瓜子',  
      price: '1.00',
      Content: '好吃',
    },
    installment: {  //支付信息
      limit: 1.00,  //支付总金额
      first: 0.01,  //暂无效
      num: 2,       //分2个月扣款
      type: 'SDI',  //固定
    },
  },
};

(async () => {
  try {
    await sdk.post('gate/liteContract/create', payload);
    console.
	
	
	

