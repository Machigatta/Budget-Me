<template>
  <div>
TEST
  </div>
</template>


<script>
import { db } from '../main'
export default {
  name: 'Home',
  title: "Home",
  data () {
    return {
      oTypes: []
    }
  },
  firestore () {
    return {
      oTypes: db.collection('oTypes').orderBy('createdAt')
    }
  }
}
</script>