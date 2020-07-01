$(function () {
   $(".change-devoured").on("click", event => {
      let id = $(this).data("id");
      let newDevoured = $(this).data("newDevoured");

      let newDevouredState = {
         devoured: newDevoured
      };

      $.ajax("/api/burgers/" + id, {
         type: "PUT",
         data: newDevouredState
      }).then(() => {
         console.log(("Changed devoured to", newDevoured));
         location.reload();
      }
      );
   });

   $(".create-form").on("submit", event => {
      event.preventDefault();

      let newBurger = {
         burger_name: $("#cb").val().trim()
      };

      $.ajax("/api/burgers", {
         type: "POST",
         data: newBurger
      }).then(() => {
         console.log("Created new burger");
         location.reload();
      });
   });
   
   $(".delete-burger").on("click", () => {
      let id = $(this).data("id");
      $.ajax("/api/burgers/" + id, {
         type: "DELETE"
      }).then(() => {
         console.log("Deleted burger", id);
         location.reload();
      });
   });
});