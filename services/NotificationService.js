// NotificationService.js (backend)

const sendNotification = (userId, message) => {
    // Send notification to the user
    const userSocket = getUserSocket(userId);
    if (userSocket) {
      userSocket.emit('notification', message);
    }
  };
  