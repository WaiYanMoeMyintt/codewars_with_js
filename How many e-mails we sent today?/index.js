function getPercentage(sent, limit) {
    // write code here
    if (sent === 0) {
      return "No e-mails sent";
    } else if (sent >= limit) {
      return "Daily limit is reached";
    } else if (limit === undefined || limit === null) {
    limit = 1000;
  } 
      const result = Math.floor((sent / limit) * 100) + "%";
      return result;
    
  }
