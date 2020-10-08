
// 使用插件
Vue.use(VueI18n)

// 取得預設語系
const lang = (navigator.language || navigator.browserLanguage).toLowerCase();
var locale;
if (lang == 'zh-cn'){
  locale = 'cn'
}else{
  locale = 'tw'
}

const messages = {
  tw: {
    title: '產品註冊',
    p1: '親愛的客戶 您好',
    p2: '感謝您對dynabook 的支持,  請在此為您的dynabook 筆記型電腦註冊商品保固和延長保固服務。 請注意，此保固註冊頁面僅適用於dynabook筆記型電腦。 dynabook配件不需產品註冊,  請保留 購買憑證或收據，並出示以進行保修服務。謝謝 !',
    input1: '姓名',
    input2: '電話',
    input3: '電子信箱',
    input4: '產品名稱',
    input5: '機器序號',
    input6: '地址',
    upload: '上傳發票',
    private1: '我已閱讀品牌的',
    private2: '隱私權聲明',
    private3: '，同意提供本次個人資料',
    submit: '確認送出',
    amount: '保固註冊批量上傳',
    amount_p: '如果您需要批量註冊保修服務和延長保修期，請在電子郵件中提供給我們如下信息。',
    li1: '姓名',
    li2: '電子郵件',
    li3: '地址',
    li4: '模型零件號 (可於產品底部或背部找到)',
    li5: '產品序列號 (可於產品底部或背部找到)',
    li6: '購買日期',
    li7: '購買憑證 (票務/收據)',
    send1: '或填寫表格並通過',
    send2: '發送給我們。',
    dl: '表格下載',
    thankyou: '非常感謝。',
    agree: '請同意隱私權聲明',
    fillAll: '請填妥每項欄位',
    correctEmail: '請輸入正確信箱格式',
    yourData: '您所填的資料',
    complete: '已收到您的訊息，頁面將跳轉至首頁',
    already: '此產品已註冊',
    error: '系統忙碌中，請稍後再試'
  },
  cn: {
    title: '产品注册',
    p1: '亲爱的客户 您好',
    p2: '感谢您对dynabook 的支持,  请在此为您的dynabook 笔记型电脑注册商品保固和延长保固服务。 请注意，此保固注册页面仅适用于dynabook笔记型电脑。 dynabook配件不需产品注册,  请保留 购买凭证或收据，并出示以进行保修服务。谢谢 !',
    input1: '姓名',
    input2: '电话',
    input3: '电子信箱',
    input4: '产品名称',
    input5: '机器序号',
    input6: '地址',
    upload: '上传发票',
    private1: '我已阅读品牌的',
    private2: '隐私权声明',
    private3: '，同意提供本次个人资料',
    submit: '确认送出',
    amount: '保固注册批量上传',
    amount_p: '如果您需要批量注册保修服务和延长保修期，请在电子邮件中提供给我们如下信息。',
    li1: '姓名',
    li2: '电子邮件',
    li3: '地址',
    li4: '模型零件号 (可于产品底部或背部找到)',
    li5: '产品序列号 (可于产品底部或背部找到)',
    li6: '购买日期',
    li7: '购买凭证 (票务/收据)',
    send1: '或填写表格并通过',
    send2: '发送给我们。',
    dl: '表格下载',
    thankyou: '非常感谢。',
    agree: '请同意隐私权声明',
    fillAll: '请填妥每项栏位',
    correctEmail: '请输入正确信箱格式',
    yourData: '您所填的资料',
    complete: '已收到您的讯息，页面将跳转至首页',
    already: '此产品已注册',
    error: '系统忙碌中，请稍后再试'
  }
}

// 建立 VueI18n 實體
const i18n = new VueI18n({
  locale: '', // set locale
  fallbackLocale: 'tw',
  messages, // set locale dictionary
});

