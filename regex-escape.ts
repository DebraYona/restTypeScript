

const escapeRegex = (variable:string) => { 
    return variable.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

  }; 
  // Función de exportación 
  module.exports = escapeRegex;