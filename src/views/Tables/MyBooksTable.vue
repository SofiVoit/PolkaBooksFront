<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col" style="display: flex; flex-wrap: wrap; justify-content: space-between;">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
          <base-button size="sm" type="info" class="ml-4" @click="edit">Добавить</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="tableData"
      >
        <template v-slot:columns>
          <th>Название</th>
          <th>Автор</th>
          <th>Жанр</th>
          <th></th>
        </template>

        <template v-slot:default="row">
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.item.bookName }}</span>
              </div>
            </div>
          </th>
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.item.bookAutor }}</span>
              </div>
            </div>
          </th>
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{ row.item.opinion }}</span>
              </div>
            </div>
          </th>
          <th scope="row">
            <div class="media align-items-center">
              <i style="font-size: 25px; cursor: pointer;" class="ni ni-fat-remove text-red" @click="remove(row)"></i>
            </div>
          </th>
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
    </div>
  </div>
</template>
<script>
export default {
  name: "projects-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  methods: {
    edit() {
      this.$swal({
        title: 'Добавить книжку',
        html:
          '<input id="swal-input1" placeholder="Название" class="swal2-input">' +
          '<input id="swal-input2" placeholder="Автор" class="swal2-input">' +
          '<input id="swal-input3" placeholder="Жанр" class="swal2-input">',
        focusConfirm: false,
        preConfirm() {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value
          ]
        }
      }).then((res) => {
        console.log(this.$data, res);
        if (res.isConfirmed) {
          if (res.value.some((value) => {
            return !value;
          })) {
            this.$swal('Не все поля заполнены');
          } else {
            this.$data.tableData.push({
              bookName: res.value[0],
              bookAutor: res.value[1],
              opinion: res.value[2]
            });
          }
        }
      });
    },
    remove(row) {
      const index = this.$data.tableData.findIndex((dataItem) => {
        return dataItem.bookName === row.item.bookName;
      });

      if (index !== -1) {
        this.$data.tableData.splice(index, 1);
      }
    }
  },
  data() {
    return {
      tableData: [
        {
          bookName: "Война и мир",
          bookAutor: 'Л.Н. Толстой',
          opinion: '10/10'
        },
        {
          bookName: "Преступление и наказание",
          bookAutor: 'Ф.М. Достоевский',
          opinion: '7/10'
        },
        {
          bookName: "Вий",
          bookAutor: 'Н.В. Гоголь',
          opinion: 'Не читал(а)'
        },
        {
          bookName: "Зов ктулху",
          bookAutor: 'Г.Ф. Лавкрафт',
          opinion: 'Не читал(а)'
        },
        {
          bookName: "Человек-паук",
          bookAutor: 'Стэн Ли',
          opinion: 'Не читал(а)'
        }
      ],
    };
  },
};
</script>
<style></style>
