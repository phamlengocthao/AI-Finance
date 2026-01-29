import axios from "axios";
import fs from "fs";

export const callModelAPI = async (filePath) => {

  /**
   * =====================================================
   *  CHÈN API MODEL  
   * =====================================================
   */

  // đọc file
  const fileStream = fs.createReadStream(filePath);


  return {
    message: "MODEL CHƯA ĐƯỢC GẮN",
    note: "Chèn API model của bạn vào model.service.js",
    filePath,
  };
};
