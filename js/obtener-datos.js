export async function obtenerDatosDelJSON() {
    const $infoPersonal = document.getElementById("info-personal"),
      $materias = document.getElementById("materias");
  
    let html = "";
  
    try {
      let res = await fetch("data.json");
  
      console.log(res);
  
      if (!res.ok) {
        throw "Error al acceder al archivo JSON";
      }
  
      let json = await res.json();
  
      console.log(json);
  
      json.materias.forEach((el) => {
        html += `
          <div>
           
            <h4>${el.nombre}</h4>
            <h5>${el.profx}</h5>
            <p>${el.descripcion}</p>
          </div>
        `;
      });
  
      $materias.innerHTML = html;
    } catch (error) {
      console.warn(error);
     
    }
  }