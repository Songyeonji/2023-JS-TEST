const calendar = document.getElementById('calendar');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
const memoSection = document.getElementById('memo');
const memoText = document.getElementById('memoText');
const saveMemoButton = document.getElementById('saveMemo');


let currentYear, currentMonth;
let memos = {}; // 날짜별 메모 저장

prevMonthButton.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    createCalendar(currentYear, currentMonth);
});

nextMonthButton.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    createCalendar(currentYear, currentMonth);
});

saveMemoButton.addEventListener('click', () => {
    const memo = memoText.value;
    const date = new Date(currentYear, currentMonth, selectedDate);
    memos[date.toDateString()] = memo;
    memoSection.style.display = 'none';
    createCalendar(currentYear, currentMonth);
});

function createCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const table = document.createElement('table');
    const caption = document.createElement('caption');
    caption.textContent = `${monthNames[month]} ${year}`;
    table.appendChild(caption);

    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(dayName => {
        const th = document.createElement('th');
        th.textContent = dayName;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    currentYear = year;
    currentMonth = month;

    let selectedDate;

      // 날짜 클릭 이벤트 처리
    const dateCells = Array.from(document.querySelectorAll('td'));
    dateCells.forEach(cell => {
        cell.addEventListener('click', () => {
            const date = cell.textContent;
            if (date) {
                selectedDate = date;
                memoText.value = memos[new Date(currentYear, currentMonth, date).toDateString()] || '';
                memoSection.style.display = 'block';
            }
        });
    });

    const tbody = document.createElement('tbody');
    let day = 1;
    for (let i = 0; i < 6; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                const td = document.createElement('td');
                tr.appendChild(td);
            } else if (day <= daysInMonth) {
                const td = document.createElement('td');
                td.textContent = day;
                tr.appendChild(td);
                day++;
            }
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    calendar.innerHTML = '';
    calendar.appendChild(table);
}

const today = new Date();
currentYear = today.getFullYear();
currentMonth = today.getMonth();
createCalendar(currentYear, currentMonth);

