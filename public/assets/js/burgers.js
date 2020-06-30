$(function () {
   $(".change-devour").on("click", event => {
      const id = $(this).data("id");
      const newDevour = $(this).data("newdevour");

      const newDevourState = {
         devoured: newDevour
      };

      $.ajax("/api/burgers/" + id, {
         type: "PUT",
         data: newDevourState
      }).then(() => {
         console.log(("Changed devour to", newDevour));
         location.reload();
      }
      );
   });

   $(".create-form").on("submit", event => {
      event.preventDefault();

      const newBurger = {
         name: $("#burg").val().trim(),
         devour: $("[name=devour]:checked").val().trim()
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