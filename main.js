console.log("欢迎使用 ChromeHome 浏览器主页");

window.onload = function() {
    document.getElementById('search-input').focus();
    document.getElementById('search-button').addEventListener('click', function() {
        var selectedOption = document.getElementById('select-box').value;
        search(selectedOption);
    });

    document.getElementById('select-box').addEventListener('change', function() {
        document.getElementById('search-input').focus();
    });

    document.getElementById('search-input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            var selectedOption = document.getElementById('select-box').value;
            search(selectedOption);
        }
    });
};

function search(selectedOption) {
    var searchInput = document.getElementById('search-input').value;
    if (selectedOption === 'option1') {
        window.open('https://www.baidu.com/s?wd=' + searchInput, '_blank');
    } else if (selectedOption === 'option2') {
        window.open('https://www.bing.com/search?q=' + searchInput, '_blank');
    } else if (selectedOption === 'option3') {
        window.open('https://www.google.com/search?q=' + searchInput, '_blank');
    } else if (selectedOption === 'option4') {
        window.open('https://search.gitee.com/?skin=rec&type=repository&q=' + searchInput, '_blank');
    } else if (selectedOption === 'option5') {
        window.open('https://github.com/search?q=' + searchInput, '_blank');
    } else if (selectedOption === 'option6') {
        window.open('https://search.bilibili.com/all?keyword=' + searchInput, '_blank');
    } else if (selectedOption === 'option7') {
        window.open('https://www.douyin.com/search/' + searchInput, '_blank');
    } else if (selectedOption === 'option8') {
        window.open('https://so.csdn.net/so/search?urw=&q=' + searchInput, '_blank');
    } else if (selectedOption === 'option9') {
        window.open('https://fsoufsou.com/search?q=' + searchInput, '_blank');
    } else if (selectedOption === 'option10') {
        window.open('https://yandex.com/search/?text=' + searchInput, '_blank');
    } else if (selectedOption === 'option11') {
        window.open('https://duckduckgo.com/?q=' + searchInput, '_blank');
    } else if (selectedOption === 'option12') {
        window.open('https://gogo.webbillion.cn/search?q=' + searchInput, '_blank');
    } else if (selectedOption === 'option13') {
        window.open('https://searx.work/search?q=' + searchInput, '_blank');
    } else if (selectedOption === 'option14') {
        window.open('https://fanyi.baidu.com/#en/zh/' + searchInput, '_blank');
    } else {
        alert('请选择一个有效的搜索选项！');
    }
}

// 通过Bing背景API获取每日不同的背景照片
var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
fetch("https://raw.onmicrosoft.cn/Bing-Wallpaper-Action/main/data/zh-CN_all.json", requestOptions)
    .then(response => response.text())
    .then(result => {
        try {
            var data = JSON.parse(result);
            var data_message = data.message;
            if (data_message === "ok") {
                var backgroundLink = data.data;
                var backgroundLink2 = backgroundLink[0]
                var title_data = backgroundLink2.title //照片名称
                var copyright_data = backgroundLink2.copyright // 照片出处
                var Url_data = backgroundLink2.url // 照片链接
                var Url = "http://cn.bing.com" + Url_data
                var bodyElement = document.body;
                bodyElement.style.backgroundImage = "url('" + Url + "')";
                bodyElement.style.backgroundSize = "cover";  //覆盖整个元素区域[可选]
                var link = document.getElementById("BingAPI_Url");
                link.href = Url;
                link.title = title_data + " - " + copyright_data;
                console.log("照片名称：" + title_data) // 输出照片名称
                console.log("照片出处：" + copyright_data) // 输出照片出处
                console.log("照片链接：" + Url) // 输出照片链接
            }
        } catch (error) {
            console.log('Invalid JSON', error);
        }
    })
    .catch(error => console.log('error', error));