const express = require('express');
const app = express();
const port = process.env.PORT || 5010;
const options = {
    extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],  
}
app.use(express.static("public", options));
app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");
});
app.get("/resume", function(req, res){
	res.sendFile(__dirname+"/Resume.html");
});
app.get("/card", function(req, res){
	res.sendFile(__dirname+"/card.html");
});

app.listen(port, function(){
	console.log("Server running on http://localhost:"+port);
	console.log(`Server running on http://localhost:${port}`);
});
