var user = "testprep";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete courses");
        break;
    case "user":
        console.log("gets access to consume the content");
        break;
    default:
        console.log("Trail user");
        break;
}