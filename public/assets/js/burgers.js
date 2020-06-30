$(function () {
   $(".change-devoured").on("click", event => {
      const id = $(this).data("id");
      const newDevoured = $(this).data("newdevoured");

      const newDevouredState = {
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

      const newBurger = {
         name: $("#burg").val().trim(),
         devour: $("[name=devoured]:checked").val().trim()
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
      const id = $(this).data("id");
      $.ajax("/api/burgers/" + id, {
         type: "DELETE"
      }).then(() => {
         console.log("Deleted burger", id);
         location.reload();
      });
   });
});