

export function formatNumber(number: number) {
  if(number > 999 && number < 1000000){
      return (number/1000).toFixed(0) + 'k'; // convert to k for number from > 1000 < 1 million 
  } else if(number > 1000000){
      return (number/1000000).toFixed(0) + 'm'; // convert to m for number from > 1 million 
  } else if(number < 999){
      return number; // if value < 1000, nothing to do
  }
}

export function numberWithCommas(number: number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}