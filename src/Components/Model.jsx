import React from "react";
import Model from "react-modal";
function CustomModel({ isOpen, setIsOpen }) {
  return (
    <Model
      isOpen={isOpen}
      style={{
        content: {
          backgroundColor: "#EFEFEFD9",
          height: "max-content",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        },
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
      praesentium beatae animi dicta. Sit saepe labore sed dignissimos, quidem
      ut praesentium officiis autem quia dolorem rerum vero perspiciatis at
      voluptatum unde velit accusantium illum sapiente? Distinctio beatae iste
      rerum sequi dignissimos unde blanditiis, officiis molestias molestiae aut.
      Expedita perspiciatis nam labore iusto sunt, modi doloremque praesentium
      maiores, assumenda architecto, eum nihil earum vel explicabo excepturi aut
      esse numquam minima mollitia distinctio qui quibusdam eaque facilis
      fugiat. Necessitatibus unde cumque, placeat pariatur in dolorum ab odio
      incidunt consequuntur! Dignissimos vero perferendis quibusdam soluta
      perspiciatis sapiente exercitationem, maiores dolores. Id, dicta vel?
      <button onClick={() => setIsOpen((prev) => !prev)}>Click</button>
    </Model>
  );
}

export default CustomModel;
