$(function () {
   $(".change-devoured").on("click", function(event) {
      event.preventDefault();
      let id = $(this).data("id");
      let newDevoured = $(this).data("devoured");
      console.log(newDevoured);

      let newDevouredState = {
         devoured: newDevoured
      };

      $.ajax("/api/burgers/" + id, {
         type: "PUT",
         data: newDevouredState
      }).then(function() {
         console.log(("Changed devoured to", newDevoured));
         location.reload();
      }
      );
   });

   $(".create-form").on("submit", function(event) {
      event.preventDefault();
      let newBurger = {
         burger_name: $("#cb").val().trim()
      };

      $.ajax("/api/burgers", {
         type: "POST",
         data: newBurger
      }).then(function() {
         console.log("Created new burger");
         location.reload();

      });
   });
   
   $(".delete-burger").on("click",function(event) {
      event.preventDefault();
      let id = $(this).data("id");
      $.ajax("/api/burgers/" + id, {
         type: "DELETE"
      }).then(function() {
         console.log("Deleted burger", id);
         location.reload();
      });
   });
});