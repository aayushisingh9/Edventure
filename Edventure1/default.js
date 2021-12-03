function upload()
{
    //get your image
    var category = document.getElementById('category');
    var title = document.getElementById('title');
    var post = document.getElementById('post');
    var body = document.getElementById('body');
    var image=document.getElementById('image').files[0];
    

    //get your blog text
   
    //get image name
    var imageName=image.name;
    //firebase storage reference
    if(category.value == "csit")
    {
      


      //it is the path where your image will be stored
    var storageRef=firebase.storage().ref('csit/'+title.value);
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(image);
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot)
    {
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
      //handle error here
      console.log(error.message);
    },function(){
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL)
        {
           //get your image download url here and upload it to databse

 
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref('csit/').push().set({
                 post:post.value,
                 imageURL:downloadURL,
                 body:body.value,
                 category:category.value,
                 title:title.value

           },function(error){
               if(error){
                   alert("Error while uploading");
               }else{
                   alert("Successfully uploaded");
                   //now reset your form
                   document.getElementById('post-form').reset();
                   getdata();
               }
           });
        });
    });

}


else if(category.value=="electrical")
{
    //it is the path where your image will be stored
    var storageRef=firebase.storage().ref('electrical/'+title.value);
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(image);
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot){
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
      //handle error here
      console.log(error.message);
    },function(){
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           //get your image download url here and upload it to databse

 
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref('electrical/').push().set({
                 post:post.value,
                 imageURL:downloadURL,
                 body:body.value,
                 category:category.value,
                 title:title.value

           },function(error){
               if(error){
                   alert("Error while uploading");
               }else{
                   alert("Successfully uploaded");
                   //now reset your form
                   document.getElementById('post-form').reset();
                   getdata();
               }
           });
        });
    });

}



else if(category.value=="mechanical")
{
    //it is the path where your image will be stored
    var storageRef=firebase.storage().ref('mechanical/'+title.value);
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(image);
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot){
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
      //handle error here
      console.log(error.message);
    },function(){
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           //get your image download url here and upload it to databse

 
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref('mechanical/').push().set({
                 post:post.value,
                 imageURL:downloadURL,
                 body:body.value,
                 category:category.value,
                 title:title.value

           },function(error){
               if(error){
                   alert("Error while uploading");
               }else{
                   alert("Successfully uploaded");
                   //now reset your form
                   document.getElementById('post-form').reset();
                   getdata();
               }
           });
        });
    });

}

window.onload=function(){
    this.getdata();
}
}

   
function getdata(){
    firebase.database().ref('category/').once('value').then(function(snapshot){
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
        "<div class='card-body'><p class='card-text'>"+"<a href='"+value.post+"'>link</a>"+"</p>"
        "<div class='card-body'><p class='card-text'>"+value.body+"</p>"+ 
        "<button class='btn btn-danger' id='"+key+"' onclick='delete_post(this.id)'>Delete</button>"
        "</div></div></div>"+posts_div.innerHTML;
      }
    
    });
}

function delete_post(key){
    firebase.database().ref('blogs/'+key).remove();
    getdata();

}