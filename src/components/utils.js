export function formatTime(date) {
  let hours = date.slice(0, 2);
  let minutes = date.slice(-5, -3);
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  // minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export function dateParser(date) {

  const months = {
    Jan: '01', Feb: '02',
    Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
  }
  date = date.split(' ')
  const day = date[2]
  const year = date[3]
  const preMonth = date[1]
  const month = months[preMonth]

  return year + '-' + month + '-' + day

}

export function timeParser (date) {
  date = date.split(' ')
  return date[date.length - 1]
}
