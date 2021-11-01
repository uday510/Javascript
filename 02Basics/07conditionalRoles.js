
var user = "admin"

switch (user) {
    case "admin":
        console.log("You get full access");        
        break;
    
    case "subAdmin":
        console.log("get access to create/delete courses");        
        break;
    
    case "testPrep":
        console.log("Consume to content");        
        break;
    default:
        console.log("Trail user");
        break;
}
