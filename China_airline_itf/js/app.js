new Vue({
  el: "#app",
  data: {
    million: {
      ticket: '',
      lastname: '',
      firstname: '',
      card: '',
      chinesename: '',
      phone: '',
      mail: '',
      agree: false
    },
    gacha: {
      card: '',
      lastname: '',
      firstname: '',
      phone: '',
      mail: '',
      agree: false,
      token: '',
    },
    group: {
      comp: '',
      date: '',
      dest: '',
      name: '',
      ID: '',
      phone: '',
      mail: '',
      agree: false
    },
    result: {
      miles: '',
      prize: '',
      src: '',
    },
    week_tab: 'week1',
    guide:'guide1',
    guide_group: 'guide2',
    disabledDates: {
      to: new Date(2019, 11, 1),
      from: new Date(2020, 2, 31)
    },
    openDate: new Date(2019, 11, 2)
  },
  components: {
    vuejsDatepicker
  },  
  methods: {
    ticket: function(){
      var vm = this;
      var pattern =  /^[^\[\]\(\)\\<>:;,@.]+[^\[\]\(\)\\<>:;,@]*@[a-z0-9A-Z]+(([.]?[a-z0-9A-Z]+)*[-]*)*[.]([a-z0-9A-Z]+[-]*)+$/g;
      if(vm.million.agree==false){
        Swal.fire({
          title: 'Oops...',
          html: 
            '請同意隱私權政策<br>'+
            '<img class="oops" src="img/error_boy.png" alt="">'
        })
      }else if(vm.million.ticket==''||vm.million.lastname==''||vm.million.firstname==''||vm.million.card==''||vm.million.chinesename==''||vm.million.phone==''||vm.million.mail==''){
        Swal.fire({
          title: 'Oops...',
          html: 
            '請填妥每項欄位<br>'+
            '<img class="oops" src="img/error_boy.png" alt="">'
        })
      }else if(pattern.test(vm.million.mail) == false){
        Swal.fire({
          title: 'Oops...',
          html: 
            '請確認輸入信箱格式無誤<br>'+
            '<img class="oops" src="img/error_boy.png" alt="">'
        })
      }else{ 
        Swal.fire({
          title: 'loading...',
          text: '處理中，請稍等',
          // allowOutsideClick: () => !Swal.isLoading(),
          allowOutsideClick: function allowOutsideClick(){
            return !Swal.isLoading()
          },
          onOpen: function onOpen() {
            Swal.showLoading()
            setTimeout(function() {           
              $.ajax({
                method: "POST",
                url: '/api/ticket',
                data: {
                  TicketNo: vm.million.ticket,
                  LastName: vm.million.lastname,
                  FirstName: vm.million.firstname,
                  DfpNo: vm.million.card,
                  ChineseName: vm.million.chinesename,
                  Phone: vm.million.phone,
                  Email: vm.million.mail,
                },
                success: function(r){
                  if(r.status == '200'){
                    gtag('config', 'UA-149919035-1', {'page_title': 'ticket_ok'});
                    Swal.fire({
                      title: '登錄成功!',
                      html:
                        '得獎名單將於11/29當日公布於活動網站，敬請期待<br>' +                  
                        '<img class="calendar" src="img/million_calendar.png" alt="">',
                      showCloseButton: true,
                      showCancelButton: true,
                      focusConfirm: false,
                      confirmButtonText:
                        '優惠機票',
                      cancelButtonText:
                        '會員扭扭樂'
                    }).then(function(result){
                      if(result.value){
                        gtag('event', 'ticket_ok_promotion',{'event_label' : '左按鈕：優惠機票'});
                        var waypointTop = $("#waypoint").offset().top;
                        setTimeout(function() {window.scrollTo({top: waypointTop, behavior: "smooth"})},300)
                      }else if(result.dismiss == 'cancel'){
                        gtag('event', 'ticket_ok_lottery',{'event_label' : '右按鈕：會員扭扭樂'});
                        var gachaTop = $("#gacha").offset().top;
                        setTimeout(function() {window.scrollTo({top: gachaTop, behavior: "smooth"})},300)
                        
                      }
                    });
                  }else if(r.status == '100'){
                    Swal.fire({
                      title: 'Oops...',
                      html: 
                        '此機票已登錄<br>'+
                        '<img class="oops" src="img/error_boy.png" alt="">'
                    })
                  }else if(r.status == '300'){
                    Swal.fire({
                      title: 'Oops...',
                      html: 
                        '請檢查正確會員卡號、機票票號及英文姓或名，並重新輸入或參閱活動辦法說明。<br>'+
                        '<img class="oops" src="img/error_boy.png" alt="">'
                    })
                  }else if (r.status == '500'){
                    Swal.fire({
                      title: 'Oops...',
                      html: 
                        '活動結束<br>'+
                        '<img class="oops" src="img/error_boy.png" alt="">'
                    })
                  }
                  console.log(r)
                },
                error:function(r){
                  console.log(r)
                }
              })
            },500);
          }
        })
      }
    },
    play: function(){
      var vm = this;
			// var nowDate = new Date();
      // var startTime = new Date('2019-10-18')
      // if ( nowDate < startTime ){
        // Swal.fire({
          // title: 'Oops...',
          // html: 
            // '活動將於10/18 9:00正式開始<br>敬請期待<br>'+
            // '<img class="oops" src="img/error_boy.png" alt="">'
        // })
      // }else{
      var pattern =  /^[^\[\]\(\)\\<>:;,@.]+[^\[\]\(\)\\<>:;,@]*@[a-z0-9A-Z]+(([.]?[a-z0-9A-Z]+)*[-]*)*[.]([a-z0-9A-Z]+[-]*)+$/g;
      if(vm.gacha.agree==false){
        Swal.fire({
          title: 'Oops...',
          html: 
            '請同意隱私權政策<br>'+
            '<img class="oops" src="img/error_boy.png" alt="">'
        })
      }else if(vm.gacha.lastname==''||vm.gacha.firstname==''||vm.gacha.card==''||vm.gacha.phone==''||vm.gacha.mail==''){
        Swal.fire({
          title: 'Oops...',
          html: 
            '請填妥每項欄位<br>'+
            '<img class="oops" src="img/error_boy.png" alt="">'
        })
      }else if(pattern.test(vm.gacha.mail) == false){
        Swal.fire({
          title: 'Oops...',
          html: 
            '請確認輸入信箱格式無誤<br>'+
            '<img class="oops" src="img/error_boy.png" alt="">'
        })
      }else{
        // Swal.fire({
        //   title: 'loading...',
        //   text: '處理中，請稍等',
        //   onOpen: () => {
        //     Swal.showLoading()
        //     setTimeout(() => {
              $.ajax({
                method: "POST",
                url: '/api/member',
                data: {
                  MemberNo: vm.gacha.card,
                  LastName: vm.gacha.lastname,
                  FirstName: vm.gacha.firstname,
                  Phone: vm.gacha.phone,
                  Email: vm.gacha.mail
                },
                success: function(r){
                  console.log(r);
                  if(r.status == '200'){
                    let token = r.token
                    document.cookie = "token=" +token +"; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
                    // vm.gacha.token = token;
                    window.location.href = 'gacha.html';
                  }else if(r.status == '100'){
                    Swal.fire({
                      title: 'Oops...',
                      html: 
                        '此會員卡號重複登入<br>'+
                        '<img class="oops" src="img/error_boy.png" alt="">'
                    })
                  }else if (r.status == '300'){
                    Swal.fire({
                      title: 'Oops...',
                      html: 
                        '請檢查正確會員卡號及英文姓或名，'+
                        '並重新輸入或參閱活動辦法說明。<br>'+
                        '<img class="oops" src="img/error_boy.png" alt="">'
                    })
                  }else if (r.status == '400'){
                    Swal.fire({
                      title: 'Oops...',
                      html: 
                        '系統忙碌中<br>'+
                        '<img class="oops" src="img/error_boy.png" alt="">'
                    })
                  }else if (r.status == '500'){
                    Swal.fire({
                      title: 'Oops...',
                      html: 
                        '活動結束<br>'+
                        '<img class="oops" src="img/error_boy.png" alt="">'
                    })
                  }
                },
                error:function(r){
                  console.log(r)
                }
              })
        //     }, 500);
        //   }
        // })
      }
      // } 
    },
    toGacha: function(){
      $('.menuToggle input').prop('checked', false);
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#gacha").offset().top
      }, 800);
    },
    toMillion: function(){
      $('.menuToggle input').prop('checked', false);
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#million").offset().top
      }, 800);
    },
    toFly: function(){
      $('.menuToggle input').prop('checked', false);
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#waypoint").offset().top
      }, 800);
    },
    toGroup: function(){
      $('.menuToggle input').prop('checked', false);
      $([document.documentElement, document.body]).animate({
        scrollTop: $("#group").offset().top
      }, 800);
    },
    playGacha: function(){      
      $('.playGacha').fadeOut(200);
      vm = this;
      var token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      console.log(token);
      $.ajax({
        method: "POST",
        url: '/api/lottery',
        data: {
          token: token
        },
        success: function(r){
          if(r.status == '200'){
            console.log(r);
            // console.log('恭喜');
            gtag('config', 'UA-149919035-1', {'page_title': 'lottery_done'});
            if(r.prize == '1'){
              $('.result').css({"background-image":"url('img/game_result6000_bll.png')"});
              init(1);
              vm.result.prize = '1';
              vm.result.miles = '6000'
              vm.result.src = "img/game_result6000.png"
            }else if (r.prize == '2'){ 
              $('.result').css({"background-image":"url('img/game_result600_bll.png')"});
              init(2);
              vm.result.prize = '2';             
              vm.result.miles = '600'
              vm.result.src = "img/game_result600.png"
            }else if (r.prize == '3'){
              init(3);
              vm.result.prize = '3';
              vm.result.src = "img/game_result0.png"
            }
            // exportRoot.play();
            $('.machine').delay(3000).fadeOut(300);
            vm.showResult();
          }else if(r.status == '100'){
            console.log(r)
            Swal.fire({
              title: 'OOPS!',
              html: 
                '此會員卡號重複登入<br>'+
                '<img class="oops" src="img/error_boy.png" alt="">'
            }).then(function(){
              window.location.href = '/';
            })
            console.log('重複');
            // if(r.prize == '1'){
            //   $('.result').css(background-Image,url('img/game_result6000_bll.png'));
            //   // init(1);
            //   vm.result.prize = '1';
            //   vm.result.miles = '6000'
            //   vm.result.src = "img/game_result6000.png"
            // }else if (r.prize == '2'){ 
            //   $('.result').css(background-Image,url('img/game_result600_bll.png'))
            //   // init(2);
            //   vm.result.prize = '2';             
            //   vm.result.miles = '600'
            //   vm.result.src = "img/game_result600.png"
            // }else if (r.prize == '3'){
            //   // init(3);
            //   vm.result.prize = '3';
            //   vm.result.src = "img/game_result0.png"
            // }
            // exportRoot.play();
            // $('.machine').delay(3000).fadeOut(300);
            // vm.showResult();
          }else if (r.status == '400'){
            window.location.href = '/';
            console.log(r)
            console.log('無此token')
          }else if (r.status == '500'){
            window.location.href = '/';
            console.log(r)
            console.log('活動已過')
          }
        },
        error:function(r){
          console.log(r)
        }
      })
    },
    showResult: function(){
      $('#canvas').delay(3000).animate({opacity:0},300);      
      $('.twomen').delay(3000).animate({opacity:0},300);
      $('h1').delay(3000).animate({opacity:0},300);
      $('.result').delay(3300).fadeIn(300);
    },
    totop: function(){
      $('html, body').animate({scrollTop:0}, 500);
    },
    comingSoon: function(){
      swal.fire({
        title: 'Coming Soon',
        text:'敬請期待'
      })
    },
    customFormatter: function(date) {
      var vm = this;
      vm.group.date = moment(date).format('YYYY/MM/DD');
      return moment(date).format('YYYY/MM/DD');
    },
    groupForm: function(){
      var vm = this;
      var mailPattern =  /^[^\[\]\(\)\\<>:;,@.]+[^\[\]\(\)\\<>:;,@]*@[a-z0-9A-Z]+(([.]?[a-z0-9A-Z]+)*[-]*)*[.]([a-z0-9A-Z]+[-]*)+$/g;
      var idPattern = /^[A-Za-z][12]\d{8}$/;
      if(vm.group.agree==false){
        Swal.fire({
          title: 'Oops...',
          html: 
            '請同意隱私權政策<br>'+
            '<img class="oops" src="img/error_boy.png" alt="">'
        })
      }else if(vm.group.comp==''||vm.group.date==''||vm.group.dest==''||vm.group.name==''||vm.group.ID==''||vm.group.phone==''||vm.group.mail==''){
        Swal.fire({
          title: 'Oops...',
          html: 
            '請填妥每項欄位<br>'+
            '<img class="oops" src="img/error_boy.png" alt="">'
        })
      }else if(idPattern.test(vm.group.ID) == false){
        Swal.fire({
          title: 'Oops...',
          html: 
            '請確認身分證字號輸入無誤<br>'+
            '<img class="oops" src="img/error_boy.png" alt="">'
        })
      }else if(mailPattern.test(vm.group.mail) == false){
        Swal.fire({
          title: 'Oops...',
          html: 
            '請確認輸入信箱格式無誤<br>'+
            '<img class="oops" src="img/error_boy.png" alt="">'
        })
      }else{
        $.ajax({
          method: "POST",
          url: '/api/tour',
          data: {
            Travel_agency: vm.group.comp,
            Destination: vm.group.dest,
            DepDate: vm.group.date,
            Name: vm.group.name,
            IdCard: vm.group.ID,
            Phone: vm.group.phone,
            Email: vm.group.mail
          },
          success: function(r){
            // var r = JSON.parse(response)
            console.log(r)
            console.log(r.status);
            if(r.status == '200'){
              console.log('success');
              Swal.fire({
                title: '登錄成功',
                html: 
                  '敬請參閱得獎公告<br>'+
                  '<img class="oops" src="img/success_girl.png" alt="">'
              }).then(function(){
                location.reload()
              });
            }else if(r.status == '100'){
              console.log('重複');
              Swal.fire({
                title: 'Oops...',
                html: 
                  '此身分證號碼重複登入<br>'+
                  '<img class="oops" src="img/error_boy.png" alt="">'
              })
            }else if (r.status == '300'){
              Swal.fire({
                title: 'Oops...',
                html: 
                  '請確認身分證號碼輸入無誤'+
                  '<img class="oops" src="img/error_boy.png" alt="">'
              })
            }else if (r.status == '400'){
              Swal.fire({
                title: 'Oops...',
                html: 
                  '系統忙碌中<br>'+
                  '<img class="oops" src="img/error_boy.png" alt="">'
              })
            }else if (r.status == '500'){
              Swal.fire({
                title: 'Oops...',
                html: 
                  '活動結束<br>'+
                  '<img class="oops" src="img/error_boy.png" alt="">'
              })
            }
          },
          error:function(r){
            console.log(r)
          }
        })
      }
    },
    openBonus: function(){
      gtag('config', 'UA-149919035-1', {'page_title': 'group_logo'});
      $('.mask').fadeIn();
      $('body').addClass('ofh')
    },
    closeBonus: function(){
      $('.mask').fadeOut();
      $('body').removeClass('ofh')
    },
    guide2: function(){
      var vm = this;
      vm.guide = 'guide2';
      vm.guide_group = 'guide2';
      gtag('config', 'UA-149919035-1', {'page_title': 'terms_conditions_group'});
    },
    guide1: function(){
      var vm = this;
      vm.guide = 'guide1';
      vm.guide_group = 'guide1';
      gtag('config', 'UA-149919035-1', {'page_title': 'terms_conditions'});
    },
    endGroup: function(){
      Swal.fire({
        title: 'Oops...',
        html: 
          '活動已結束，敬請參閱得獎名單<br>將於11/22 E-mail通知得獎者！<br>'+
          '<img class="oops" src="img/error_boy.png" alt="">'
      })
    },
    endmil: function(){
      Swal.fire({
        title: '活動已結束',
        html: 
          '感謝您的參與，活動已結束。<br>將於11/29公告得獎名單並E-mail通知得獎者！<br>'+
          '<img class="oops" src="img/success_girl.png" alt="">'
      })
    },
    endgacha: function(){
      Swal.fire({
        title: '活動已結束',
        html: 
          '活動已結束，敬請參閱得獎名單。<br>將於11/29 E-mail通知得獎者！<br>'+
          '<img class="oops" src="img/success_girl.png" alt="">'
      })
    },
    million_success(){
      Swal.fire({
        title: '登錄成功!',
        html:
          '得獎名單將於11/29當日公布於活動網站，敬請期待<br>' +                  
          '<img class="calendar" src="img/million_calendar.png" alt="">',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '優惠機票',
        cancelButtonText:
          '會員扭扭樂'
      })
    },
    million_failed(){
      Swal.fire({
        title: 'Oops...',
        html: 
          '請檢查正確會員卡號、機票票號及英文姓或名，並重新輸入或參閱活動辦法說明。<br>'+
          '<img class="oops" src="img/error_boy.png" alt="">'
      })
    },
    gacha_failed(){
      Swal.fire({
        title: 'Oops...',
        html: 
          '請檢查正確會員卡號及英文姓或名，'+
          '並重新輸入或參閱活動辦法說明。<br>'+
          '<img class="oops" src="img/error_boy.png" alt="">'
      })
    },
    group_success(){
      Swal.fire({
        title: '登錄成功',
        html: 
          '敬請參閱得獎公告<br>'+
          '<img class="oops" src="img/success_girl.png" alt="">'
      }).then(function(){
        location.reload()
      });
    },
    group_failed(){
      Swal.fire({
        title: 'Oops...',
        html: 
          '請確認身分證號碼輸入無誤'+
          '<img class="oops" src="img/error_boy.png" alt="">'
      })
    },
    play_success(){      
      $('.playGacha').fadeOut(200);
      var vm = this;
      $('.result').css({"background-image":"url('img/game_result6000_bll.png')"});
      init(1);
      vm.result.prize = '1';
      vm.result.miles = '6000'
      vm.result.src = "img/game_result6000.png"
      $('.machine').delay(3000).fadeOut(300);
      vm.showResult();
    }
  }
})