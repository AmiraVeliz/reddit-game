const DateConverter = {
    getDateAgo: (value) => {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value * 1000)) / 1000);
            if (seconds < 30) { // less than 30 seconds ago will show as 'just now'
                return 'just now';
            }
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i of Object.keys(intervals)) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0) {
                  if (counter === 1) {
                      return counter + ' ' + i + ' ago'; // singular (1 day ago)
                  } else {
                      return counter + ' ' + i + 's ago'; // plural (2 days ago)
                  }
                }
            }
        }
    }
}

export default DateConverter;
