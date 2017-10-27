app.get("/apt/friends", function(req, res) {
  for (var i = 0; i < friends.length; i++) {
    return res.json(friends[i])
  } //for loop done
})//get done

app.post("/api/friends", function(req, res) {
  
}) //post done