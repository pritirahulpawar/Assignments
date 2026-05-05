// Abstraction => Abstraction is a concept of hiding the implementation

abstract class CommonMethods{
    launchApplication(){
        console.log("Launch the Browser");
        console.log("Enter the URL: www.google.com");
        console.log("Launch the application");
    }
    // loginIntoApplication(){
    //     console.log("Enter the Username");
    //     console.log("Enter the Password");
    //     console.log("Click on login button");
    // }
    // logoutFromApplication(){
    //     console.log("click on profile icon");
    //     console.log("click on the logout button");
    // }

    //abstract launchApplication(): void;

    abstract loginIntoApplication(): void;

    abstract logoutFromApplication(): void;
}

abstract class Test extends CommonMethods{
    // obj = new CommonMethods();
    
    loginIntoApplication(){
        console.log("Enter the Username");
        console.log("Enter the Password");
        console.log("Click on login button");
    }
    logoutFromApplication(){
        console.log("click on profile icon");
        console.log("click on the logout button");
    }
}


