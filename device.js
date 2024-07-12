function loadDeviceSpecificCSS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // 简化版的设备检测逻辑，实际应用中可能需要更复杂的逻辑
    if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        // 加载移动设备的CSS
        loadCSS('/mobile.css');
        loadCSS('/login_mobile.css');
        hideElementsByClass('desktop');
        showElementsByClass('mobile');
    } else {
        // 加载桌面设备的CSS
        loadCSS('/desktop.css');
        loadCSS('/login_desktop.css');
        hideElementsByClass('mobile');
        showElementsByClass('desktop');
    }
}

function loadCSS(url) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.onload = function() {
        document.getElementById('normal').style.display = 'block';
    }
    head.appendChild(link);
}

function loadElementsById() {
    document.getElementById('normal').style.display = 'block';
}

function hideElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}

function showElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'flex';
    }
}

// 当页面加载完成时，调用该函数
document.addEventListener('DOMContentLoaded', loadDeviceSpecificCSS);