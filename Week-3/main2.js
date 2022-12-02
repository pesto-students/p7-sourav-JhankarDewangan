const user = {
    firstName: "Jhankar",
    lastName: "Dewangan",
    email: "jhankardew@gmail.com",
  };
  
  function greeting(text, text2) {
    console.log(`${text}, ${text2} ${this.firstName} ${this.lastName}`);
  }
  
  // Call
  greeting.call(user, "Hi", "Good morning"); // Hi, Good morning Jhankar Dewangan
  
  // Bind
  
  let helloJhankar = greeting.bind(user);
  
  helloJhankar("Hello", "Good afternoon"); // Hello, Good afternoon Jhankar Dewangan 
  
  //Apply
  
  greeting.apply(user, ["Hello", "Good evening"]); // Hello, Good evening Jhankar Dewangan