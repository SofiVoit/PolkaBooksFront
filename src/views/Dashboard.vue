<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <projects-table  title="Найди нужную книжку и свяжись с хозяином"></projects-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import ProjectsTable from "./Tables/ProjectsTable";

export default {
  components: {
    ProjectsTable
  },
  data() {
    return {
      salesChartID: "salesChart",
      ordersChartID: "ordersChart",
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40],
        ],
        activeIndex: 0,
      },
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<style></style>
