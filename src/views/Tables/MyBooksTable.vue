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
          <base-button size="sm" type="info" class="ml-4" @click="add">Добавить</base-button>
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
import { collection, query, getDocs, where, doc, setDoc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


export default {
  name: "projects-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  beforeMount: function() {
    const q = query(collection(window.firestore, "books"), where("ownerId", "==", window.getCookie('authToken')));
    const querySnapshot = getDocs(q);
    this.$data.load = true;

    querySnapshot.then((data) => {
      data.docs.forEach((book) => {
        this.$data.tableData.push({
          id: book.id,
          bookName: book.get('name'),
          bookAutor: book.get('author'),
          opinion: book.get('opinion'),
        })
      });
      this.$data.load = false;
    })
  },
  mounted() {
    const auth = getAuth();
    auth.onAuthStateChanged(() => {
      if (auth.currentUser) {
        if (auth.currentUser.photoURL) {
          this.userOwner = auth.currentUser.photoURL;
        }
      }
    })
  },
  methods: {
    add() {
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
            const makeid = (length) => {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                  result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }
            setDoc(doc(window.firestore, "books", makeid(20).toUpperCase()), {
                name: res.value[0],
                opinion: res.value[2],
                author: res.value[1],
                ownerId: window.getCookie('authToken'),
                userOwner: this.$data.userOwner
            });
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
        return dataItem.id === row.item.id;
      });

      if (index !== -1) {
        this.$data.tableData.splice(index, 1);
        deleteDoc(doc(window.firestore, "books", row.item.id));
      }
    }
  },
  data() {
    return {
      tableData: [],
      userOwner: '',
      load: false
    };
  },
};
</script>
<style></style>
