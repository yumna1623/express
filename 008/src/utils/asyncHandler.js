// // HOF || try catch
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       sucess: false,
//       message: error.message || "Internal Server Error",
//     });
//   }
// };

// export { asyncHandler };

// Alternative implementation using Promise.resolve
 
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next))
        .catch((error) => next(err))
    };
}
export { asyncHandler };