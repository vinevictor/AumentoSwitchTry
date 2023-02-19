function calculoAumento(valor) {
  let salario = valor;
  let salarioComAumento = 0;
  try {
    if (typeof salario != "number") {
      throw new Error("salario informado incorretamente");
    } else {
      switch (typeof salario == "number") {
        case salario <= 1500:
          console.log("entrou");
          salarioComAumento = salario + salario * 0.2;
          console.log(`Salario com aumento:${salarioComAumento}`);
          break;
        case salario >= 1501 && salario <= 2000:
          salarioComAumento = salario + salario * 0.15;
          console.log(`Salario com aumento:${salarioComAumento}`);
          break;
        case salario >= 2001 && salario <= 3000:
          salarioComAumento = salario + salario * 0.1;
          console.log(`Salario com aumento:${salarioComAumento}`);
          break;
        case salario >= 3001:
          salarioComAumento = salario + salario * 0.05;
          console.log(`Salario com aumento:${salarioComAumento}`);
          break;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
