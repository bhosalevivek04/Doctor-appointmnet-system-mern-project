function errorHandler(err, req, res, next) {
    // Log the error for debugging purposes
    console.error(err.stack);
  
    // Check if the error has a status code, otherwise default to 500 (Internal Server Error)
    const statusCode = err.statusCode || 500;
  
    // Set the response status code
    res.status(statusCode);
  
    // Return the error message as JSON
    res.json({
      message: err.message,
      statusCode: statusCode,
    });
  }
  
  module.exports = errorHandler;
  