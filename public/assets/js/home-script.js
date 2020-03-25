
$("form#postForm").on("submit",function (e) {
    e.preventDefault();
   var postTitle = $("#postTitle").val();
   var postCategory = $("#postCategory").val();
   var postDescription = $("#postDescription").val();

   if (postTitle == ""){
       $("#postSubmitError").html("* Please enter post title");
       $("#postTitle").focus();
   }else if (postCategory == ""){
       $("#postSubmitError").html("* Please select post category");
       $("#postCategory").focus();
   }
   else if (postDescription == ""){
       $("#postSubmitError").html("* Please write something");
       $("#postDescription").focus();
   }else{
       alert("ok");
   }

});
