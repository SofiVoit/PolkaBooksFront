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
        :load="load"
      >
        <template v-slot:columns>
          <th>Название</th>
          <th>Автор</th>
          <th>Жанр</th>
          <th style="text-align: center;">Наличие</th>
        </template>

        <template v-slot:default="row">
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <div :class="row.item.booking ? 'unaccent' : ''"><span class="name mb-0 text-sm">{{ row.item.bookName }}</span></div>
              </div>
            </div>
          </th>
          <th scope="row">
            <div class="media align-items-center {{row.item.booking ? 'unaccent' : ''}}">
              <div class="media-body">
                <div :class="row.item.booking ? 'unaccent' : ''"><span class="name mb-0 text-sm">{{ row.item.bookAutor }}</span></div>
              </div>
            </div>
          </th>
          <th scope="row">
            <div class="media align-items-center {{row.item.booking ? 'unaccent' : ''}}">
              <div class="media-body">
                <div :class="row.item.booking ? 'unaccent' : ''"><span class="name mb-0 text-sm">{{ row.item.opinion }}</span></div>
              </div>
            </div>
          </th>
          <th scope="row" class="mail">
            <div style="display: flex; justify-content: center;">
              <div style="font-size: 25px; cursor: pointer;" @click="booking(row)">
                <i v-if="row.item.booking" class="ni ni-fat-remove" style="color: #8D9CAE"></i>
                <i v-else class="ni ni-book-bookmark" style="color: #5e72e4;"></i>
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

import { collection, query, getDocs, where, doc, setDoc} from "firebase/firestore";


export default {
  name: "projects-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  beforeMount: function() {
    const q = query(collection(window.firestore, "books"), where("ownerId", "==", window.adminUid));
    const querySnapshot = getDocs(q);
    this.$data.load = true;

    querySnapshot.then((data) => {
      data.docs.forEach((book) => {
        this.$data.tableData.push({
          id: book.id,
          bookName: book.get('name'),
          bookAutor: book.get('author'),
          opinion: book.get('opinion'),
          ownerId: book.get('ownerId'),
          userOwner: book.get('userOwner'),
          booking: book.get('booking')
        })
      });
      this.$data.load = false;
    })
  },
  data() {
    return {
      tableData: [],
      load: false
    };
  },
  methods: {
    booking(row) {
      const index = this.$data.tableData.findIndex((dataItem) => {
        return dataItem.id === row.item.id;
      });

      if (index !== -1) {
        this.$data.tableData[index].booking = Boolean(!this.$data.tableData[index].booking);
        setDoc(doc(window.firestore, "books", this.$data.tableData[index].id), {
            name: this.$data.tableData[index].bookName,
            author: this.$data.tableData[index].bookAutor,
            opinion: this.$data.tableData[index].opinion,
            ownerId: this.$data.tableData[index].ownerId,
            userOwner: this.$data.tableData[index].userOwner,
            booking: this.$data.tableData[index].booking
        });
      }
    }
  },
};
</script>
<style>
.unaccent {
  color: #8D9CAE;
}</style>
