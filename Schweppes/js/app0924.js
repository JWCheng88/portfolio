
var widgetId1;
var widgetId2;
var onloadCallback = function() {
    widgetId1 = grecaptcha.render('g-recaptcha1', {
        'sitekey' : '6LeGhc8ZAAAAALoGMvgogYpV-RnOXgo7LWf9bmG-',
        'callback': function (e) {
            vue.recaptcha = e
        },
        'expired-callback': function(e){
            console.log('overtime')
            vue.recaptcha = ''
        },
        'error-callback': function(e){
            console.log('error')
            vue.recaptcha = ''
        }
    });
    widgetId2 = grecaptcha.render('g-recaptcha2', {
        'sitekey' : '6LeGhc8ZAAAAALoGMvgogYpV-RnOXgo7LWf9bmG-',
        'callback': function (e) {
            vue.recaptcha = e
        },
        'expired-callback': function(e){
            console.log('overtime')
            vue.recaptcha = ''
        },
        'error-callback': function(e){
            console.log('error')
            vue.recaptcha = ''
        }
    });
};

var vue = new Vue({
    el: "#app",
    data: {
        host: 'https://2020schweppes.webgene.com.tw',
        menu: false,
        token: '',
        login: {
            email: '',
            password: ''
        },
        forget: {
            email: ''
        },
        register: {
            name: '',
            email: '',
            phone: '',
            password: '',
            repassword: '',
            age: false,
            agree: false
        },
        info: { //home status bar
            currentPoint: '',
            prize1: 0,
            prize2: 0,
            prize3: 0,
            exchange1: 0,
            exchange2: 0,
            exchange3: 0
        },
        invoice: [],
        invoice_filted: [],
        filter: 'all',
        invoiceNum: 1,
        invoiceList: [{"id": 'photo1',"number":'',"date":'',"random_code":'',"file":''}],
        invoiceResult: [],
        invoicePoint: 0,
        device: {
            device_code: '',
            verification_code: ''
        },
        deviceResult: [],
        device_record: [],
        exchange: {
            prize1: 0,
            prize2: 0,
            prize3: 0,
            recipient: {
                name: '',
                address: '',
                phone: ''
            }
        },
        limited: {
            limited1: false,
            limited2: false,
            limited3: false
        },
        notEnough: {
            notEnough1: false,
            notEnough2: false,
            notEnough3: false
        },
        cartPoint: 0,
        record: [],
        recaptcha: ''
    },
    mounted(){
        //進home, if沒cookie -> 進login
        // var vm = this;
        // vm.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        // var token = vm.token
        // $.ajax({
        //     headers: {'Authorization': 'Bearer'+token},
        //     method: 'GET',
        //     url: vm.host+'/api/invoices',
        //     success(r){
        //         $('#main').show()
        //         vm.info.currentPoint = r.points
        //         for(let i=0; i<r.invoices.length; i++){
        //             vm.invoice.push(r.invoices[i])
        //         }
        //     },
        //     error(r){
        //         console.log(r)
        //         if(r.status==403){
        //             alert('連線已逾期，請重新登入')
        //             $('#login').fadeIn()
        //             $('#main').hide()
        //         }
        //     },
        // })
        var vm = this;
        vm.homeStatus()
    },
    computed: {
        invoice_filter(){
            var vm = this;
            var invoice_filted = [];
            if(vm.filter=='all'){
                invoice_filted = vm.invoice;                
            }else if(vm.filter=='confirmed'){
                for (let i=0; i<vm.invoice.length; i++){
                    if(vm.invoice[i].status=='confirmed'){
                        invoice_filted.push(vm.invoice[i])
                    }
                }
            }else if(vm.filter=='rejection'){
                for (let i=0; i<vm.invoice.length; i++){
                    if(vm.invoice[i].status=='rejection'){
                        invoice_filted.push(vm.invoice[i])
                    }
                }
            }else if(vm.filter=='unconfirmed'){
                for (let i=0; i<vm.invoice.length; i++){
                    if(vm.invoice[i].status=='unconfirmed'){
                        invoice_filted.push(vm.invoice[i])
                    }
                }
            }
            return invoice_filted;
        },
    },
    methods: {
        toHome(){
            this.homeStatus()
            $('#touroku').hide()
            $('#exchange').hide()
            $('#record').hide()
            $('#home').show()
            this.menu = false;
        },
        toRecord(){
            var vm = this;
            vm.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            var token = vm.token
            $.ajax({
                headers: {'Authorization': 'Bearer'+token},
                method: 'GET',
                url: vm.host+'/api/history',
                contentType: 'application/json; charset=utf-8',
                success(r){
                    console.log(r)
                    vm.record = r
                },
                error(r){
                    console.log(r)
                    if(r.status==403){
                        alert('連線已逾期，請重新登入')
                        // window.location.reload()
                        $('#login').fadeIn()
                        $('#main').hide()
                    }
                },
            })
            $('#touroku').hide()
            $('#exchange').hide()
            $('#home').hide()
            $('#record').show()
            this.menu = false;
        },
        handleLogin(){ //登入
            var vm = this;
            var loginData = {
                "email": vm.login.email,
                "password": vm.login.password
            }
            $.ajax({
                method: 'POST',
                url: vm.host+'/api/auth/login',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(loginData),
                beforeSend: function (XMLHttpRequest){
                    $('.loading').show()
                },
                success(r){
                    var token = r.token;
                    document.cookie= 'token='+token+';';
                    vm.token = token;                    
                    $.ajax({
                        headers: {'Authorization': 'Bearer'+token},
                        method: 'GET',
                        url: vm.host+'/api/invoices',
                        success(r){
                            // $('#main').show()
                            console.log(r)
                            vm.info.currentPoint = r.points
                            for(let i=0; i<r.invoices.length; i++){
                                vm.invoice.push(r.invoices[i])
                            }
                            vm.info.prize1 = r.stock[2].amount;
                            vm.info.prize2 = r.stock[1].amount;
                            vm.info.prize3 = r.stock[0].amount;
                            for(let i=0;i<r.exchanged.length;i++){
                                switch(r.exchanged[i].productId){
                                    case 1: 
                                        vm.info.exchange3 = r.exchanged[i].amount;
                                        break;
                                    case 2:
                                        vm.info.exchange2 = r.exchanged[i].amount;
                                        break;
                                    case 3:
                                        vm.info.exchange1 = r.exchanged[i].amount;
                                        break;
                                }
                            }
                            $('#login').fadeOut(function(){
                                $('#main').fadeIn()
                            })
                            // 埋code
                            fbq('track', 'CompleteRegistration', {product_id:'_P10Complete'});
                            _lt('send', 'cv', {
                                type: 'point'
                            },['ea9a6ea3-fbef-4203-8dfd-ff37c22297a4']);
                            gtag('event', 'conversion', {
                                'allow_custom_scripts': true,
                                'send_to': 'DC-9087352/invmedia/sctw1005+standard'
                            });                            
                        },
                        error(r){
                            console.log(r)
                            if(r.status==403){
                                alert('連線已逾期，請重新登入')
                                $('#login').show()
                                $('#main').hide()
                            }
                        },
                        complete(){
                            $('.loading').hide()
                        }
                    })
                },
                error(r){
                    if(r.status==401){
                        // console.log(r)
                        alert('密碼錯誤')
                    }else{
                        console.log(r)
                    }
                },
                complete(){
                    $('.loading').hide()
                }
            })
            
        },
        toForget(){
            $('#login').fadeOut(function(){
                $('#main').fadeIn()
                $('#home').hide()
                $('#forget').show()
            })
        },
        handleForget(){
            var vm = this;
            var forgetData = { "email":vm.forget.email}
            $.ajax({
                method: 'POST',
                url: vm.host+'/api/auth/password/forgot',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(forgetData),
                beforeSend: function (XMLHttpRequest){
                    $('.loading').show()
                },
                success(r){
                    console.log(r)
                    alert('已將重設密碼信件寄送至您的信箱')                    
                    $('#main').fadeOut(function(){
                        $('#login').fadeIn()
                        $('#forget').hide()
                        $('#home').show()
                    })
                },
                error(r){
                    console.log(r)
                    if(r.status==422){
                        alert('此信箱未註冊')
                    }else if(r.responseText=='{"email":["The email must be a valid email address."]}'){
                        alert('請輸入正確信箱格式')
                    }else{
                        alert('系統忙碌中，請稍後再試')
                    }
                },
                complete(){
                    $('.loading').hide()
                }
            })
        },
        forgetBack(){
            $('#main').fadeOut(function(){
                $('#login').fadeIn()
                $('#forget').hide()
                $('#home').show()
            })
        },
        toRegister(){ //進註冊頁
            $('#login').fadeOut(function(){
                $('#register').fadeIn()
            })
            // 埋code
            fbq('track', 'CompleteRegistration', {product_id:'_P10Registration'});
            _lt('send', 'cv', {
                type: 'registration'
            },['ea9a6ea3-fbef-4203-8dfd-ff37c22297a4']);           
            gtag('event', 'conversion', {
                'allow_custom_scripts': true,
                'send_to': 'DC-9087352/invmedia/sctw1004+standard'
            });            
        },
        handleRegister(){
            var vm = this;
            var registerData = {
                "name": vm.register.name,
                "email": vm.register.email,
                "password": vm.register.password,
                "phone": vm.register.phone,
                "password_confirmation": vm.register.repassword
            }
            var pattern =  /^[^\[\]\(\)\\<>:;,@.]+[^\[\]\(\)\\<>:;,@]*@[a-z0-9A-Z]+(([.]?[a-z0-9A-Z]+)*[-]*)*[.]([a-z0-9A-Z]+[-]*)+$/g;
            if (!vm.register.agree || !vm.register.age){
                alert('請確認年齡並同意隱私權政策')
            }else if(vm.register.name==''||vm.register.email==''||vm.register.phone==''||vm.register.password==''||vm.register.repassword==''){
                alert('請確認填妥每項欄位')
            }else if(pattern.test(vm.register.email) == false){
                alert('請輸入正確信箱格式')
            }else if(vm.register.repassword!==vm.register.password){
                alert('輸入的密碼不一致')
            }else{
                $.ajax({
                    method: 'POST',
                    url: vm.host+'/api/auth/register',
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify(registerData),
                    success(r){
                        var token = r.token;
                        document.cookie= 'token='+token+';';
                        alert('註冊成功')
                        $('#register').fadeOut(function(){
                            $('#main').fadeIn()
                        })
                    },
                    error(r){
                        console.log(r.responseJSON)
                        if(r.responseJSON.error==42201){
                            alert('此信箱已經註冊')
                        }
                    }
                })
            }
        },
        homeStatus(){
            var vm = this;
            vm.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            var token = vm.token
            $.ajax({
                headers: {'Authorization': 'Bearer'+token},
                method: 'GET',
                url: vm.host+'/api/invoices',
                success(r){
                    console.log(r)
                    $('#main').show()
                    vm.info.currentPoint = r.points
                    vm.invoice = [];
                    for(let i=0; i<r.invoices.length; i++){
                        vm.invoice.push(r.invoices[i])
                    }
                    vm.info.prize1 = r.stock[2].amount;
                    vm.info.prize2 = r.stock[1].amount;
                    vm.info.prize3 = r.stock[0].amount;
                    for(let i=0;i<r.exchanged.length;i++){
                        switch(r.exchanged[i].productId){
                            case 1: 
                                vm.info.exchange3 = r.exchanged[i].amount;
                                break;
                            case 2:
                                vm.info.exchange2 = r.exchanged[i].amount;
                                break;
                            case 3:
                                vm.info.exchange1 = r.exchanged[i].amount;
                                break;
                        }
                    }
                    // 埋code - 累積達門檻
                    if(r.points>40){
                        fbq('track', 'Lead', {product_id:'2020P10_point'});
                        _lt('send', 'cv', {
                            type: 'canvasbagpoint'
                        },['ea9a6ea3-fbef-4203-8dfd-ff37c22297a4']);
                        gtag('event', 'conversion', {
                            'allow_custom_scripts': true,
                            'send_to': 'DC-9087352/invmedia/sctw1008+standard'
                        });                        
                    }
                },
                error(r){
                    console.log(r)
                    if(r.status==403){
                        // alert('連線已逾期，請重新登入')
                        // window.location.reload()
                        $('#login').fadeIn()
                        $('#main').hide()
                    }
                },
            })
            $.ajax({
                headers: {'Authorization': 'Bearer'+token},
                method: 'GET',
                url: vm.host+'/api/history',
                contentType: 'application/json; charset=utf-8',
                success(r){
                    console.log(r)
                    vm.record = r
                },
                error(r){
                    console.log(r)
                },
            })
        },
        choose(){ //進選擇登錄方式
            $('.home_main').fadeOut(function(){
                $('.home_choose').fadeIn()
            });
        },
        chooseToHome(){
            $('.home_choose').fadeOut(function(){
                $('.home_main').fadeIn()
            });
        },
        toInvoice(){ //發票登錄
            $('#home').fadeOut(function(){
                $('.touroku1').show()
                $('.touroku2').hide()
                $('#touroku').fadeIn()
                $('.home_choose').hide()
                $('.home_main').show()
            })
        },
        uploadImg(index){
            var vm = this;
            let file = event.target.files.item(0); //FileList object
            let input = event.target;// this input
            let preview = input.previousSibling; // this previw

            var image = new Image();
            var canvas = vm.createCanvas();
            var ctx = canvas.getContext("2d");

            let fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.addEventListener('load', function(event){
                let picFile = event.target;
                preview.src = picFile.result;
                // console.log(picFile.result)   
                
                image.onload = function(){ // 图片加载完处理
                    var imgScale = vm.imgScaleW(1000,this.width,this.height);
                    canvas.width = imgScale.width;
                    canvas.height = imgScale.height;
                    ctx.drawImage(image,0,0,imgScale.width,imgScale.height);
                    var dataURL = canvas.toDataURL('image/jpeg'); // 图片base64
                    ctx.clearRect(0,0,imgScale.width,imgScale.height); // 清除画布
                    //callback (dataURL); //dataURL:处理成功返回的图片base64
                    var base64 = dataURL.split(',')[1];
                    vm.invoiceList[index].file = 'data:image/jpeg;base64,'+base64;
                    // console.log(base64)
                };
                image.src=this.result
            })            
        },
        createCanvas: function(){ //canvas
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
        imgScaleW: function(maxWidth,width,height){ //上傳圖片size
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
        },
        addOne(){
            var vm = this;
            if(vm.invoiceNum<5){
                vm.invoiceNum++;
                vm.invoiceList.push({id: 'photo'+vm.invoiceNum,number:'',date:'',random_code:'',file:''})
            }
        },
        toDevice(){ //載具登錄
            $('#home').fadeOut(function(){
                $('.touroku2').show()
                $('.touroku1').hide()
                $('#touroku').fadeIn()
                $('.home_choose').hide()
                $('.home_main').show()
            })
        },
        invoiceFinish(){ //發票確認
            var vm = this;
            vm.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            var token = vm.token
            var filted = [];
            var firstItem = vm.invoiceList[0];
            if(!(firstItem.number==""&&firstItem.date==""&&firstItem.random_code==""&&firstItem.file=="")){
                filted.push(vm.invoiceList[0])
            }            
            let invoiceData = {'invoices': filted,"g-recaptcha-response": vm.recaptcha};
            $('.loading').show()
            for(let i=1;i<vm.invoiceList.length;i++){
                var arr = Object.values(vm.invoiceList[i])
                if(!(arr[1]==""&&arr[2]==""&&arr[3]==""&&arr[4]=="")){
                    filted.push(vm.invoiceList[i])
                }
            }
            // console.log(filted)
            $.ajax({
                headers: {'Authorization': 'Bearer'+token},
                method: 'POST',
                url: vm.host+'/api/invoices/invoice',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(invoiceData),
                success(r){
                    console.log(r)
                    vm.invoiceResult = r;
                    for(let i=0;i<r.length;i++){
                        if(!isNaN(r[i].status)){
                            vm.invoicePoint += r[i].status
                        }else if(r[i].status=="is_used"){
                            vm.invoiceResult[i].status = '<span>發票已登錄</span>'
                        }else if(r[i].status=="unconfirmed"){
                            vm.invoiceResult[i].status = '<span>查無資料<br>待人工確認</span>'
                        }
                    }
                    $('.touroku1').fadeOut(function(){
                        $('.touroku_fin').fadeIn()
                        vm.invoiceList = [{"id": 'photo1',"number":'',"date":'',"random_code":'',"file":''}];
                    })
                    fbq('track', 'Lead', {product_id:'2020P10_receipt'});
                    _lt('send', 'cv', {
                        type: 'receipt_point'
                    },['ea9a6ea3-fbef-4203-8dfd-ff37c22297a4']);
                    gtag('event', 'conversion', {
                        'allow_custom_scripts': true,
                        'send_to': 'DC-9087352/invmedia/sctw1006+standard'
                    });
                    
                },
                error(r){
                    console.log(r)
                    if(r.status==403){
                        if(r.responseJSON.error==40304){
                            alert('請勾選我不是機器人')
                        }else{
                            alert('連線已逾期，請重新登入')
                            $('#login').fadeIn()
                            $('#main').hide()
                        }
                    }else if(r.status==422){
                        // alert('資料有誤')
                        // var keyList = Object.keys(r.responseJSON)
                        // var wrongItem = [];
                        // for (var i=0;i<keyList.length; i++){
                        //     wrongItem.push(keyList[i].split('.')[1])
                        // }
                        // var result = wrongItem.filter(function(element, index, arr){
                        //     return arr.indexOf(element) === index;
                        // });
                        // var alertContent ='';
                        // for (var j=0;j<result.length;j++){
                        //     var num = parseInt(result[j])+1;
                        //     alertContent += '您的第 '+num+' 筆發票資料有缺漏或錯誤\n'
                        // }
                        // alertContent += '請再次檢查確認'
                        var alertContent = '您填的資料有缺漏或錯誤\n請再次檢查確認'
                        alert(alertContent)
                        grecaptcha.reset();
                    }
                },
                complete(){
                    $('.loading').hide()
                }
            })
        },
        searchDevice(){ //載具查詢
            var vm = this;
            vm.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            var token = vm.token
            let deviceData = {'cardNo': vm.device.device_code,'cardEncrypt':vm.device.verification_code,"g-recaptcha-response": vm.recaptcha};
            $('.loading').show()
            $.ajax({
                headers: {'Authorization': 'Bearer'+token},
                method: 'POST',
                url: vm.host+'/api/invoices/card',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(deviceData),
                success(r){
                    console.log(r)
                    vm.invoiceResult = r;
                    if(r.length==0){
                        alert('查無未登錄發票資料')
                    }else{
                        for(let i=0;i<vm.invoiceResult.length;i++){
                            vm.invoicePoint += parseInt(vm.invoiceResult[i].status)
                        }
                        $('.device_record').show()
                    }
                    // $('.touroku1').fadeOut(function(){
                    //     $('.touroku_fin').fadeIn()
                    //     vm.invoiceList = [{"id": 'photo1',"number":'',"date":'',"random_code":'',"file":''}];
                    // })
                },
                error(r){
                    console.log(r)
                    if(r.status==504){
                        alert('系統忙碌中，請稍後再試')
                    }else if(r.status==400){
                        alert('載具驗證錯誤')
                    }else if(r.status==403){
                        alert('連線已逾期，請重新登入')
                        $('#login').fadeIn()
                        $('#main').hide()
                    }else if(r.status==422){
                        alert('載具驗證錯誤')
                    }else{
                        alert('系統忙碌中，請稍後再試')
                    }
                    // if(r.status==403){
                    //     alert('連線已逾期，請重新登入')
                    //     $('#login').fadeIn()
                    //     $('#main').hide()
                    // }else if(r.status==422){
                    //     // alert('資料有誤')
                    //     var keyList = Object.keys(r.responseJSON)
                    //     var wrongItem = [];
                    //     for (var i=0;i<keyList.length; i++){
                    //         wrongItem.push(keyList[i].split('.')[1])
                    //     }
                    //     var result = wrongItem.filter(function(element, index, arr){
                    //         return arr.indexOf(element) === index;
                    //     });
                    //     var alertContent ='';
                    //     for (var j=0;j<result.length;j++){
                    //         var num = parseInt(result[j])+1;
                    //         alertContent += '您的第 '+num+' 筆發票資料有缺漏或錯誤\n'
                    //     }
                    //     alertContent += '請再次檢查確認'
                    //     alert(alertContent)
                    // }
                },
                complete(){
                    $('.loading').hide()
                }
            })
            // $('.device_record').show()
        },
        deviceFinish(){ //載具確認
            $('.touroku2').fadeOut(function(){
                $('.touroku_fin').fadeIn()
            })
        },
        tourokuFinish(){ //登錄完成
            // var vm = this;
            // vm.homeStatus();
            // $('#touroku').fadeOut(function(){
            //     $('.touroku_fin').hide()
            //     $('#home').fadeIn()
            //     vm.invoiceResult = [];
            // })
            window.location.reload()
        },
        toExchange(){ //兌換獎品
            $('#home').fadeOut(function(){
                $('#exchange').fadeIn()
                $('.step1').show()
                $('.cart').show()
                $(document).scrollTop(0)
            })
        },
        exchangeBack(){ //兌換獎品回首頁
            $('#exchange').fadeOut(function(){
                $('#home').fadeIn()
            })
        },
        toStep2(){ //兌獎第二步
            var vm = this;
            if(vm.exchange.prize1==0 && vm.exchange.prize2==0 && vm.exchange.prize3==0){
                alert('您尚未選擇任何獎品')
            }else if(vm.cartPoint > vm.info.currentPoint){
                alert('點數不足')
            }else{
                $('.step1').fadeOut(function(){
                    $('.step2').fadeIn()
                })
            }

            
        },
        toStep1(){ //兌獎回第一步
            $('.step2').fadeOut(function(){
                $('.step1').fadeIn()
            })
        },
        toStep3(){  //兌獎第三步
            var vm = this;
            vm.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            var token = vm.token
            var cart = {
                "items": [
                    {"id":1,"amount":vm.exchange.prize3},{"id":2,"amount":vm.exchange.prize2},{"id":3,"amount":vm.exchange.prize1},
                ],
                "info":{"name": vm.exchange.recipient.name,"phone": vm.exchange.recipient.phone, "address": vm.exchange.recipient.address}
            }
            $.ajax({
                headers: {'Authorization': 'Bearer'+token},
                method: 'POST',
                url: vm.host+'/api/exchanges',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(cart),
                success(r){
                    console.log(r)
                    $('.step2').fadeOut(function(){
                        $('.step3').fadeIn()
                    })
                    //埋code
                    fbq('track', 'Lead', {product_id:'2020P10_prize'});
                    _lt('send', 'cv', {
                        type: 'redeem'
                    },['ea9a6ea3-fbef-4203-8dfd-ff37c22297a4']);
                    gtag('event', 'conversion', {
                        'allow_custom_scripts': true,
                        'send_to': 'DC-9087352/invmedia/sctw1007+standard'
                    });
                },
                error(r){
                    console.log(r)
                    if(r.status==403){
                        alert('連線已逾期，請重新登入')
                        // window.location.reload()
                        $('#login').fadeIn()
                        $('#main').hide()
                    }else if (r.status==400){
                        alert('庫存不足，請重新操作')
                    }
                },
            })
        },
        exchangeFinish(){ //兌獎完成
            // $('#exchange').fadeOut(function(){
            //     $('#home').fadeIn()
            //     $('.step3').hide()
            //     $('.step1').show()
            // })
            window.location.reload()
        },
        recordBack(){ //兌換紀錄
            $('#record').fadeOut(function(){
                $('#home').fadeIn()
            })
        },
        prize1Plus(){
            if((this.exchange.prize1) * 40 < this.info.currentPoint){
                if(this.cartPoint+40<this.info.currentPoint){
                    if(parseInt(this.exchange.prize1)+parseInt(this.info.exchange1)+1<=5){
                        this.exchange.prize1++
                        this.cartCount()
                    }else{
                        this.limited.limited1 = true
                        return false
                    }
                }else{
                    // this.notEnough.notEnough1 = true
                    return false
                }                
            }else{
                // this.notEnough.notEnough1 = true
                return false
            }
        },
        prize2Plus(){
            if(this.exchange.prize2 * 150 < this.info.currentPoint){
                if(this.exchange.prize2+this.info.exchange2<1){
                    this.exchange.prize2++
                    this.cartCount()
                }else{
                    this.limited.limited2 = true
                    return false
                }
            }else{
                return false
            }
        },
        prize3Plus(){
            if(this.exchange.prize3*300<this.info.currentPoint){
                if(this.exchange.prize3+this.info.exchange3<1){
                    this.exchange.prize3++
                    this.cartCount()
                }else{
                    this.limited.limited3 = true
                    return false
                }
            }else{
                return false
            }
        },
        prize1Minus(){
            if(this.exchange.prize1>0){
                this.limited.limited1 = false
                this.exchange.prize1--
                this.cartCount()
                if(this.cartPoint<this.info.currentPoint){
                    this.notEnough.notEnough1 = false
                }
            }else{
                return false
            }
        },
        prize2Minus(){
            if(this.exchange.prize2>0){
                    this.limited.limited2 = false
                    this.exchange.prize2--
                    this.cartCount()
                
            }else{
                return false
            }
        },
        prize3Minus(){
            if(this.exchange.prize3>0){
                    this.limited.limited3 = false
                    this.exchange.prize3--
                    this.cartCount()
                
            }else{
                return false
            }
        },
        cartCount(){
            var vm = this;
            vm.cartPoint = this.exchange.prize1*40 + this.exchange.prize2*150 + this.exchange.prize3*300
        }
    },
})

