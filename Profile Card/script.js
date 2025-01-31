function updateTime() {
    const utcTime = document.getElementById('time');
    const now = new Date();
    utcTime.textContent = `UTC Time: ${now.toUTCString()}`;
}

updateTime();

setInterval(updateTime, 1000);