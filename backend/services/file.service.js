import pdf from "pdf-parse";
import Tesseract from "tesseract.js";
import xlsx from "xlsx";

export const extractTextFromFile = async (file) => {
  // PDF
  if (file.mimetype === "application/pdf") {
    const data = await pdf(file.buffer);
    return data.text;
  }

  // IMAGE
  if (file.mimetype.startsWith("image")) {
    const { data } = await Tesseract.recognize(file.buffer, "eng");
    return data.text;
  }

  // EXCEL
  if (file.mimetype.includes("sheet")) {
    const workbook = xlsx.read(file.buffer);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    return JSON.stringify(xlsx.utils.sheet_to_json(sheet));
  }

  return "";
};