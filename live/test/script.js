 // Close popup function
 function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
      // Show the alert
      if (confirm("Join Our Telegram Channel @AK_LIVE_OFFICE for updates.")) {
          // Redirect to the Telegram channel if 'OK' is clicked
          window.location.href = "https://t.me/AK_LIVE_OFFICE";
      } else {
          // Close the alert if 'Cancel' is clicked (do nothing)
      }
