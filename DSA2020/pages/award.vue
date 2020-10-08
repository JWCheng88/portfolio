<template>
    <div class="wrapper">
        <div class="head head_award">
            <div class="tittle">
                <span>獎項介紹</span> <!--<span>{{this.$i18n.locale}}</span> -->
                <span class="sub">AWARDS INTRODUCTION</span>
            </div>
        </div>
        <main class="award">
            <div class="award-submenu">
                <div class="award-submenu2">
                    <a class="btn-award-sub" href="award#groupA">
                        <span class="txt">A組</span>
                        <span class="arrow"></span>
                    </a>
                    <a class="btn-award-sub" href="award#groupB">
                        <span class="txt">B組</span>
                        <span class="arrow"></span>
                    </a>
                    <a class="btn-award-sub" href="award#groupC">
                        <span class="txt">C組</span>
                        <span class="arrow"></span>
                    </a>
                    <a class="btn-award-sub" href="award#groupD">
                        <span class="txt">D組</span>
                        <span class="arrow"></span>
                    </a>
                    <a class="btn-award-sub" href="award#annual">
                        <span class="txt">年度獎</span>
                        <span class="arrow"></span>
                    </a>
                </div>
            </div>
            <div class="award-content-wrap">
                <div class="award-content">
                    <h5>關於DSA數位奇點獎</h5>
                    <p>數位經濟帶動著全球產業的格局翻轉，我們深刻感受到環境變化帶來的挑戰與機會。創新科技的大浪小浪不斷反覆地拍打著昨天的行銷模式，產業發展樣貌也越來越多樣化，行銷產業的服務與價值也正在重塑。自2017年起所舉辦的「數位奇點獎」(Digital Singularity Awards)正是一個擴大影響力與引領未來的起點。</p><br>
                    <p>「奇點」(Singularity)一詞最早出現在天文物理領域，由知名天文物理學家霍金於1970年代所提出，概念指的是，在宇宙產生之初，由爆炸而形成宇宙的那一點，後來美國未來學家、現為Google 技術總監庫茲韋爾（Ray Kurzweil）在其著作《奇點已近》一書中應用奇點概念解釋技術發展，他指出：科技發展到一定程度就會在很短的時間內發生極大的進步，而當此轉捩點來臨時，將會改變整個社會形態。</p><br>
                    <p>我們期待透過獎項做為一個平台，讓台灣優秀的行銷人與優秀的作品，能夠發揮更正面的影響力，幫助我們去不斷地檢視台灣數位行銷產業發展的成熟度，並追尋影響接下來的方向與指標，我們相信，我們正在一條正確的道路上前進。</p>
                </div>
                <div class="award-content">
                    <h5>獎項類別及定義</h5>
                    <h6 class="group">A組</h6>
                    <div class="grey-bg">
                        <ul>
                            <div class="award-item">
                                <div class="img"><img src="~assets/svg/award_01.svg"></div>
                                <div class="right">
                                    <div class="tittle">影片創意類</div>
                                    <div class="item-spec">
                                        <ul>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupA-1-1">最佳影片創意獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupA-1-2">最佳短片創意獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupA-1-3">最佳互動影片創意獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupA-1-4">最佳社群影片創意獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupA-1-5">最佳科技運用影片創意獎</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="award-item">
                                <div class="img"><img src="~assets/svg/award_02.svg"></div>
                                <div class="right">
                                    <div class="tittle">品牌體驗與促動行銷類</div>
                                    <div class="item-spec">
                                        <ul>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupA-2-1">最佳通路服務體驗行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupA-2-2">最佳數位平台整合行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupA-2-3">最佳跨媒體整合行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupA-2-4">最佳數位廣告創意行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupA-2-5">最佳活動網站行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupA-2-6">最佳企業網站行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupA-2-7">最佳策展行銷獎</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <h6 class="group">B組</h6>
                    <div class="grey-bg">
                        <ul>
                            <div class="award-item">
                                <div class="img"><img src="~assets/svg/award_03.svg"></div>
                                <div class="right">
                                    <div class="tittle">行動行銷類</div>
                                    <div class="item-spec">
                                        <ul>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupB-1-1">最佳APP及行動網路行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupB-1-2">最佳遊戲及遊戲置入行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupB-1-3">最佳適地性促動行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupB-1-4">最佳行動廣告行銷獎</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="award-item">
                                <div class="img"><img src="~assets/svg/award_04.svg"></div>
                                <div class="right">
                                    <div class="tittle">電子商務行銷類</div>
                                    <div class="item-spec">
                                        <ul>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupB-2-1">最佳電子商務行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupB-2-2">最佳O2O行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupB-2-3">最佳顧客旅程及介面設計獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupB-2-4">最佳精準數據應用行銷獎</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="award-item">
                                <div class="img"><img src="~assets/svg/award_05.svg"></div>
                                <div class="right">
                                    <div class="tittle">數據創新類</div>
                                    <div class="item-spec">
                                        <ul>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupB-3-1">最佳數據洞察創新獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupB-3-2">最佳程序化行銷創新獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupB-3-3">最佳數據科技創新獎</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <h6 class="group">C組</h6>
                    <div class="grey-bg">
                        <ul>
                            <div class="award-item">
                                <div class="img"><img src="~assets/svg/award_06.svg"></div>
                                <div class="right">
                                    <div class="tittle">娛樂行銷類</div>
                                    <div class="item-spec">
                                        <ul>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupC-1-1">最佳內容娛樂獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupC-1-2">最佳音樂娛樂獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupC-1-3">最佳遊戲/置入娛樂獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupC-1-4">最佳運動娛樂獎</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="award-item">
                                <div class="img"><img src="~assets/svg/award_07.svg"></div>
                                <div class="right">
                                    <div class="tittle">社群及影響者行銷類</div>
                                    <div class="item-spec">
                                        <ul>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupC-2-1">最佳影響者行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupC-2-2">最佳社群經營行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupC-2-3">最佳品牌合作夥伴行銷獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupC-2-4">最佳社群內容行銷獎</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <h6 class="group">D組</h6>
                    <div class="grey-bg">
                        <ul>
                            <div class="award-item">
                                <div class="img"><img src="~assets/svg/award_08.svg"></div>
                                <div class="right">
                                    <div class="tittle">數位技術類</div>
                                    <div class="item-spec">
                                        <ul>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupD-1-1">最佳使用者體驗（UX）獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupD-1-2">最佳loT 應用獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupD-1-3">最佳AI 應用獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupD-1-4">最佳體驗技術運用獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupD-1-5">最佳數位技術應用獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupD-1-6">最佳互動體驗裝置與技術運用獎</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="award-item">
                                <div class="img"><img src="~assets/svg/award_09.svg"></div>
                                <div class="right">
                                    <div class="tittle">創新類</div>
                                    <div class="item-spec">
                                        <ul>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupD-2-1">最佳產品創新獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupD-2-2">最佳商業轉型創新獎</a>
                                            </li>
                                            <li>
                                                <a class="item-spec-btn" href="award#groupD-2-3">最佳科技創新獎</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <h6 class="group">年度獎</h6>
                    <div class="grey-bg">
                        <ul>
                            <!-- <div class="award-item">
                                <div class="img"><img src="~assets/svg/award_10.svg"></div>
                                <div class="right year">
                                    <div class="tittle">年度創新</div>
                                </div>
                            </div> -->
                            <div class="award-item">
                                <div class="img"><img src="~assets/svg/award_11.svg"></div>
                                <div class="right year">
                                    <div class="tittle">全場大獎</div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="award-content">
                    <h5>獎項介紹</h5>
                    <p>創新，就是因應產業生態演進做出改變；創新，就是要理解國際脈動，才能定義未來！「數位奇點獎」獎項於2019年進行獎項調整，由2018年原有四大類，更動為九大類別，並分為四組進行評選，以回應市場的需求。我們期許，透過這個獎項，讓資源可以對接，讓創新思維得以交流。</p>
                </div>
                <a name="digital-creative"></a>
                <div class="award-content">
                    <h5 id="groupA">A組</h5>
                    <p>評分標準：創意40%、策略目標20%、執行20％、影響效果20%</p>
                    <div class="category">
                        <div class="subtitle">
                            <h6>影片創意類</h6>
                        </div>
                        <div class="award-detail">
                            <h6 id="groupA-1-1">最佳影片創意獎</h6>
                            <p>在數位媒體上充分發揮創意的行銷影片</p>
                            <h6 id="groupA-1-2">最佳短影片創意獎</h6>
                            <p>15 秒（含）以下，在數位媒體上充分發揮創意的行銷影片。</p>
                            <h6 id="groupA-1-3">最佳互動影片創意獎</h6>
                            <p>於影片上運用數位媒體「互動」的特性，將創意展現於數位環境，透過與消費者的互動，達成最佳溝通效果。</p>
                            <h6 id="groupA-1-4">最佳社群影片創意獎</h6>
                            <p>品牌善用社群平台的廣告行銷，吸引廣泛且分散的客群，並增加與客群的雙向互動，創造最佳溝通效益。</p>
                            <h6 id="groupA-1-5">最佳科技運用影片創意獎</h6>
                            <p>應用360/VR/AR等數位科技並發揮其影音效果，創造互動體驗效果，引起受眾興趣，完成訊息傳遞。</p>
                        </div>
                    </div>
                    <div class="category">
                        <div class="subtitle">
                            <h6>品牌體驗與促動行銷類</h6>
                        </div>
                        <div class="award-detail">
                            <h6 id="groupA-2-1">最佳通路服務體驗行銷獎</h6>
                            <p>企業或品牌於實體或虛擬通路，整合數位化技術、設備、環境規劃，創新體驗流程，提供目標受眾實際體驗感受，以達到品牌最佳行銷目的。</p>
                            <h6 id="groupA-2-2">最佳數位平台整合行銷獎</h6>
                            <p>整合運用至少兩種以上不同形態的數位媒體、平台及工具等，以達成整合行銷活動目的。</p>
                            <h6 id="groupA-2-3">最佳跨媒體整合行銷獎</h6>
                            <p>整合數位及非數位跨媒體行銷活動，包含但不限於傳統媒體、數位平台、互動裝置、實體空間、AR/VR、與IoT 等，以達成整合行銷活動目的。</p>
                            <h6 id="groupA-2-4">最佳數位廣告創意行銷獎</h6>
                            <p>在數位媒體上所展示，充分發揮創意的橫幅廣告、插播式廣告、蓋版廣告、原生廣告等展示型廣告。</p>
                            <h6 id="groupA-2-5">最佳活動網站行銷獎</h6>
                            <p>專為品牌或產品的單一行銷或廣告活動目的而製作的短期創意網站。</p>
                            <h6 id="groupA-2-6">最佳企業網站行銷獎</h6>
                            <p>特定單一企業之企業形象、品牌推廣、產品行銷、客戶服務或商業運營而規劃設計的網站。</p>
                            <h6 id="groupA-2-7">最佳策展行銷獎</h6>
                            <p>在數位或實體空間，運用數位技術策劃具主題性的活動或展覽，協助品牌或企業發展創新行銷活動，提供活動的體驗、參與、擴散與成效。</p>
                        </div>
                    </div>
                    <h5 id="groupB">B組</h5>
                    <p>評分標準：策略目標30%、解決方案與執行30%、轉換價值20%、創新性20%</p>
                    <div class="category">
                        <div class="subtitle">
                            <h6>行動行銷類</h6>
                        </div>
                        <div class="award-detail">
                            <h6 id="groupB-1-1">最佳APP及行動網路行銷獎</h6>
                            <p>利用手機應用程式或行動網路（Mobile App/ Mobile Web），協助品牌或企業發展創新行銷廣告，提高活動的體驗、參與、效益與成效。</p>
                            <h6 id="groupB-1-2">最佳遊戲及遊戲置入行銷獎</h6>
                            <p>針對行銷目的製作手機遊戲，或將廣告訊息置入於手機遊戲中，協助品牌或企業提高活動的體驗、參與、效益與成效。</p>
                            <h6 id="groupB-1-3">最佳適地性促動行銷獎</h6>
                            <p>利用行動,連網或藍芽技術 (LBS, Beacon)，強化地域性的精準溝通，突破以往行銷工具限制，達成消費者美好的品牌推廣體驗。</p>
                            <h6 id="groupB-1-4">最佳行動廣告行銷獎</h6>
                            <p>針對行動環境，透過手機或平板電腦等裝置，協助品牌或企業發展創新行銷廣告，提高活動的體驗、參與、效益與成效。</p>
                        </div>
                    </div>
                    <div class="category">
                        <div class="subtitle">
                            <h6>電子商務行銷類</h6>
                        </div>
                        <div class="award-detail">
                            <h6 id="groupB-2-1">最佳電子商務行銷獎</h6>
                            <p>凡品牌透過電子商務平台的廣告行銷或電商平台的自身促銷活動，及銷售與服務流程中，創造良好的客戶體驗與認知，促進銷售目的。</p>
                            <h6 id="groupB-2-2">最佳O2O行銷獎</h6>
                            <p>有效使用數位工具 (包含社交/社群平台或對話式商務軟體平台) ，創造線上線下雙向導流，有效整合與判讀行為資料，彌補消費者旅程缺口。</p>
                            <h6 id="groupB-2-3">最佳顧客旅程及介面設計獎</h6>
                            <p>注重操作介面、使用情境、用戶需求且符合實用性、有效性之特點，包含使用時相關的行為、態度與情緒，產生有意義、有價值的交流，以改善在線購物體驗並增加銷售。/VR、與IoT 等，以達成整合行銷活動目的。</p>
                            <h6 id="groupB-2-4">最佳精準數據應用行銷獎</h6>
                            <p>使用連網設備的數據準確預測和推薦，提供及時和相關的訊息，傳遞產品/服務的廣告素材。(包含CRM資料庫)</p>
                        </div>
                    </div>
                    <div class="category">
                        <div class="subtitle">
                            <h6>數據創新類</h6>
                        </div>
                        <div class="award-detail">
                            <h6 id="groupB-3-1">最佳數據洞察創新獎</h6>
                            <p>使用數據訊號/策劃數據洞察力結合廣告形式，與特定受眾更實時進行有效的行銷訊息溝通，以達到最大成效。</p>
                            <h6 id="groupB-3-2">最佳程序化行銷創新獎</h6>
                            <p>有效運用程式化平台及工具，制定良好購買及競價策略，充分運用數據及優化流程，以達到最大成效。參賽作品應展示實時數據如何增強與目標受眾的創意為程序化行銷做出貢獻，或用於促進與消費者的持續關係，增加品牌在市場中的地位。</p>
                            <h6 id="groupB-3-3">最佳數據科技創新獎</h6>
                            <p>應用創新數據技術，如 : 數據整合、DMP、DSP、SSP、CDP等改進廣告成效。/VR、與IoT 等，以達成整合行銷活動目的。</p>
                        </div>
                    </div>
                    <h5 id="groupC">C組</h5>
                    <p>評分標準：策略目標30%、影響效果30%、創新創意20％、執行20%</p>
                    <div class="category">
                        <div class="subtitle">
                            <h6>娛樂行銷類</h6>
                        </div>
                        <div class="award-detail">
                            <h6 id="groupC-1-1">最佳內容娛樂獎</h6>
                            <p>為品牌或企業的數位平台創建的最佳原創內容，包括品牌、影音或任何其他旨在娛樂以及增加品牌互動和意識的內容。</p>
                            <h6 id="groupC-1-2">最佳音樂娛樂獎</h6>
                            <p>利用原創音樂或改編音樂將廣告訊息置入，協助品牌或企業提高活動的體驗、參與、效益與成效。</p>
                            <h6 id="groupC-1-3">最佳遊戲/置入娛樂獎</h6>
                            <p>製作互動遊戲或將廣告訊息置入於遊戲中，協助品牌或企業提高活動的體驗、參與、效益與成效。(包括實體活動及各類平台) <br>
                                <!-- <span>*此類別入圍的前五名需於決審評審會議時提供設備讓評審實際體驗</span></p> -->
                            <h6 id="groupC-1-4">最佳運動娛樂獎</h6>
                            <p>透過運動娛樂（包括電競）為核心的線上線下活動，進行互動、直播或影音內容，旨在擴大品牌信息並增加與觀眾的互動。</p>
                        </div>
                    </div>
                    <div class="category">
                        <div class="subtitle">
                            <h6>社群與影響者行銷類</h6>
                        </div>
                        <div class="award-detail">
                            <h6 id="groupC-2-1">最佳影響者行銷獎</h6>
                            <p>在不同數位媒體或平台上，利用具有社群影響力的意見領袖之操作，達到目標受眾對於品牌或產品的關注與行動。參賽作品應該展示KOL如何在活動的構思或執行中發揮重要作用，以及他們如何為企業帶來利益。</p>
                            <h6 id="groupC-2-2">最佳社群經營行銷獎</h6>
                            <p>在不同數位媒體或平台上，為了增進品牌好感度，而讓品牌社群或是以社群媒體為基礎的社群投入、形成並加以維持的社會性活動，或使用影音直播，創造良好的客戶體驗與認知，提升品牌認知，促進銷售目的。社群活動、即時回應，以及針對主動/非主動使用者所做的目標性溝通也將是評審重點。</p>
                            <h6 id="groupC-2-3">最佳品牌合作夥伴行銷獎</h6>
                            <p>品牌大使或社群影響者等合作夥伴，藉由社群平台上與目標受眾者的互動，為品牌帶來雙方互利的良好實際成效。</p>
                            <h6 id="groupC-2-4">最佳社群內容行銷獎</h6>
                            <p>在數位媒體或平台上，透過原生內容、專題製作等方式，創造與目標受眾需求相關，並與品牌精神契合的行銷內容，驅動目標受眾的關注與行動。</p>
                        </div>
                    </div>
                    <h5 id="groupD">D組</h5>
                    <p>評分標準：策略目標30%、解決方案與執行30%、轉換價值20%、創新性20%</p>
                    <div class="category">
                        <div class="subtitle">
                            <h6>數位技術類</h6>
                        </div>
                        <div class="award-detail">
                            <h6 id="groupD-1-1">最佳使用者體驗（UX）獎</h6>
                            <p>數位作品中，注重操作介面、使用情境、用戶需求且符合實用性、有效性之特點，包含使用時相關的行為、態度與情緒，產生有意義、有價值的交流。
                                <br><span>*此類別入圍的前五名需於決審評審會議時至現場簡報</span></p>
                            <h6 id="groupD-1-2">最佳loT 應用獎</h6>
                            <p>有效運用物連網技術及設備(包含穿戴裝置)，促進人與物、物與物之間發展有意義的關係，創新運用於行銷、廣告、創意或營運的發展。
                                <br><span>*此類別入圍的前五名需於決審評審會議時至現場簡報</span></p>
                            <h6 id="groupD-1-3">最佳AI 應用獎</h6>
                            <p>在行銷活動中，運用人工智慧技術，如深度學習、機器學習、自動化決策、自然語言或聊天機器人等，創新運用於行銷、廣告、創意、營運或媒體投放的發展。
                                <br><span>*此類別入圍的前五名需於決審評審會議時至現場簡報</span></p>
                            <h6 id="groupD-1-4">最佳體驗技術運用獎</h6>
                            <p>運用VR、AR、MR等數位科技技術，為目標受眾創造最佳體驗、互動與參與，達成最佳品牌溝通效果。
                                <br><span>*此類別入圍的前五名需於決審評審會議時至現場簡報</span></p>
                            <h6 id="groupD-1-5">最佳數位技術應用獎</h6>
                            <p>結合數位創意與科技，透過API延伸原生創意，強化對話性商務適人、適時、適地的使用情境，提升行銷成效與顧客服務品質。或是透過行動應用、雲端運算、區塊鍊等各類新興科技供技術解決方案，實現行銷目的。
                                <br><span>*此類別入圍的前五名需於決審評審會議時至現場簡報</span></p>
                            <h6 id="groupD-1-6">最佳互動體驗裝置與技術運用獎</h6>
                            <p>在行銷活動中，創新運用互動體驗裝置與技術，提高行銷活動的整體體驗，參與度與擴散性，達到最佳品牌溝通效果。
                                <br><span>*此類別入圍的前五名需於決審評審會議時至現場簡報</span></p>
                        </div>
                    </div>
                    <div class="category">
                        <div class="subtitle">
                            <h6>創新類</h6>
                        </div>
                        <div class="award-detail">
                            <h6 id="groupD-2-1">最佳產品創新獎</h6>
                            <p>能因應產業和消費趨勢並結合數位科技所開發的創新產品或服務，而成為銷售標的或企業獲利來源者。
                                <br><span>*此類別入圍的前五名需於決審評審會議時至現場簡報</span></p>
                            <h6 id="groupD-2-2">最佳商業轉型創新獎</h6>
                            <p>應對市場變動及挑戰而創建或開發的創新解決方案，這些技術或戰略轉型解決方案對業務模式、客戶體驗產生實際影響，並改變業務運營方式。
                                <br><span>*此類別入圍的前五名需於決審評審會議時至現場簡報</span></p>
                            <h6 id="groupD-2-3">最佳科技創新獎</h6>
                            <p>運用任何科技的創新運用，有效提升產品效能和用戶體驗。
                                <br><span>*此類別入圍的前五名需於決審評審會議時至現場簡報</span></p>
                        </div>
                    </div>
                    <div id="annual">
                        <h5>年度獎</h5>
                        <h6>類別大獎</h6>
                        <p>從九大類別各項金獎中，選出一名，頒予獎座。</p>
                        <!-- <h6>年度創新大獎</h6>
                        <p>從創新應用技術類各項金銀銅獎作品中，選出一名，頒予獎座乙座。</p> -->
                    </div>
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
			title: '獎項介紹',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {};
	},
	methods: {},
	created() {},

	mounted() {},
};
</script>

<style scoped>
@import '~/assets/css/award.css';

h6.group{
    margin-bottom: 10px;
}

@media screen and (max-width: 400px) {
	.award-submenu2 {
		width: 300%;
	}
}
@media screen and (min-width: 600px) {
	.award-submenu {
		overflow: hidden;
	}
	.btn-award-sub {
		width: 85px;
	}
	.btn-award-sub .txt {
		font-size: 11px;
	}
	.btn-award-sub .arrow {
		display: none;
	}
}
@media screen and (min-width: 660px) {
	.btn-award-sub {
		width: 100px;
	}
	.btn-award-sub .txt {
		font-size: 13px;
	}
}
@media screen and (min-width: 768px) {
	.btn-award-sub {
		width: 110px;
	}
	.btn-award-sub .txt {
		font-size: 14px;
	}
}
@media screen and (min-width: 1024px) {
	.btn-award-sub {
		width: 150px;
	}
	.btn-award-sub .arrow {
		display: inline-block;
	}
	.btn-award-sub .txt {
		font-size: 16px;
	}
}
</style>

