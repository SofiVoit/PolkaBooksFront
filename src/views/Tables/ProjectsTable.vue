<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col" style="flex-grow: 4">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
        </div>
        <div class="col">
          <base-input
            formClasses="input-group-alternative"
            placeholder="Поиск"
            addon-left-icon="fas fa-search"
            v-model="search"></base-input>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="filteredData"
      >
        <template v-slot:columns>
          <th>Название</th>
          <th>Автор</th>
          <th>Жанр</th>
          <th>Хозяин</th>
          <th>Телеграм</th>
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
                <span class="name mb-0 text-sm">{{ row.item.bookGenre }}</span>
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
                  onerror="this.onerror=null;this.src='https://placeimg.com/320/320/animals'"
                />
              </a>
            </div>
          </td>
          <td class="mail">
            <a :href="`https://telegram.im/${row.item.tgUserName}`" target="_blank" style="font-size: 25px; cursor: pointer;">
              <i class="ni ni-send"></i>
            </a>
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
import { collection, query, getDocs } from "firebase/firestore";

export default {
  name: "projects-table",
  beforeMount: function() {
    // const q = query(collection(window.firestore, "books"), where("ownerId", "==", window.getCookie('authToken')));
    const q = query(collection(window.firestore, "books"));
    const querySnapshot = getDocs(q);

    querySnapshot.then((data) => {
      data.docs.forEach((book) => {
        this.$data.tableData.push({
          bookName: book.get('name'),
          bookAutor: book.get('author'),
          bookGenre: book.get('opinion'),
          ownerImg: `https://telegram.im/img/${book.get('userOwner')}`,
          tgUserName: book.get('userOwner'),
        })
      });
    })
  },
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  computed: {
    filteredData: function() {
      const _this = this;
      return _this.$data.tableData.filter((item) => {
        if (_this.$data.search && item.bookName) {
          return item.bookName.toLowerCase().includes(_this.$data.search);
        } else {
          return true;
        }
      });
    }
  },
  data() {
    return {
      tableData: [],
      search: ''
    };
  },
};
/**
 * {
          bookName: "Война и мир",
          bookAutor: 'Л.Н. Толстой',
          ownerImg: 'img/theme/team-1-800x800.jpg',
          tgUserName: "Sofia_voitsik",
        },
        {
          bookName: "Преступление и наказание",
          bookAutor: 'Ф.М. Достоевский',
          ownerImg: 'img/theme/team-2-800x800.jpg',
          tgUserName: "v_prokopchenko",
        },
        {
          bookName: "Вий",
          bookAutor: 'Н.В. Гоголь',
          ownerImg: 'img/theme/team-3-800x800.jpg',
          tgUserName: "v_prokopchenko",
        },
        {
          bookName: "Зов ктулху",
          bookAutor: 'Г.Ф. Лавкрафт',
          ownerImg: 'img/theme/team-4-800x800.jpg',
          tgUserName: "v_prokopchenko",
        },
        {
          bookName: "Человек-паук",
          bookAutor: 'Стэн Ли',
          ownerImg: 'img/theme/rtf.png',
          tgUserName: "Sofia_voitsik",
        },
        {
          bookName: "Черный абелиск",
          bookAutor: 'Э.М. Ремарк',
          ownerImg: 'img/theme/team-2-800x800.jpg',
          tgUserName: "v_prokopchenko",
        },
        {
          bookName: "Гарри Поттер и кубок огня",
          bookAutor: 'Дж. Роулинг',
          ownerImg: 'img/theme/team-4-800x800.jpg',
          tgUserName: "v_prokopchenko",
        },
        {
          bookName: "Хоббит или путешествие туда и обратно",
          bookAutor: 'Дж. Толкиен',
          ownerImg: 'img/theme/team-1-800x800.jpg',
          tgUserName: "v_prokopchenko",
        },
 */
</script>
<style></style>

