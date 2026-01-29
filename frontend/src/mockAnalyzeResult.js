export const mockAnalyzeResult = {
  success: true,
  data: {
    score: 78,
    risk: "Medium",
    growth: "High",
    summary: [
      "Doanh thu tăng trưởng ổn định qua các quý",
      "Lợi nhuận ròng dương",
      "Dòng tiền hoạt động tốt"
    ],
    metrics: {
      revenue: "1.200.000.000 VND",
      profit: "240.000.000 VND",
      cashflow: "180.000.000 VND",
      debt: "32%"
    },
    recommendations: [
      "Kiểm soát chi phí marketing",
      "Tăng cường đầu tư vào sản phẩm cốt lõi",
      "Giảm tỷ lệ vay ngắn hạn"
    ],
    downloadUrl: "/mock-ai-report.txt"
  }
};
