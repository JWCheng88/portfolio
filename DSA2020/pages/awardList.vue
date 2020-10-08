<template>
    <div class="wrapper">
        <div class="head head_news">
            <div class="tittle">
                <span>歷年得獎作品</span>
                <span class="sub">GOLD AWARD</span>
            </div>
        </div>
        <main class="awardList">
            <div class="award-submenu">
                <div class="award-submenu2">
                    <a class="btn-award-sub" href="gold" @click.prevent="util_LinkTo('/gold')">
                        <span class="txt">金獎作品</span>
                        <span class="arrow"></span>
                    </a>
                    <a class="btn-award-sub" href="javascript:;">
                        <span class="txt">得獎名單</span>
                        <span class="arrow"></span>
                    </a>
                </div>
            </div>
            <div class="awardList-content">
                <div class="year" @click="show2019 = !show2019" :class="{active:show2019}">
                    <span class="arrow"></span>
                    2019
                </div>
                <div class="year_wrapper" :class="{active:show2019}">
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">影片創意類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="bigPrize">
                                <td>類別大獎</td>
                                <td colspan="3">從缺</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳影片創意獎</td>
                                <td>台灣奧美</td>
                                <td>我的不意外家庭</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>台灣電通</td>
                                <td>時間會看見</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>台灣奧美</td>
                                <td>不吃不喝</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="3">最佳短影片 創意獎</td>
                                <td>一顆雷夢 </td>
                                <td>型錄達人秀</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>BBDO TAIWAN </td>
                                <td>行動感應支付系列</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>夢之怪物 </td>
                                <td>回家辦桌系列</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳社群影 片創意獎</td>
                                <td>台灣奧美</td>
                                <td>不吃不喝</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>大肆創意 </td>
                                <td>洋食料理隨手做</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>夢之怪物 </td>
                                <td>小辦桌文化 </td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳互動影片創意獎</td>
                                <td colspan="3">從缺</td>
                            </tr>
                            <tr class="light">
                                <td>最佳科技運用影片創意獎</td>
                                <td colspan="3">從缺</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">品牌體驗與促動行銷類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="bigPrize">
                                <td>類別大獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>台北健森房—活水飛輪</td>
                                <td></td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳通路服務體驗行銷獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>台北健森房—活水飛輪</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>米蘭營銷策劃</td>
                                <td>U 管家</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳數位平台整合行銷獎</td>
                                <td>台灣電通</td>
                                <td>佳議員事件簿</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳跨媒體整合行銷獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>台北健森房—活水飛輪</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>偉門智威</td>
                                <td>舒潔好聲音</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>台灣奧美</td>
                                <td>有些任性大人才懂</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳數位廣告創意行銷獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>【老蕭音樂瓶】掃 Coke 勁享 5 種音樂驚喜</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳活動網站行銷獎</td>
                                <td>台灣奧美</td>
                                <td>不意外騎士 情路三行詩</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>春樹科技</td>
                                <td>上河圖</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>安索帕台灣</td>
                                <td>家鄉心距離</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳企業網站行銷獎</td>
                                <td>台灣奧美</td>
                                <td>有些任性大人才懂</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳策展行銷獎</td>
                                <td>偉門智威</td>
                                <td>聲波聖誕樹</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>聯廣傳播集團_聯樂數位行銷</td>
                                <td>深度美線上攝影展</td>
                                <td>銅</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">行動行銷類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="bigPrize">
                                <td>類別大獎</td>
                                <td>偉門智威</td>
                                <td>捐血地標</td>
                                <td></td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳APP及行動網路行銷獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>台北健森房—活水飛輪</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>偉門智威</td>
                                <td>捐血地標</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳遊戲及遊戲置入行銷獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>台北健森房—活水飛輪</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>最佳適地性促動行銷獎</td>
                                <td>偉門智威</td>
                                <td>捐血地標</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳行動廣告行銷獎</td>
                                <td>偉門智威</td>
                                <td>捐血地標</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>安索帕台灣</td>
                                <td>神V量角器</td>
                                <td>銅</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">電子商務行銷類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="bigPrize">
                                <td>類別大獎</td>
                                <td>創異促動</td>
                                <td>弘道「寒冬助老，刻不容緩」募款計畫</td>
                                <td></td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳電子商務行銷獎</td>
                                <td>BBDO TAIWAN</td>
                                <td>A-Class Text Test Drive 聊天試</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>安布思沛行銷</td>
                                <td>小預算大勝利—嬌蘭如何運用小預算創造EC銷售奇蹟</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="4">最佳O2O行銷獎</td>
                                <td>創異促動</td>
                                <td>弘道「寒冬助老，刻不容緩」募款計畫</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>米蘭營銷策劃</td>
                                <td>U 管家</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>安索帕台灣</td>
                                <td>神V量角器</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>貓取廣告</td>
                                <td>左岸巷弄沙龍計畫</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳顧客旅程與介面設計獎</td>
                                <td>漸強實驗室</td>
                                <td>從用戶出發，用Line打造行銷新渠道 </td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>米蘭營銷策劃</td>
                                <td>U 管家</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>新光人壽保險</td>
                                <td>「新光人壽LINE官方帳號」之「客製化行動應用保險服務平台」</td>
                                <td>銅</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">數據創新類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="bigPrize">
                                <td>類別大獎</td>
                                <td>紅門互動</td>
                                <td>CDPx 大苑子顧客數據價值</td>
                                <td></td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳精準數據應用行銷獎</td>
                                <td>PIXNET</td>
                                <td>內容包圍</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>電通國華</td>
                                <td>奇異讀心術</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>安布思沛行銷</td>
                                <td>精準顧客基因複製策略</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳數據洞察創新獎</td>
                                <td>台灣奧美</td>
                                <td>全聯新聞台:新竹男友</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>安布思沛行銷</td>
                                <td>BenQ-你知道怎麼找出真 正的消費者是誰嗎</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳程序化行銷創新獎</td>
                                <td>TenMax 騰學廣告科技</td>
                                <td>程序化解構消費輪廓，精準建構顧客DNA</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>宇匯知識科技</td>
                                <td>程序化購買方案-突破在 地電商銷售瓶頸</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳數據科技創新獎</td>
                                <td>紅門互動</td>
                                <td>CDPx 大苑子顧客數據價值</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>塔圖科技</td>
                                <td>利用KMeans演算法做跨站受眾分群用於廣告投放優化</td>
                                <td>銅</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">娛樂行銷類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="bigPrize">
                                <td>類別大獎</td>
                                <td>台灣奧美</td>
                                <td>我的不意外家庭</td>
                                <td></td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳內容娛樂獎</td>
                                <td>台灣奧美</td>
                                <td>我的不意外家庭</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>台灣電通</td>
                                <td>無條件的愛</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="3">最佳音樂娛樂獎</td>
                                <td>偉門智威</td>
                                <td>血月搖滾</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>台灣奧美</td>
                                <td>一句話的力量</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>橘子磨坊數位創意溝通</td>
                                <td>大眾的笑容主題曲:廣仲 feat. 大眾</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>最佳遊戲/置入娛樂獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>台北健森房—活水飛輪</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳運動娛樂獎</td>
                                <td colspan="3">從缺</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">社群與影響者行銷類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="bigPrize">
                                <td>類別大獎</td>
                                <td>只要有人社群顧問</td>
                                <td>人生的真相</td>
                                <td></td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳影響者行銷獎</td>
                                <td>麥肯廣告</td>
                                <td>水次元刮鬍刀-不合格代言人</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>法樂設計</td>
                                <td>大師兄重出江湖篇</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳社群經營行銷</td>
                                <td>只要有人社群顧問</td>
                                <td>人生的真相</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>安索帕台灣</td>
                                <td>平權之筆</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳品牌合作夥伴行銷獎</td>
                                <td>不來梅</td>
                                <td>故宮宴</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>貓取廣告</td>
                                <td>左岸巷弄沙龍計畫</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>法樂設計</td>
                                <td>UNO 大人感顏</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="5">最佳社群內容行銷獎</td>
                                <td>偉門智威</td>
                                <td>舒潔好聲音</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>麥肯廣告</td>
                                <td>夢幻新車上市計畫</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>大肆創意</td>
                                <td>洋食料理隨手做 </td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>只要有人社群顧問</td>
                                <td>人生的真相 </td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>台灣奧美</td>
                                <td>我的不意外家庭</td>
                                <td>銅</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">數位技術類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="bigPrize">
                                <td>類別大獎</td>
                                <td>iKala</td>
                                <td>Shoplus AI 社群賣家服務</td>
                                <td></td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳使用者體驗(UX)獎</td>
                                <td>新光人壽保險</td>
                                <td>「新光人壽LINE官方帳號」之「客製化行動應用保險服務平台」</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>米蘭營銷策劃</td>
                                <td>【老蕭音樂瓶】掃Coke勁享5種音樂驚喜</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>米蘭營銷策劃</td>
                                <td>台北健森房—活水飛輪</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳IoT應用獎</td>
                                <td>艾聚普</td>
                                <td>智能手沖咖啡機</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>米蘭營銷策劃</td>
                                <td>台北健森房—活水飛輪</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="4">最佳AI應用獎</td>
                                <td>iKala</td>
                                <td>Shoplus AI 社群賣家服務</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>Google</td>
                                <td>和Google助理一起慶祝元宵節</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>iKala</td>
                                <td>iKala Picaas:Google購物廣告專屬AI智慧圖像解決方案</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>PIXNET</td>
                                <td>痞客邦個人化興趣牆推薦系統</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="4">最佳體驗技術運用獎</td>
                                <td>永慶房產集團</td>
                                <td>實境LIVE賞屋 - 經紀人線上帶看看房無國界解說零距離</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>米蘭營銷策劃</td>
                                <td>【老蕭音樂瓶】掃Coke勁享5種音樂驚喜</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>Yahoo</td>
                                <td>Yahoo TV AR 虛實整合未來新視界</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>Yahoo</td>
                                <td>Yahoo TV 虛擬網紅</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="4">最佳數位技術應用獎</td>
                                <td>創業家兄弟</td>
                                <td>[AI 與 API 的智慧結合] LINE 個人化行銷</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>新光人壽保險</td>
                                <td>「新光人壽LINE官方帳號」之「客製化行動應用保險服務平台」</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>一顆雷夢</td>
                                <td>IKEA LINE 官方帳號 </td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>米蘭營銷策劃</td>
                                <td>U 管家</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳互動體驗裝置與技術應用獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>台北健森房—活水飛輪</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>安索帕台灣</td>
                                <td>女神光自造機</td>
                                <td>銅</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">創新類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="bigPrize">
                                <td>類別大獎</td>
                                <td>艾聚普</td>
                                <td>智能手沖咖啡機</td>
                                <td></td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳產品創新獎</td>
                                <td>艾聚普</td>
                                <td>智能手沖咖啡機</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>春樹科技</td>
                                <td>發票怪獸</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳商業轉型創新獎</td>
                                <td>威士康</td>
                                <td>美賣AI媒合KOL電商平台</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>電通國華</td>
                                <td>Yahoo Lab 行銷未來室</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳科技創新獎</td>
                                <td>永慶房產集團</td>
                                <td>實境LIVE賞屋 - 經紀人線上帶看看房無國界解說零距離</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>新光人壽保險</td>
                                <td>「新光人壽 LINE官方帳號」之「客製化行動應用保險服務平台」</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>Yahoo</td>
                                <td>Yahoo TV 虛擬網紅科技運用</td>
                                <td>銅</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="year" @click="show2018 = !show2018" :class="{active:show2018}">
                    <span class="arrow"></span>
                    2018
                </div>
                <div class="year_wrapper" :class="{active:show2018}">
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">數位創意類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳廣告文案創意獎</td>
                                <td>台灣麥肯傳播集團</td>
                                <td>第三個願望</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>台灣電通</td>
                                <td>希望之歌</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="4">最佳社群文案創意獎</td>
                                <td>台灣偉門集團</td>
                                <td>台灣高鐵 中秋節每日一詩</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>電通國華</td>
                                <td>HEATTECH取暖文選</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>米蘭營銷策劃</td>
                                <td>SONY Xperia XA1 #嘴一個態度</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>我是大衛廣告</td>
                                <td>7-ELEVEN潮BUY中元節 陰間啟示錄＆職場審判</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳展示廣告創意獎</td>
                                <td>安索帕台灣</td>
                                <td>鼻不通 行不通</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>統一數網</td>
                                <td>純喫茶2017側面包裝活動宣傳</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>我是大衛廣告</td>
                                <td>7-ELEVEN潮BUY中元節 職場審判</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="4">最佳影片創意獎</td>
                                <td>台灣麥肯傳播集團</td>
                                <td>第三個願望</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>飛時創意</td>
                                <td>長榮航空 機上安全宣導影片</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>新眺創意</td>
                                <td>食慾煞不住篇/追劇慾煞不住篇/購物慾煞不住篇/手機慾煞不住篇</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>演鏡互動</td>
                                <td>昇恆昌 #好人計畫</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳短影片創意獎</td>
                                <td>安索帕台灣</td>
                                <td>鼻不通 行不通</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>台灣電通</td>
                                <td>有事無恐</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳互動影片創意獎</td>
                                <td>貓取廣告</td>
                                <td>港覺有夠好</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>新極現廣告</td>
                                <td>Siri護眼操</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳使用者體驗UX創意獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>Sony Mobile 被消失的文章</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>演鏡互動</td>
                                <td>NIKE試穿體驗空間</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>演鏡互動</td>
                                <td>HBL吉祥物扭蛋</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td >最佳活動網站及APP創意獎</td>
                                <td>貓取廣告</td>
                                <td>港覺有夠好</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td >最佳企業網站及APP創意獎</td>
                                <td>不來梅</td>
                                <td>節氣時光</td>
                                <td>金</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">技術應用類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳ARVR應用獎</td>
                                <td>Oath 台灣</td>
                                <td>虎妮</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>遠傳電信</td>
                                <td>遠傳快閃搶百萬紅包</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳網站技術應用獎</td>
                                <td>永慶房屋仲介</td>
                                <td>「實境找房 彈指之間 猶如親臨」- 看房先看生活圈</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>貓取廣告</td>
                                <td>港覺有夠好</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳廣告技術獎</td>
                                <td>安布思沛行銷</td>
                                <td>Yahoo 電商搜尋創新方案</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>米蘭營銷策劃</td>
                                <td>Sony Mobile 被消失的文章</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="3">最佳互動裝置應用獎</td>
                                <td>演鏡互動</td>
                                <td>NIKE試穿體驗空間</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>BBDO黃禾廣告</td>
                                <td>敲開汪心門</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>梅林斯行銷有限公司 (梅林鬍子實驗室)</td>
                                <td>咖啡廣場音樂包</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳數位服務體驗應用獎</td>
                                <td>演鏡互動</td>
                                <td>NIKE試穿體驗空間</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>演鏡互動</td>
                                <td>HBL吉祥物扭蛋</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>安索帕台灣</td>
                                <td>101許願牆</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳數據應用獎</td>
                                <td>安布思沛行銷</td>
                                <td>消費者行為預測 客人您想買甚麼?</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>小米公司</td>
                                <td>雀巢×小米，用科技实现中国健康服务变革</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳loT 應用獎</td>
                                <td>小米公司</td>
                                <td>肯德基“会叫鸡的冰箱” IoT 时代开启智能订餐新场景</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>紅門互動</td>
                                <td>關注晴光鳥，數位大翻轉</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>PIXNET</td>
                                <td>PIXNET HACKATHON 智慧報到系統</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="4">最佳AI應用獎</td>
                                <td>小米公司</td>
                                <td>上优酷看世界杯，一句话的事儿!</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>安索帕台灣</td>
                                <td>AI首部曲_新人求生包</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>米蘭營銷策劃</td>
                                <td>Coca-Cola 互動歌手瓶 聊天室</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>春樹科技</td>
                                <td>福媽ONLINE</td>
                                <td>銅</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">整合行銷類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳社群行銷獎</td>
                                <td>安索帕台灣</td>
                                <td>101許願牆</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>BBDO黃禾廣告</td>
                                <td>VISA 假打卡</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>電通國華</td>
                                <td>康寶 史上最美味的自然實驗</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="3">最佳跨媒體整合行銷獎</td>
                                <td>新極現廣告</td>
                                <td>台灣之星 黑點行動</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>安索帕台灣</td>
                                <td>101許願牆</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>米蘭營銷策劃</td>
                                <td>Coca-Cola 互動歌手瓶 聊天室</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳數位平台整合行銷獎</td>
                                <td>演鏡互動</td>
                                <td>HBL吉祥物扭蛋</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>安索帕台灣</td>
                                <td>101許願牆</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="3">最佳內容行銷獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>Sony Mobile 被消失的文章</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>我是大衛廣告</td>
                                <td>7-ELEVEN潮BUY中元節之與神同行</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>創異數位</td>
                                <td>碧歐斯 肌膚的都市傳說</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳程序化行銷獎</td>
                                <td>經緯廣告科技</td>
                                <td>Lenovo 實踐顧客旅程地圖，執行程序化行銷</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>宏盟媒體集團</td>
                                <td>福斯汽車 - 來頭不小，勁化登場</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳行動行銷獎</td>
                                <td>演鏡互動</td>
                                <td>HBL吉祥物扭蛋</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>米蘭營銷策劃</td>
                                <td>Coca-Cola 互動歌手瓶 聊天室</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳策展行銷獎</td>
                                <td>安索帕台灣</td>
                                <td>101許願牆</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>電通國華</td>
                                <td>康寶 史上最美味的自然實驗</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>電通國華</td>
                                <td>電通安吉斯  啟飛吧！小梅</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳電子商務行銷獎</td>
                                <td>Oath 台灣</td>
                                <td>Yahoo 1111購物節</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳KOL獎</td>
                                <td>浩騰媒體</td>
                                <td>麥當勞 - 蝦，無所不在</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>奇異之旅媒體</td>
                                <td>ACQUA FILETTE #空姐水</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="3">最佳O2O行銷獎</td>
                                <td>台灣麥肯傳播集團</td>
                                <td>AUDI Q2 </td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>台灣偉門集團</td>
                                <td>Firefox #當隻自由的狐狸</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>Oath 台灣</td>
                                <td>Yahoo TV 夢想超展開</td>
                                <td>銅</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">媒體應用類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="light">
                                <td>最佳 DMP 應用獎</td>
                                <td>台灣大哥大</td>
                                <td>TAmedia X LUX Botanifique 以大數據串連O2O</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳使用者體驗(UX)創意獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>Sony Mobile 被消失的文章</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳策展行銷獎</td>
                                <td>安索帕台灣</td>
                                <td>牙菌斑大現形</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>米蘭營銷策劃</td>
                                <td>雀巢多趣酷思 – 世界最迷你咖啡館</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳媒體行銷技術獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>Sony Mobile 被消失的文章</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳媒體內容行銷獎</td>
                                <td>BBDO黃禾廣告</td>
                                <td>餓狀大補帖</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>大肆創意</td>
                                <td>止痛怪談</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>未來方案</td>
                                <td>Office 365 跟著HOWFUN哦起來</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳直播行銷運用獎</td>
                                <td>電通國華</td>
                                <td>24小時漢堡店</td>
                                <td>銀</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="bigPrize">
                                <td>全場大獎</td>
                                <td>新極現廣告</td>
                                <td>台灣之星-黑點行動</td>
                                <td></td>
                            </tr>
                            <tr class="bigPrize">
                                <td>年度創新大獎</td>
                                <td>安布思沛行銷</td>
                                <td>萊雅-消費者行為預測 客人您想買甚麼 ?</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                
                <div class="year" @click="show2017 = !show2017" :class="{active:show2017}">
                    <span class="arrow"></span>
                    2017
                </div>
                <div class="year_wrapper" :class="{active:show2017}">
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">數位創意類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳廣告文案創意獎</td>
                                <td>聯旭廣告</td>
                                <td>CITY CAFÉ 時間篇</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>台灣奧美</td>
                                <td>KIRIN 人生的一番搾</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>黃禾廣告</td>
                                <td>BenQ 做個戀家的人#丈夫的秘密簡訊</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="3">最佳社群文案創意獎</td>
                                <td>我是大衛廣告</td>
                                <td>潮Buy中元節 – 燒符傳好運 Live Photo</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>台灣奧美</td>
                                <td>KIRIN 人生的一番搾</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>創異數位</td>
                                <td>一句話解嗨情人節</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳展示廣告創意獎</td>
                                <td>我是大衛廣告</td>
                                <td>潮Buy中元節–鬼怪「直直」來 鬼手 Teaser</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>創異數位</td>
                                <td>心臟衰竭長輩圖</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="6">最佳長影片創意獎</td>
                                <td>台灣電通</td>
                                <td>一念</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>新極現廣告</td>
                                <td>Wow Girl 女力實驗室</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>雪芃廣告</td>
                                <td>不怎麼樣的履歷</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>智威湯遜</td>
                                <td>阿公的電視機</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>台灣奧美</td>
                                <td>比手機重要的事</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>黃禾廣告</td>
                                <td>BenQ 做個戀家的人系列</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>最佳短影片創意獎</td>
                                <td>智威湯遜</td>
                                <td>Doritos – For the BOLD 鬼月系列試膽影片</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="3">最佳互動影片創意獎</td>
                                <td>台灣奧美</td>
                                <td>全聯中元祭</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>台灣電通</td>
                                <td>小學沒教的事</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>電通國華</td>
                                <td>禮坊 VR 婚禮</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳使用者體驗UX創意獎</td>
                                <td>電通國華</td>
                                <td>禮坊 VR 婚禮</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>永慶房產</td>
                                <td>永慶房仲網「買方服務」看屋細節一手掌握</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>演鏡互動創意</td>
                                <td>曼巴意志挑戰</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="4">最佳活動網站及APP創意獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>陳綺貞《時間的歌》聲音採集計畫</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>安索帕台灣</td>
                                <td>深夜理髮院</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>台灣奧美</td>
                                <td>Mercedes-AMG 解放你的狂野靈魂</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>偉視捷</td>
                                <td>茶尋味 微茶道</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳企業網站及APP創意獎</td>
                                <td>台灣奧美</td>
                                <td>華康字型官方網站</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>親子天下</td>
                                <td>親子天下故事有聲書 APP</td>
                                <td>銅</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">創新應用技術類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳ARVR應用獎</td>
                                <td>永慶房產</td>
                                <td>永慶房產集團「MR智能生活」帶您身入未來</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>米蘭營銷策劃</td>
                                <td>海尼根現場玩樂團</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>電通國華</td>
                                <td>禮坊 VR 婚禮</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳網站技術應用獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>陳綺貞《時間的歌》聲音採集計畫</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳廣告技術獎</td>
                                <td>安索帕台灣</td>
                                <td>極限+1</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>安索帕台灣</td>
                                <td>克蘭詩超級小幫手</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>我是大衛廣告</td>
                                <td>潮 Buy 中元節－燒符傳好運 Live Photo</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳互動裝置應用獎</td>
                                <td>演鏡互動創意</td>
                                <td>NIKE TRIAL ZONE</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>米蘭營銷策劃</td>
                                <td>海尼根現場玩樂團</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳數位服務體驗應用獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>海尼根現場玩樂團</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>米蘭營銷策劃</td>
                                <td>『HOSPITAL 2025 PROJECT』未來醫院體驗館</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>演鏡互動創意</td>
                                <td>NIKE TRIAL ZONE</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳數據應用獎</td>
                                <td>安索帕台灣</td>
                                <td>極限+1</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>最佳IOT應用獎</td>
                                <td colspan="3">從缺</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳AI應用獎</td>
                                <td>安索帕台灣</td>
                                <td>克蘭詩超級小幫手</td>
                                <td>銅</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr>
                                <th colspan="5">整合行銷類</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="light">
                                <td rowspan="2">最佳社群行銷獎</td>
                                <td>台灣奧美</td>
                                <td>全聯中元祭</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>台灣奧美</td>
                                <td>深夜三點哺乳音樂會</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="3">最佳跨媒體整合行銷獎</td>
                                <td>台灣電通</td>
                                <td>一念</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>台灣奧美</td>
                                <td>全聯中元祭</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>雪芃廣告</td>
                                <td>Be A Giver Campaign</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td rowspan="3">最佳數位平台整合行銷獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>陳綺貞《時間的歌》聲音採集計畫</td>
                                <td>金</td>
                            </tr>
                            <tr class="light">
                                <td>我是大衛廣告</td>
                                <td>潮 Buy 中元節</td>
                                <td>銀</td>
                            </tr>
                            <tr class="light">
                                <td>雪芃廣告</td>
                                <td>魚翅相剋圖</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="4">最佳內容行銷獎</td>
                                <td>雪芃廣告</td>
                                <td>Be A Giver – 感謝先生篇</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>新極現廣告</td>
                                <td>Wow Girl 女力實驗室</td>
                                <td>金</td>
                            </tr>
                            <tr class="gray">
                                <td>台灣奧美</td>
                                <td>深夜三點哺乳音樂會</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>米蘭營銷策劃</td>
                                <td>只要你長大 – 新生兒照護募款計畫</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>最佳程序化行銷獎</td>
                                <td>塔圖科技</td>
                                <td>Lativ 程序化操作</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td rowspan="2">最佳行動行銷獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>陳綺貞《時間的歌》聲音採集計畫</td>
                                <td>銀</td>
                            </tr>
                            <tr class="gray">
                                <td>我是大衛廣告</td>
                                <td>潮 Buy 中元節</td>
                                <td>銅</td>
                            </tr>
                            <tr class="light">
                                <td>最佳策展行銷獎</td>
                                <td>台灣奧美</td>
                                <td>深夜三點哺乳音樂會</td>
                                <td>銅</td>
                            </tr>
                            <tr class="gray">
                                <td>最佳品牌電商行銷獎</td>
                                <td colspan="3">從缺</td>
                            </tr>
                            <tr class="light">
                                <td>最佳O2O行銷獎</td>
                                <td>電通國華</td>
                                <td>禮坊 VR 婚禮</td>
                                <td>銅</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <tbody>
                            <tr>
                                <th>獎項名稱</th>
                                <th style="min-width:65px">公司名稱</th>
                                <th>作品名稱-篇名</th>
                                <th>獎項</th>
                            </tr>
                            <tr class="bigPrize">
                                <td>全場大獎</td>
                                <td>米蘭營銷策劃</td>
                                <td>陳綺貞《時間的歌》聲音採集計畫</td>
                                <td></td>
                            </tr>
                            <tr class="bigPrize">
                                <td>評審團特別獎</td>
                                <td>安索帕台灣</td>
                                <td>家族的秘密</td>
                                <td></td>
                            </tr>
                            <tr class="bigPrize">
                                <td>年度創新技術獎</td>
                                <td colspan="3">從缺</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
	asyncData({ redirect }) {},
	head() {
		return {
			title: '歷年得獎作品',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {
            show2019: true,
            show2018: false,
            show2017: false
        };
	},
    methods: {},
    
	created() {},

	mounted() {},
};
</script>

<style scoped>
@import '~/assets/css/awardList.css';
</style>

