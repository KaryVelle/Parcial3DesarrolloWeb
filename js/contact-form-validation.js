const d = document;

export function contactFormValidations(form) {
  const $form = d.querySelector(form),
    inputs = `${form} [required]`,
    $inputs = d.querySelectorAll(inputs);

  $inputs.forEach((el) => {
    const $span = d.createElement("span");
    $span.id = `${el.name}-error`;
    $span.innerText = el.title;
    $span.classList.add("form-error", "none");
    el.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("input", (e) => {
    if (!e.target.matches(inputs)) return false;

    let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern,
      $inputError = d.getElementById(`${$input.name}-error`),
      condition;

    if (pattern) {
      let regex = new RegExp(pattern);
      condition = !regex.exec($input.value);
    } else {
      condition = $input.value === "";
    }

    return condition
      ? $inputError.classList.add("is-active")
      : $inputError.classList.remove("is-active");
  });

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const $loader = d.querySelector(`${form} .loader`),
      $response = d.querySelector(`${form} .form-response`);

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");

     
      const $cvInput = d.querySelector(`${form} #cv`);
      const maxFileSizeMB = 5; 

      if ($cvInput.files.length > 0) {
        const fileSize = $cvInput.files[0].size / 1024 / 1024; 
        if (fileSize > maxFileSizeMB) {
          alert("El archivo es demasiado grande. El tamaño máximo permitido es " + maxFileSizeMB + "MB.");
          $loader.classList.add("none");
          return; 
        }
      } else {
        alert("Por favor, carga tu CV.");
        $loader.classList.add("none");
        return; 
      }

      $form.reset();
      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
}
