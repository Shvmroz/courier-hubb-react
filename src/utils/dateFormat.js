export const getTimeandDateAgo = (date) => {
    const now = new Date();
    const msgDate = new Date(date);
    const seconds = Math.floor((now - msgDate) / 1000);
  
    if (seconds < 60) return "just now"; // <1 min
    else if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`; // <1 hr
    else if (seconds < 86400) {
      return msgDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    else if (seconds < 604800) {
      const days = Math.floor(seconds / 86400);
      return days === 1 ? "1 day ago" : `${days} days ago`;
    }
    else {
      return msgDate.toLocaleDateString();
    }
  };
  