new Vue({
  el: "#app",
  i18n: i18n,
  data: {
    name: '',
    phone: '',
    email: '',
    address: '',
    product: '',
    productID: '',
    base64result: '',
    agree: false
  },
  created: function () {
    var vm = this;
    vm.$i18n.locale = locale; //Set the locale here
  },
  methods: {
    submit: function(){
      vm = this;
      var pattern =  /^[^\[\]\(\)\\<>:;,@.]+[^\[\]\(\)\\<>:;,@]*@[a-z0-9A-Z]+(([.]?[a-z0-9A-Z]+)*[-]*)*[.]([a-z0-9A-Z]+[-]*)+$/g;
      if(vm.agree==false){
        Swal.fire({
          icon: 'warning',
          confirmButtonColor: '#9c464b',
          text: i18n.t('agree')
        })
      }else if(vm.name==''||vm.phone==''||vm.email==''||vm.address==''||vm.product==''||vm.productID==''||vm.base64result==''){
        Swal.fire({
          icon: 'warning',
          confirmButtonColor: '#9c464b',
          text: i18n.t('fillAll')
        })
      }else if(pattern.test(vm.email) == false){
        Swal.fire({
          icon: 'warning',
          confirmButtonColor: '#9c464b',
          text: i18n.t('correctEmail')
        })
      }else{
        Swal.fire({
          html:  i18n.t('yourData') +'<br><br> ' +
          i18n.t('input1')+'：' + vm.name + '<br>'+
          i18n.t('input2')+'：' + vm.phone + '<br>'+
          i18n.t('input3')+'：' + vm.email + '<br>'+
          i18n.t('input6')+'：' + vm.address + '<br>'+
          i18n.t('input4')+'：' + vm.product + '<br>'+
          i18n.t('input5')+'：' + vm.productID + '<br>',
          showCancelButton: true,
          confirmButtonText: i18n.t('submit'),
          confirmButtonColor: '#9c464b',
          cancelButtonText: '返回'
        }).then(function(result){
          $.ajax({
            method: "POST",
            url: '/api/registration',
            data: {
              name: vm.name,
              product: vm.product,
              number: vm.productID,
              phone: vm.phone,
              email: vm.email,
              address: vm.address,
              invoice: vm.base64result
            },
            success: function(r){
              if(r.status=='200'){
                Swal.fire({
                  text: i18n.t('complete'),
                  confirmButtonColor: '#9c464b',
                }).then(function(){
                  window.location.href = '/';
                })                
              }else if(r.status=='100'){
                Swal.fire({
                  icon: 'warning',
                  confirmButtonColor: '#9c464b',
                  text: i18n.t('already')
                })
              }else{
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  confirmButtonColor: '#9c464b',
                  text: i18n.t('error')
                })
              }
            }
          })
        })        
      }
    },
    upload: function(){
      var vm = this;
      let file = document.getElementById('file').files[0]; // 輸出已經選擇圖片名字 
      var reader = new FileReader(); 
      var image = new Image();
      var canvas = vm.createCanvas();
      var ctx = canvas.getContext("2d");
      
      reader.onload = function(){ // 文件加载完处理
        var result = this.result;
        image.onload = function(){ // 图片加载完处理
          var imgScale = vm.imgScaleW(800,this.width,this.height);
          canvas.width = imgScale.width;
          canvas.height = imgScale.height;
          ctx.drawImage(image,0,0,imgScale.width,imgScale.height);
          var dataURL = canvas.toDataURL('image/jpeg'); // 图片base64
          ctx.clearRect(0,0,imgScale.width,imgScale.height); // 清除画布
          //callback (dataURL); //dataURL:处理成功返回的图片base64
          vm.base64result = dataURL.split(',')[1];
          console.log(vm.base64result)
        };
        image.src = result;
      };
      reader.readAsDataURL(file);
    },
    createCanvas: function(){
      var canvas = document.getElementById('canvas');
      if(!canvas){
        var canvasTag = document.createElement('canvas');
        canvasTag.setAttribute('id','canvas');
        canvasTag.setAttribute('style','display:none;');//隐藏画布
        document.body.appendChild(canvasTag);
        canvas = document.getElementById('canvas');
      }
      return canvas;      
    },
    imgScaleW: function(maxWidth,width,height){
      var imgScale = {};
      var w = 0;
      var h = 0;
      if(width <= maxWidth && height <= maxWidth){ // 如果图片宽高都小于限制的最大值,不用缩放
        imgScale = {
          width:width,
          height:height
        };
      }else{
        if(width >= height){ // 如果图片宽大于高
          w = maxWidth;
          h = Math.ceil(maxWidth * height / width);
        }else{     // 如果图片高大于宽
          h = maxWidth;
          w = Math.ceil(maxWidth * width / height);
        }
        imgScale = {
          width:w,
          height:h
        };
      }
      return imgScale;
    }
  }
})

var input = document.querySelectorAll( '#file' );
Array.prototype.forEach.call( input, function( input )
{
  var label	 = document.querySelector('.file_label span');
    // labelVal = label.innerText;
  input.addEventListener( 'change', function( e )
  {
    
    var fileName = '';
    fileName = e.target.value;
    // console.log(label)

    fileName = e.target.value.split( '\\' ).pop();
    // label.textContent = '123';
    
    // console.log(fileName)
    if( fileName ){
      label.innerHTML = fileName;
    }else{
      label.innerHTML = "上傳發票";
    }
  });
});