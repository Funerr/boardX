export interface ListItem {
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  description: string;
  status?: "primary" | "success" | "warning" | "info" | "danger";
  extra?: string;
}

export interface TabItem {
  key: string;
  name: string;
  list: ListItem[];
  emptyText: string;
}

export const noticesData: TabItem[] = [
  {
    key: "1",
    name: "通知",
    list: [
      {
        avatar: "https://xiaoxian521.github.io/hyperlink/svg/smile1.svg",
        title: "V0.1 看板发布",
        description: "",
        datetime: "今天",
        type: "2"
      }
    ],
    emptyText: "暂无通知"
  },
  {
    key: "2",
    name: "消息",
    list: [
      {
        avatar: "https://xiaoxian521.github.io/hyperlink/svg/smile1.svg",
        title: "EP822 6.0Btrunc 已完成",
        description: "成功率96%，详情报告：www.baidu.com",
        datetime: "今天",
        type: "2"
      }
    ],
    emptyText: "暂无消息"
  },
  {
    key: "3",
    name: "待办",
    list: [
      {
        avatar: "",
        title: "自动化脚本编写",
        description:
          "剩余5条",
        datetime: "",
        extra: "马上到期",
        status: "danger",
        type: "3"
      }
    ],
    emptyText: "暂无待办"
  }
];
