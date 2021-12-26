<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
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
          <th>Моя оценка</th>
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
