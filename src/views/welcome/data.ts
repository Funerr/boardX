import { dayjs, cloneDeep, getRandomIntBetween } from "./utils";
import GroupLine from "~icons/ri/group-line";
import Question from "~icons/ri/question-answer-line";
import CheckLine from "~icons/ri/chat-check-line";
import Smile from "~icons/ri/star-smile-line";

const days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

/** 需求人数、提问数量、解决数量、用户满意度 */
const chartData = [
  {
    icon: GroupLine,
    bgColor: "#effaff",
    color: "#41b6ff",
    duration: 2200,
    name: "用例总数",
    value: 36000,
    percent: "+20 case",
    data: [2101, 5288, 4239, 4962, 6752, 5208, 7450] // 平滑折线图数据
  },
  {
    icon: Question,
    bgColor: "#fff5f4",
    color: "#e85f33",
    duration: 1600,
    name: "问题单数量",
    value: 16580,
    percent: "+10 DTS",
    data: [2216, 1148, 1255, 788, 4821, 1973, 4379]
  },
  {
    icon: CheckLine,
    bgColor: "#eff8f4",
    color: "#26ce83",
    duration: 1500,
    name: "待解决问题单数",
    value: 16499,
    percent: "10%致命，20%严重",
    data: [861, 1002, 3195, 1715, 3666, 2000, 1000]
  },
  {
    icon: Smile,
    bgColor: "#f6f4fe",
    color: "#7846e5",
    duration: 100,
    name: "项目整体进展",
    value: 60,
    percent: "当前阶段TR4A--TR5",
    data: [20]
  }
];

/** 分析概览 */
const barChartData = [
  {
    requireData: [2101, 5288, 4239, 4962, 6752, 5208, 7450],
    questionData: [2216, 1148, 1255, 1788, 4821, 1973, 4379]
  },
  {
    requireData: [2101, 3280, 4400, 4962, 5752, 6889, 7600],
    questionData: [2116, 3148, 3255, 3788, 4821, 4970, 5390]
  }
];

/** 解决概率 */
const progressData = [
  {
    week: "beta测试",
    percentage: 2,
    duration: 100,
    color: "#41b6ff"
  },
  {
    week: "CTS测试",
    percentage: 11,
    duration: 100,
    color: "#41b6ff"
  },
  {
    week: "性能测试",
    percentage: 5,
    duration: 100,
    color: "#41b6ff"
  },
  {
    week: "稳定性测试",
    percentage: 1,
    duration: 100,
    color: "#41b6ff"
  },
  {
    week: "专项测试",
    percentage: 21,
    duration: 100,
    color: "#26ce83"
  },
  {
    week: "相机测试",
    percentage: 5,
    duration: 100,
    color: "#26ce83"
  },
  {
    week: "自动化测试",
    percentage: 5,
    duration: 100,
    color: "#26ce83"
  }
].reverse();

/** 数据统计 */
const tableData = Array.from({ length: 30 }).map((_, index) => {
  return {
    id: index + 1,
    requiredNumber: getRandomIntBetween(10, 20),
    questionNumber: getRandomIntBetween(1, 5),
    resolveNumber: getRandomIntBetween(1, 5),
    satisfaction: getRandomIntBetween(95, 100),
    date: dayjs().subtract(index, "day").format("YYYY-MM-DD")
  };
});

/** 最新动态 */
const latestNewsData = cloneDeep(tableData)
  .slice(0, 14)
  .map((item, index) => {
    return Object.assign(item, {
      date: `${dayjs().subtract(index, "day").format("YYYY-MM-DD")} ${
        days[dayjs().subtract(index, "day").day()]
      }`
    });
  });

export { chartData, barChartData, progressData, tableData, latestNewsData };
