multiplicationTable = function(size) {
    let res = []
    
    for (i = 1; i <= size; i++) {
      let item = []
      
      for (j = 1; j <= size; j++) {
        item.push(j * i)
      }
      
      res.push(item)
    }
    
    return res
  }
  