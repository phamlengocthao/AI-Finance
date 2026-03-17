import multer from "multer";
import path from "path";

/* ================= STORAGE CONFIG ================= */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

/* ================= FILE FILTER ================= */

const fileFilter = (req, file, cb) => {
  const allowedTypes = [".pdf", ".doc", ".docx", ".txt"];

  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF, DOC, DOCX, TXT files allowed"));
  }
};

/* ================= MULTER CONFIG ================= */

const upload = multer({
  storage: storage,

  limits: {
    fileSize: 10 * 1024 * 1024,
  },

  fileFilter: fileFilter,
});

export default upload;