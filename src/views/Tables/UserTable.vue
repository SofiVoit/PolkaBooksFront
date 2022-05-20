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
          <th>Жанр</th>
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

import { collection, query, getDocs, where } from "firebase/firestore";

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

    querySnapshot.then((data) => {
      data.docs.forEach((book) => {
        this.$data.tableData.push({
          bookName: book.get('name'),
          bookAutor: book.get('author'),
          opinion: book.get('opinion'),
        })
      });
    })
  },
  data() {
    return {
      tableData: [
      ],
    };
  },
};

/**{
          bookName: "Чистая архитектура",
          bookAutor: 'Р. Мартин',
          opinion: '10/10'
        },
        {
          bookName: "Пять пороков команды",
          bookAutor: 'П. Ленсиони',
          opinion: '10/10'
        },
        {
          bookName: "Совершенный код",
          bookAutor: 'С. Макконнелл',
          opinion: '10/10'
        },
        {
          bookName: "C# 3.0: A Beginner S Guide",
          bookAutor: 'Г. Шилдт',
          opinion: '9/10'
        },
        {
          bookName: "Язык программирования С++",
          bookAutor: 'Б. Страуструп',
          opinion: '9/10'
        },
        {
          bookName: "Философия Java",
          bookAutor: 'Б. Эккель',
          opinion: '8/10'
        },
        {
          bookName: "Алгоритмы: построение и анализ",
          bookAutor: 'Р. Ривест',
          opinion: '7/10'
        },
        {
          bookName: "JavaScript. Подробное руководство",
          bookAutor: 'Д. Флэнаган',
          opinion: '6/10'
        },
        {
          bookName: "Современное проектирование на С++",
          bookAutor: 'А. Александреску',
          opinion: '8/10'
        },
        {
          bookName: "JavaScript: сильные стороны",
          bookAutor: 'Д. Крокфорд',
          opinion: '9/10'
        } */
</script>
<style></style>
