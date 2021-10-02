const replacers = {
  '&': '&amp',
  '"': '&quot',
  '\'': '&apos',
  '<': '&lt',
  '>': '&gt'
};

const escape = function(string) {
  for (var key in replacers) {
    string = string.replaceAll(key, replacers[key]);
  }
  return string;
};

// console.log(escape('this is a "<script>document.getElementbyId&</script>");'));