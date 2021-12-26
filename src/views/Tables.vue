<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-profile shadow">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2"> 
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      src="img/theme/rtf.png"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="d-flex justify-content-between">
              </div>
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div class="row">
                <div class="col">
                  <div
                    class="card-profile-stats d-flex justify-content-center mt-md-5"
                  >
                  </div>
                </div>
              </div>
              <div class="text-center">
                <h3>
                  Библиотека РТФ<span class="font-weight-light">, 30</span>
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Россия, Екатеринбург
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>i.n.obabkov@urfu.ru
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 mb-5 mb-xl-0">
          <user-table title="Мои книжки"></user-table>
        </div>
      </div>
    </div>
</div>

</template>
<script>
import UserTable from "./Tables/UserTable";
export default {
  name: "tables",
  components: {
    UserTable
  },
};
</script>
<style></style>
