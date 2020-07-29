

['backgroundColor']
  .forEach((property) => {
    const input = document.getElementById(`${property}`);
    const output = document.getElementById(`${property}Value`);
    input.addEventListener('input', (event) => {
      document.body.style.backgroundColor = event.target.value;
    });
  });

['src', 'environmentImage']
  .forEach((property) => {
    const input = document.getElementById(`${property}`);
    const output = document.getElementById(`${property}Value`);
    input.addEventListener('input', (event) => {
      viewer[property] = event.target.value;
    });
  });

['exposure', 'shadowIntensity']
  .forEach((property) => {
    const input = document.getElementById(`${property}`);
    const output = document.getElementById(`${property}Value`);
    input.addEventListener('input', (event) => {
      const value = parseFloat(event.target.value);
      output.value = value;
      viewer[property] = value;
    });
    output.addEventListener('input', (event) => {
      const value = parseFloat(event.target.value);
      input.value = value;
      viewer[property] = value;
    });
  });

['autoRotate']
  .forEach((property) => {
    const checkbox = document.getElementById(`${property}`);
    checkbox.addEventListener('change', (event) => {
      viewer[property] = checkbox.checked;
    });
  });