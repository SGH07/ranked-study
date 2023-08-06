let timerId = null; 
let startTime = null; 
let elapsedTime = 0; 
let isFreeSeason = true; 
let rankSeasonCount = 0; 
let lastStatusChangeTime = 0; 

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);


function updateTimer() {
  if (startTime === null) {

    return;
  }

  var currentTime = Date.now();
  elapsedTime = currentTime - startTime; 

  var minutesForTier = Math.floor((elapsedTime % 3600000) / 60000);
  
  var hours = Math.floor(elapsedTime / 3600000);
  var minutes = Math.floor((elapsedTime % 3600000) / 60000);
  var seconds = Math.floor((elapsedTime % 60000) / 1000);

  var formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timer').textContent = `시간: ${formattedTime}`;

  if (minutesForTier >= 25) {
    document.getElementById('status').textContent = '현재 상태: 프리 시즌';
    document.getElementById('nowtier').textContent = '';
    minutesForTier = 0
    setTimeout(updateTier, 300000);
    minutesForTier = 0
    rankSeasonCount++;
    document.getElementById('status').textContent = `현재 상태: 랭크 시즌 (진입 ${rankSeasonCount}회)`;
    return;
    }

  timerId = requestAnimationFrame(updateTimer);
}

function updateTier() {
  if (rankSeasonCount === 1) {
    document.getElementById('tier').src = 'iron.png';
    document.getElementById('tier').alt = '아이언 이미지';
    document.getElementById('nowtier').textContent = '현재 티어: 아이언';
  } else if (rankSeasonCount === 2) {
    document.getElementById('tier').src = 'bronze.png';
    document.getElementById('tier').alt = '브론즈 이미지';
    document.getElementById('nowtier').textContent = '현재 티어: 브론즈';
  } else if (rankSeasonCount === 3) {
    document.getElementById('tier').src = 'silver.png';
    document.getElementById('tier').alt = '실버 이미지';
    document.getElementById('nowtier').textContent = '현재 티어: 실버';
  } else if (rankSeasonCount === 4) {
    document.getElementById('tier').src = 'gold.png';
    document.getElementById('tier').alt = '골드 이미지';
    document.getElementById('nowtier').textContent = '현재 티어: 골드';
  } else if (rankSeasonCount === 5) {
    document.getElementById('tier').src = 'platinum.png';
    document.getElementById('tier').alt = '플레 이미지';
    document.getElementById('nowtier').textContent = '현재 티어: 플레티넘';
  } else if (rankSeasonCount === 6) {
    document.getElementById('tier').src = 'diamond.png';
    document.getElementById('tier').alt = '다이아 이미지';
    document.getElementById('nowtier').textContent = '현재 티어: 다이아몬드';
  } else if (rankSeasonCount === 7) {
    document.getElementById('tier').src = 'master.png';
    document.getElementById('tier').alt = '마스터 이미지';
    document.getElementById('nowtier').textContent = '현재 티어: 마스터';
  } else if (rankSeasonCount === 8) {
    document.getElementById('tier').src = 'grandmaster.png';
    document.getElementById('tier').alt = '그마 이미지';
    document.getElementById('nowtier').textContent = '현재 티어: 그랜드마스터';
  } else if (rankSeasonCount === 9) {
    document.getElementById('tier').src = 'challenger.png';
    document.getElementById('tier').alt = '챌 이미지';
    document.getElementById('nowtier').textContent = '현재 티어: 챌린저';
  } else if (rankSeasonCount === 10) {
    document.getElementById('tier').src = 'lck.png';
    document.getElementById('tier').alt = 'LCK 이미지';
    document.getElementById('nowtier').textContent = '현재 티어: LCK';
  } else if (rankSeasonCount === 11) {
    document.getElementById('tier').src = 'worlds.png';
    document.getElementById('tier').alt = 'Worlds 이미지';
    document.getElementById('nowtier').textContent = '현재 티어: Worlds';
  }
}

function startTimer() {
  if (startTime === null) {
    startTime = Date.now() - elapsedTime;
    lastStatusChangeTime = startTime;
    updateTimer();
  }
}

function stopTimer() {
  if (timerId !== null) {
    cancelAnimationFrame(timerId);
    timerId = null;
    startTime = null;
  }
}