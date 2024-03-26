## 目标


### 原理

"# alilite_nodejs" 


const GatewaySdk = require('./gateway-sdk');

const appId = 'your_app_id'; // 向客服申请 App ID

const sdk = new GatewaySdk(appId);  
```c
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
```
(async () => {
  try {
    await sdk.post('gate/liteContract/create', payload);
}
}


### 请求与返回

```c
curl -X POST \
     -H "Content-Type: application/json" \
     -H "X-Gateway-AppId: 999999" \
     -d '{"timestamp":1711347382,"content":{"extTradeNo":"1711347382","redirectUrl":"https://geekland.cc","company":{"id":"cnogda7i2dkqvf","name":"浙江某科技有限公司"},"customer":{"extId":"user_002","name":"张某","addr":"杭州市西湖区","phone":"13958040000","idCard":"3310021981000000"},"product":{"extId":"product_002","name":"恰恰香瓜子","price":"1.00","Content":"好吃"},"installment":{"limit":1.00,"first":0.01,"num":2,"type":"SDI"}}}' \
     https://open.xiadandt.com/gate/liteContract/create


{
  "code": 0,
  "content": {
    "contractId": "co0hdgni2dkrn7or4m8g",
    "customer": {
      "extId": "user_002",
      "name": "张某",
      "addr": "杭州市西湖区",
      "phone": "13958040000",
      "idCard": "33100219810412251X"
    },
    "bill": [
      {
        "index": 1,
        "days": "2024-03-25T08:00:00+08:00",
        "amount": 0.5
      },
      {
        "index": 2,
        "days": "2024-04-25T08:00:00+08:00",
        "amount": 0.5
      }
    ],
    "signUrl": "https://u.alipay.cn/_eLriCTVod5djaQX9hEFxd",
    "status": 12
  },
  "msg": "创建成功"
}

```

申请 APPID
 
<img src="https://raw.githubusercontent.com/284851828/alilite_nodejs/main/github_8888.png" width = 250 height = 250>

联系客服

<img src="https://raw.githubusercontent.com/284851828/alilite_nodejs/main/wx.jpg" width = 300 height = 300>

 
 
	
	

