// import multer from "multer";

// /* ================= MEMORY STORAGE ================= */

// const storage = multer.memoryStorage();

// /* ================= FILE FILTER ================= */

// const fileFilter = (req, file, cb) => {
//   const allowedMimeTypes = [
//     "application/pdf",
//     "text/plain",

//     // image
//     "image/png",
//     "image/jpeg",

//     // excel
//     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     "application/vnd.ms-excel",
//   ];

//   if (allowedMimeTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("File type not supported"), false);
//   }
// };

// /* ================= MULTER CONFIG ================= */

// const upload = multer({
//   storage,

//   limits: {
//     fileSize: 10 * 1024 * 1024, // 10MB
//   },

//   fileFilter,
// });

// export default upload;