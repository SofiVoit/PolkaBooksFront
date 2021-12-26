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
          <th>Хозяин</th>
          <th>Почта</th>
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
          <td>
            <div class="avatar-group">
              <a
                href="#"
                class="avatar avatar-sm rounded-circle"
                data-toggle="tooltip"
                data-original-title="Jessica Doe"
              >
                <img
                  alt="Image placeholder"
                  :src="row.item.ownerImg"
                />
              </a>
            </div>
          </td>
          <td class="mail">
            {{ row.item.mail }}
          </td>
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
          ownerImg: 'img/theme/team-1-800x800.jpg',
          mail: "bigmike2005@gmail.com",
        },
        {
          bookName: "Преступление и наказание",
          bookAutor: 'Ф.М. Достоевский',
          ownerImg: 'img/theme/team-2-800x800.jpg',
          mail: "smallpinguin@mail.ru",
        },
        {
          bookName: "Вий",
          bookAutor: 'Н.В. Гоголь',
          ownerImg: 'img/theme/team-3-800x800.jpg',
          mail: "bivaliy97@mail.ru",
        },
        {
          bookName: "Зов ктулху",
          bookAutor: 'Г.Ф. Лавкрафт',
          ownerImg: 'img/theme/team-4-800x800.jpg',
          mail: "superhatlol@yandex.ru",
        },
        {
          bookName: "Человек-паук",
          bookAutor: 'Стэн Ли',
          ownerImg: 'img/theme/rtf.png',
          mail: "i.n.obabkov@urfu.ru",
        },
        {
          bookName: "Черный абелиск",
          bookAutor: 'Э.М. Ремарк',
          ownerImg: 'img/theme/team-2-800x800.jpg',
          mail: "smallpinguin@mail.ru",
        },
        {
          bookName: "Гарри Поттер и кубок огня",
          bookAutor: 'Дж. Роулинг',
          ownerImg: 'img/theme/team-4-800x800.jpg',
          mail: "superhatlol@yandex.ru",
        },
        {
          bookName: "Хоббит или путешествие туда и обратно",
          bookAutor: 'Дж. Толкиен',
          ownerImg: 'img/theme/team-1-800x800.jpg',
          mail: "bigmike2005@gmail.com",
        },
      ]
    };
  },
};
</script>
<style></style>
