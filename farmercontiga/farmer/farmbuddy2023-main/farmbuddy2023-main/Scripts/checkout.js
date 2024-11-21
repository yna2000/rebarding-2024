document.querySelector("#btn").addEventListener("click", () => {
  // Existing code for getting form values...

  // Generate and send OTP
  const otp = generateOTP(); // Assume this function generates the OTP
  sendOTP(otp, phno); // Assume this function sends the OTP to the provided phone number

  // Show OTP input field
  const otpContainer = document.getElementById("otpContainer");
  otpContainer.style.display = "block";

  // Hide the loader
  document.querySelector('.spinnerContainer').style.display = 'none';
});

// Function to verify OTP
document.querySelector("#verifyOTPBtn").addEventListener("click", () => {
  const enteredOTP = document.querySelector(".otp").value;
  // Verify OTP here...
  if (enteredOTP === otp) {
    // Proceed with checkout
    // Redirect to profile page or whatever you want to do
    window.location.href = "../Profile";
  } else {
    alert("Invalid OTP. Please try again.");
  }
});
