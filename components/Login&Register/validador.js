export const validarEmail = (email) => {
  if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    ) &&
    email.length !== 0
  ) {
    return true;
  } else {
    return false;
  }
};

export const validarTel = (tel) => {
  if ((tel.length <= 6 || tel.length >= 13) && tel.length !== 0) {
    return true;
  } else {
    return false;
  }
};

export const validarContra = (contra, confContra) => {
  if (contra !== confContra && contra !== "" && confContra !== "") {
    return true;
  } else {
    return false;
  }
};
