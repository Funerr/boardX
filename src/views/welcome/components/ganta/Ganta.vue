<script setup lang="ts">
import { ref } from "vue";
// https://zunnzunn.github.io/vue-ganttastic/introduction.html
import { GGanttChart, GGanttRow } from "@infectoone/vue-ganttastic";

const context = ref([
  [
    {
      week: "范沛东",
      beginDate: "10:00",
      endDate: "15:00",
      ganttBarConfig: {
        id: "0",
        hasHandles: true,
        label: "需求收集和分析  负责人：小张",
        style: {
          background: "#e96560"
        }
      }
    }
  ]
]);

function getWeekRange() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - dayOfWeek + 1);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  const formatDate = date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const currentWeekStart = formatDate(startDate);
  const currentWeekEnd = formatDate(endDate);

  return {
    currentWeekStart,
    currentWeekEnd
  };
}

const weekRangeInChina = getWeekRange();
</script>

<template>
  <g-gantt-chart
    chart-start="00:00"
    chart-end="23:59"
    precision="hour"
    date-format="HH:mm"
    bar-start="beginDate"
    bar-end="endDate"
    grid
  >
    <template #upper-timeunit>
      <h1>
        {{
          `${weekRangeInChina.currentWeekStart} / ${weekRangeInChina.currentWeekEnd}`
        }}
      </h1>
    </template>
    <g-gantt-row
      v-for="(item, index) in context"
      :key="index"
      :bars="item"
      :label="item[0].week"
      highlight-on-hover
    />
  </g-gantt-chart>
</template>
