<template>
    <div>
        <form @submit="checkForm">
        <fieldset class="cat-creation">
            <legend>Create new Entry-Category</legend>
            <div class="row">
                <div class="col-sm-12 col-md-12">
                  <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </p>
                </div>
                <div class="col-sm-12 col-md-4 input-group fluid">
                    <label for="Categoryname">Categoryname:</label>
                    <input v-model="name" type="text" id="Categoryname" placeholder="Categoryname"/>
                </div>
                <div class="col-sm-12 col-md-4 input-group fluid">
                    <label for="faIcon">FontAwesome-Icon:</label>
                    <input v-model="icon" type="text" id="faIcon" placeholder="Iconname"/>
                </div>
                <div class="col-sm-12 col-md-4 input-group fluid">
                    <label for="Categorydescription">Description:</label>
                    <input v-model="description"  type="text" id="Categorydescription" placeholder=""/>
                </div>
                <div class="col-sm-12 col-md-2 col-md-offset-10">
                    <button type="submit">Add New Category</button>
                </div>
            </div>
        </fieldset>
        </form>
        <div>
            <table class="striped">
                <caption>Existing Categorys</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Icon</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(oType, idx) in oTypes" :key="idx">
                        <td>{{ oType.name }}</td>
                        <td><font-awesome-icon v-bind:icon="oType.icon" /></td>
                        <td>{{ oType.description }}</td>
                        <td>{{ oType.createdAt | formatFirebaseDate }}</td>
                        <td><button @click="deleteCategory(oType.id)">Delete</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import { db } from '../main'
export default {
  name: 'AdminConfig',
  title: 'Admin-Panel',
  data () {
    return {
      errors: [],
      oTypes: [],
      name: '',
      icon: '',
      description: ''
    }
  },
  firestore () {
    return {
      oTypes: db.collection('oTypes').orderBy('createdAt')
    }
  },
  methods: { 
    deleteCategory (id) {
      db.collection('oTypes').doc(id).delete()
    },
    clearForm(){
        this.errors = [];
        this.name = "";
        this.icon = "";
        this.description = "";
    },
    checkForm: function (e) {
      if (this.name && this.icon) {
        const createdAt = new Date()
        let name = this.name;
        let icon = this.icon;
        let description = this.description;
        db.collection('oTypes').add({ name, icon, description, createdAt })
        e.preventDefault();
        this.clearForm();
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.icon) {
        this.errors.push('Icon required.');
      }

      e.preventDefault();
    }
  }
}
</script>