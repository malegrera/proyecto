
//import dayjs from 'dayjs';
//console.log(dayjs().format());
document.querySelector(".fecha").textContent = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
//document.querySelector(".inicio1").textContent = dayjs().add(1,'month').format('DD/MM/YYYY');
//document.querySelector(".final1").textContent = dayjs().add(1, 'month').add(7, 'day').format('DD/MM/YYYY');