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
    title: '我有興趣',
    p1: '感謝您對dynabook的熱愛！',
    p2: '請留下以下資訊，我們會盡速派員與您聯繫！',
    input1: '有興趣的產品',
    input2: '姓名',
    input3: '電話',
    input4: '電子信箱',
    home: '家用',
    pro: '商用',
    private1: '我已閱讀品牌的',
    private2: '隱私權聲明',
    private3: '，同意提供本次個人資料',
    submit: '確認送出',
    agree: '請同意隱私權聲明',
    fillAll: '請填妥每項欄位',
    correctEmail: '請輸入正確信箱格式',
    yourData: '您所填的資料',
    complete: '已收到您的訊息，頁面將跳轉至首頁',
    error: '系統忙碌中，請稍後再試'
  },
  cn: {
    title: '我有兴趣',
    p1: '感谢您对dynabook的热爱！',
    p2: '请留下以下资讯，我们会尽速派员与您联繫！',
    input1: '有兴趣的产品',
    input2: '姓名',
    input3: '电话',
    input4: '电子信箱',
    home: '家用',
    pro: '商用',
    private1: '我已阅读品牌的',
    private2: '隐私权声明',
    private3: '，同意提供本次个人资料',
    submit: '确认送出',
    agree: '请同意隐私权声明',
    fillAll: '请填妥每项栏位',
    correctEmail: '请输入正确信箱格式',
    yourData: '您所填的资料',
    complete: '已收到您的讯息，页面将跳转至首页',
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
    product: '',
    name: '',
    phone: '',
    email: '',
    usage: '',
    message: '',
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
      }else if(vm.name==''||vm.phone==''||vm.email==''||vm.product==''){
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
          html: i18n.t('yourData') +'<br><br> ' +
          i18n.t('input1')+'：' + vm.product + '<br>'+
          i18n.t('input2')+'：' + vm.name + '<br>'+
          i18n.t('input3')+'：' + vm.phone + '<br>'+
          i18n.t('input4')+'：' + vm.email + '<br>',
          showCancelButton: true,
          confirmButtonText: i18n.t('submit'),
          confirmButtonColor: '#9c464b',
          cancelButtonText: '返回'
        }).then(function(result){
          if(result.value){
            $.ajax({
              method: "POST",
              url: '/api/Interested',
              data: {
                name: vm.name,
                product: vm.product,
                user_use: vm.usage,
                phone: vm.phone,
                email: vm.email,
                message: vm.message
              },
              success: function(r){
                if(r.status=='200'){
                  Swal.fire({
                    text: i18n.t('complete'),
                    confirmButtonColor: '#9c464b',
                  }).then(function(){
                    window.location.href = '/';
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
          }
        });
      }
    }
  }
})