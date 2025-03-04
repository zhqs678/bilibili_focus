// ==UserScript==
// @name         bilibili专注模式
// @namespace    jownson
// @version      0.0.1
// @description  bilibili专注模式，屏蔽一切
// @author       jownson
// @match        https://*.bilibili.com/*
// @icon         
// @grant        none
// @license      MIT

// ==/UserScript==

(function() {
    'use strict';
    new MutationObserver(() => {

        // id以#开头，类以.开头
        var block_id_List = [
            "#biliMainHeader", //标题栏
            "#biliMainHeader", // 右侧上面标题
            "#danmukuBox",//弹幕
            "#arc_toolbar_report",
            ".video-card-ad-small",
            "#v_desc",
            "#slide_ad",
            ".recommend-list-v1",
            "#bilibili-player-placeholder-bottom",
            ".bpx-player-sending-area",
            ".video-tag-container",
            ".tag-panel",
            ".ad-report ad-floor-exp right-bottom-banner",
            ".up-panel-container"//推荐
        ];


        for (var i = 0; i < block_id_List.length; i++) {
            const bbElement = document.querySelector(block_id_List[i]);
            if (bbElement) {
                bbElement.remove();
            }
        }

        const arElement = document.querySelector("a.ad-report");//类下面的 <a> 元素：
        if (arElement) {
            arElement.remove();
        }

        // 删除播放列表下的广告
       // const rcmd_tab_v1Element = document.querySelector('.rcmd-tab');
       // if (rcmd_tab_v1Element) {
       //     rcmd_tab_v1Element.removeChild();
       // }

/*
        var app = document.getElementById("app");

        function traverseAndLog(element) {
            // console.log(element);
            var children = element.children;
            for (var i = 0; i < children.length; i++) {
                //traverseAndLog(children[i]);
                if (children[i].id == "bilibili-player-placeholder")
                {
                    children[i].remove();
                }
            }
        }
        traverseAndLog(app);
*/

    }).observe(document.querySelector('body'), {
        childList: true,
        attributes: true,
        subtree: true,
    });

})();