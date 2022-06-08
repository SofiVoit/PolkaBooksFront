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
          <span v-if="!isUser">Чтобы добавить книгу </span>
          <router-link v-if="!isUser" to="/login">
              <span class="nav-link-inner--text">войдите</span>
          </router-link>
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
        :load="load"
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
    <a v-if="!load" :href="`https://telegram.im/@Sofia_voitsik`" target="_blank" style="color: red; font-size: 13px;">Написать администратору</a>
    </div>
  </div>
</template>
<script>
import { collection, query, getDocs } from "firebase/firestore";
const CACHE_OWNERS = {
  'urfu_ru': 'img/theme/rtf.png',
  '@Sofia_voitsik': 'img/theme/sonya2.jpg',
  '@v_prokopchenko': 'img/theme/slava.jpg'
}

export default {
  name: "projects-table",
  beforeMount: function() {
    this.isUser = Boolean(window.getCookie('authToken'));
    // const q = query(collection(window.firestore, "books"), where("ownerId", "==", window.getCookie('authToken')));
    const q = query(collection(window.firestore, "books"));
    const querySnapshot = getDocs(q);
    this.$data.load = true;

    querySnapshot.then((data) => {
      data.docs.forEach((book) => {
        const userImg = this.getUserImg(book.get('userOwner'))
        this.$data.tableData.push({
          bookName: book.get('name'),
          bookAutor: book.get('author'),
          bookGenre: book.get('opinion'),
          ownerImg: userImg,
          tgUserName: book.get('userOwner'),
        })
      });
      this.$data.load = false;
    })
  },
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  methods: {
    getUserImg(userOwner) {
      return CACHE_OWNERS[userOwner] ?? `https://telegram.im/img/${userOwner}`
    }
  },
  computed: {
    filteredData: function() {
      const _this = this;
      return _this.$data.tableData.filter((item) => {
        if (_this.$data.search && item.bookName) {
          return item.bookName.toLowerCase().includes(_this.$data.search.toLowerCase());
        } else {
          return true;
        }
      });
    }
  },
  data() {
    return {
      tableData: [],
      search: '',
      isUser: false,
      load: true
    };
  },
};
</script>
<style></style>

