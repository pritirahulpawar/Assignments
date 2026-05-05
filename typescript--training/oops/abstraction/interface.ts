//Interface is special abstract class, and it will accept 100% abstract methods only

interface CommonMethods1{
    launchApplication(): void;
    
    loginIntoApplication(): void;

    logoutFromApplication(): void;
}

interface CommonMethods2{
    navigateToapplication(): void;
    
    closeTheApplication(): void;

   
}

class Test implements CommonMethods1, CommonMethods2{
    
    launchApplication(){
        console.log("Launch the Browser");
        console.log("Enter the URL: www.google.com");
        console.log("Launch the application");
    }
    
    loginIntoApplication(){
        console.log("Enter the Username");
        console.log("Enter the Password");
        console.log("Click on login button");
    }

    navigateToapplication(){
        console.log("Navigate to the Application");
    }

    closeTheApplication(){
        console.log("Close the Application");
    }
    logoutFromApplication(){
        console.log("click on profile icon");
        console.log("click on the logout button");
    }
}


