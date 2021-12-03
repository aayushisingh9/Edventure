function updatetable(){
    firebase.database().ref('mechanical/').once('value').then(function(snapshot){
      //get your posts div
      var posts_div=document.getElementById('posts');
      //remove all remaining data in that div
      posts.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        posts_div.innerHTML="<div class='col-sm-4 mt-2 mb-1'>"+
        "<div class='card'>"+
        "<img src='"+value.imageURL+"' style='height:250px;'>"+
        "<div class='card-body'><p class='card-text'>"+value.title+"</p>"+
        "<div class='card-body'><p class='card-text'>"+value.post+"</p>"
        "<div class='card-body'><p class='card-text'>"+value.body+"</p>"+
        "</div></div></div>"+posts_div.innerHTML;

      }
    
    });
 firebase.database().ref('csit/').once('value').then(function(snapshot){
      //get your posts div
      var posts_div=document.getElementById('posts');
      //remove all remaining data in that div
      posts.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        posts_div.innerHTML="<div class='col-sm-4 mt-2 mb-1'>"+
        "<div class='card'>"+
        "<img src='"+value.imageURL+"' style='height:250px;'>"+
        "<div class='card-body'><p class='card-text'>"+value.title+"</p>"+
        "<div class='card-body'><p class='card-text'>"+value.post+"</p>"
        "<div class='card-body'><p class='card-text'>"+value.body+"</p>"+
        "</div></div></div>"+posts_div.innerHTML;

      }
    
    });
 firebase.database().ref('electrical/').once('value').then(function(snapshot){
      //get your posts div
      var posts_div=document.getElementById('table');
      //remove all remaining data in that div
      table.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        posts_div.innerHTML="<div class='col-sm-4 mt-2 mb-1'>"+
        "<div class='card'>"+
        "<img src='"+value.imageURL+"' style='height:250px;'>"+
        "<div class='card-body'><p class='card-text'>"+value.title+"</p>"+
        "<div class='card-body'><p class='card-text'>"+value.post+"</p>"
        "<div class='card-body'><p class='card-text'>"+value.body+"</p>"+
        "</div></div></div>"+posts_div.innerHTML;

      }
    
    });
}


   