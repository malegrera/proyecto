import dayjs from 'dayjs';
document.querySelector(".inicio1").textContent = dayjs().add(1, 'month').format('DD/MM/YYYY');
document.querySelector(".final1").textContent = dayjs().add(1, 'month').add(7, 'day').format('DD/MM/YYYY');