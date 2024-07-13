function loadDeviceSpecificCSS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // 简化版的设备检测逻辑，实际应用中可能需要更复杂的逻辑
    if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        // 加载移动设备的CSS
    } else {
        // 加载桌面设备的CSS
        document.getElementById('downmenu').style.display = 'none'
    }
}

function showMenu() {
    if (document.getElementById('downmenu').style.display === 'block') {
        document.getElementById('downmenu').style.display = 'none';
        document.getElementById('menu').style.backgroundColor = '#62b7fd'
    } else {
        document.getElementById('downmenu').style.display = 'block';
        document.getElementById('menu').style.backgroundColor = 'white'
    }
}

// 当页面加载完成时，调用该函数
document.addEventListener('DOMContentLoaded', loadDeviceSpecificCSS);